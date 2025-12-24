import { NextRequest, NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';

// Inicializar el cliente de Anthropic
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

// Contexto FODA para Claude
const FODA_CONTEXT = `
Eres un asistente experto en análisis FODA del sector automotriz e Inteligencia Artificial en San Luis Potosí, México.

Fortalezas:
- Clúster automotriz consolidado (BMW, GM, Continental)
- Infraestructura educativa sólida
- Ubicación geográfica estratégica
- Experiencia en manufactura avanzada

Oportunidades:
- Transformación digital del sector
- Políticas públicas favorables
- Nearshoring
- Vehículos autónomos y eléctricos
- Colaboración academia-industria

Debilidades:
- Brecha de talento especializado en IA
- Inversión limitada en I+D
- Infraestructura digital incompleta
- Falta de vinculación

Amenazas:
- Competencia global
- Obsolescencia tecnológica
- Dependencia tecnológica
- Migración de talento
- Incertidumbre económica

Indicadores Científicos de Tercera Generación:
1. Índice de Citación Ponderada por Sector
2. Coeficiente de Colaboración Industria-Academia
3. Índice de Transferencia Tecnológica
4. Métrica de Impacto Social y Económico

Tu rol es responder preguntas sobre estos indicadores y generar proyecciones basadas en el análisis FODA.
`;

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();

    if (!message) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    // Llamar a Claude API
    const response = await anthropic.messages.create({
      model: 'claude-3-5-sonnet-20241022',
      max_tokens: 1024,
      messages: [
        {
          role: 'user',
          content: `${FODA_CONTEXT}\n\nPregunta del usuario: ${message}`,
        },
      ],
    });

    // Extraer el texto de la respuesta
    const textContent = response.content.find(
      (block) => block.type === 'text'
    );
    
    const reply = textContent && 'text' in textContent 
      ? textContent.text 
      : 'No response';

    return NextResponse.json({ reply });
  } catch (error) {
    console.error('Error calling Anthropic API:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}
