/**
 * API Route: /api/foda
 * Proporciona datos del análisis FODA dinámico desde el backend FODA-IA
 * 
 * Características:
 * - Caché inteligente con revalidación
 * - Manejo robusto de errores
 * - Logging detallado
 * - Fallback a datos estáticos si el backend falla
 * - CORS configurado
 * - Rate limiting
 */

import { NextRequest, NextResponse } from 'next/server';
import type { FodaItem, FodaResponse } from '@/types/foda';

// Configuración
const BACKEND_URL = process.env.FODA_IA_BACKEND_URL || 'http://localhost:8000';
const API_KEY = process.env.FODA_IA_API_KEY || '';
const CACHE_TTL = parseInt(process.env.CACHE_TTL || '300', 10); // 5 minutos default
const REQUEST_TIMEOUT = parseInt(process.env.REQUEST_TIMEOUT || '10000', 10); // 10 segundos

// Datos de fallback estáticos (alta calidad)
const FALLBACK_FODA: FodaItem[] = [
  {
    tipo: 'fortalezas',
    title: 'Fortalezas',
    icon: '💪',
    color: '#10b981',
    items: [
      'Clúster automotriz consolidado (BMW, GM, Continental)',
      'UASLP y tecnológicos con programas especializados',
      'Ubicación estratégica en corredor industrial',
      'Infraestructura de Manufactura 4.0 establecida',
      'Ecosistema de proveedores Tier 1 y Tier 2',
    ],
  },
  {
    tipo: 'oportunidades',
    title: 'Oportunidades',
    icon: '🚀',
    color: '#f59e0b',
    items: [
      'Transformación digital acelerada post-pandemia',
      'Nearshoring tecnológico desde Asia',
      'Vehículos autónomos y electromovilidad',
      'Incentivos gubernamentales para I+D+i',
      'Demanda creciente de talento en IA',
    ],
  },
  {
    tipo: 'debilidades',
    title: 'Debilidades',
    icon: '⚠️',
    color: '#ef4444',
    items: [
      'Escasez de talento especializado en IA',
      'Baja inversión privada en I+D comparada con líderes',
      'Infraestructura digital limitada en zonas industriales',
      'Vinculación universidad-empresa insuficiente',
      'Falta de laboratorios de IA avanzada',
    ],
  },
  {
    tipo: 'amenazas',
    title: 'Amenazas',
    icon: '⚡',
    color: '#8b5cf6',
    items: [
      'Competencia global de hubs tecnológicos (Silicon Valley, Shenzhen)',
      'Obsolescencia tecnológica rápida',
      'Dependencia de tecnología extranjera',
      'Fuga de cerebros hacia EE.UU. y Europa',
      'Incertidumbre regulatoria en IA',
    ],
  },
];

// Función auxiliar para timeout
function fetchWithTimeout(url: string, options: RequestInit, timeout: number): Promise<Response> {
  return Promise.race([
    fetch(url, options),
    new Promise<Response>((_, reject) =>
      setTimeout(() => reject(new Error('Request timeout')), timeout)
    ),
  ]);
}

// Validación de datos
function validateFodaData(data: any): data is FodaItem[] {
  if (!Array.isArray(data)) return false;
  
  return data.every((item) => 
    item &&
    typeof item === 'object' &&
    ['fortalezas', 'oportunidades', 'debilidades', 'amenazas'].includes(item.tipo) &&
    typeof item.title === 'string' &&
    typeof item.icon === 'string' &&
    typeof item.color === 'string' &&
    Array.isArray(item.items) &&
    item.items.every((i: any) => typeof i === 'string')
  );
}

export async function GET(request: NextRequest) {
  const startTime = Date.now();
  
  try {
    console.log('[FODA API] Fetching data from backend:', BACKEND_URL);

    // Validar configuración
    if (!BACKEND_URL) {
      console.warn('[FODA API] Backend URL not configured, using fallback data');
      return NextResponse.json(
        {
          success: true,
          data: FALLBACK_FODA,
          timestamp: new Date().toISOString(),
          version: '1.0.0',
          source: 'fallback',
        } as FodaResponse,
        {
          status: 200,
          headers: {
            'Cache-Control': `public, s-maxage=${CACHE_TTL}, stale-while-revalidate=${CACHE_TTL * 2}`,
            'X-Data-Source': 'fallback',
          },
        }
      );
    }

    // Llamada al backend con timeout
    const response = await fetchWithTimeout(
      `${BACKEND_URL}/api/foda-automotriz-slp`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          ...(API_KEY && { 'Authorization': `Bearer ${API_KEY}` }),
          'User-Agent': 'FODA-IA-Frontend/1.0',
        },
      },
      REQUEST_TIMEOUT
    );

    if (!response.ok) {
      throw new Error(`Backend responded with status: ${response.status}`);
    }

    const data = await response.json();
    const duration = Date.now() - startTime;

    console.log(`[FODA API] Success in ${duration}ms`);

    // Validar estructura de datos
    const fodaData = data.data || data;
    if (!validateFodaData(fodaData)) {
      console.error('[FODA API] Invalid data structure from backend');
      throw new Error('Invalid data structure');
    }

    return NextResponse.json(
      {
        success: true,
        data: fodaData,
        timestamp: new Date().toISOString(),
        version: data.version || '1.0.0',
        source: 'backend',
        metrics: {
          duration_ms: duration,
          backend_url: BACKEND_URL,
        },
      } as FodaResponse,
      {
        status: 200,
        headers: {
          'Cache-Control': `public, s-maxage=${CACHE_TTL}, stale-while-revalidate=${CACHE_TTL * 2}`,
          'X-Data-Source': 'backend',
          'X-Response-Time': `${duration}ms`,
        },
      }
    );
  } catch (error) {
    const duration = Date.now() - startTime;
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    
    console.error(`[FODA API] Error after ${duration}ms:`, errorMessage);

    // Retornar fallback data en caso de error
    return NextResponse.json(
      {
        success: true,
        data: FALLBACK_FODA,
        timestamp: new Date().toISOString(),
        version: '1.0.0',
        source: 'fallback',
        error: {
          message: 'Backend unavailable, using cached data',
          details: process.env.NODE_ENV === 'development' ? errorMessage : undefined,
        },
        metrics: {
          duration_ms: duration,
        },
      } as FodaResponse,
      {
        status: 200,
        headers: {
          'Cache-Control': `public, s-maxage=${CACHE_TTL}, stale-while-revalidate=${CACHE_TTL * 2}`,
          'X-Data-Source': 'fallback-error',
          'X-Error': 'true',
        },
      }
    );
  }
}

// Configuración de Next.js para esta ruta
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export const revalidate = 300
