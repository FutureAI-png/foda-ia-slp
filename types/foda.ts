// Tipos para la integración con el backend FODA-IA

/**
 * Tipo de elemento en el análisis FODA
 */
export type FodaTipo = 'fortalezas' | 'oportunidades' | 'debilidades' | 'amenazas';

/**
 * Tendencia de un indicador
 */
export type Tendencia = 'up' | 'down' | 'stable';

/**
 * Item individual del análisis FODA
 */
export interface FodaItem {
  tipo: FodaTipo;
  title: string;
  icon: string;
  color: string;
  items: string[];
}

/**
 * Indicador científico de tercera generación
 */
export interface Indicador {
  id: string;                    // 'ICPS', 'CCIA', 'ITT', 'MIS'
  nombre: string;                // Nombre completo del indicador
  valor: number;                 // Valor actual del indicador
  tendencia: Tendencia;          // Tendencia del indicador
  ultimaActualizacion: string;   // ISO 8601 timestamp
  descripcion: string;           // Descripción breve
  formula: string;               // Fórmula matemática
}

/**
 * Conjunto completo de indicadores
 */
export interface IndicadoresData {
  ICPS: Indicador;
  CCIA: Indicador;
  ITT: Indicador;
  MIS: Indicador;
}

/**
 * Reporte de investigación
 */
export interface ResearchReport {
  slug: string;
  title: string;
  summary: string;
  year: number;
}

/**
 * Escenario estratégico
 */
export interface Escenario {
  tipo: 'optimista' | 'moderado' | 'pesimista';
  title: string;
  color: string;
  descripcion: string;
  ejemplo: string;
}

/**
 * Respuesta del backend para análisis FODA
 */
export interface FodaResponse {
  success: boolean;
  data: FodaItem[];
  timestamp: string;
  version: string;
}

/**
 * Respuesta del backend para indicadores
 */
export interface IndicadoresResponse {
  success: boolean;
  data: IndicadoresData;
  timestamp: string;
  version: string;
}

/**
 * Request para generar nuevo análisis
 */
export interface GenerarAnalisisRequest {
  rangoAnios?: [number, number];
  oem?: string[];
  indicadores?: string[];
  incluirProyecciones?: boolean;
}

/**
 * Response de generación de análisis
 */
export interface GenerarAnalisisResponse {
  success: boolean;
  analisisId: string;
  foda: FodaItem[];
  indicadores: IndicadoresData;
  resumen: string;
  timestamp: string;
}
