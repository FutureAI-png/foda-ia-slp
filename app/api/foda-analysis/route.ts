import { NextRequest, NextResponse } from 'next/server';
import { DATA_SOURCES } from '@/app/config/dataSources';

/**
 * AGENTES ESPECIALIZADOS PARA ANÁLISIS FODA CUANTITATIVO
 * Cada agente procesa variables específicas y genera indicadores procesables
 */

// Tipos para datos procesados
interface DataPoint {
  value: number;
  date: string;
  source: string;
}

interface AnalysisResult {
  indicator: string;
  value: number;
  trend: 'positive' | 'negative' | 'neutral';
  formula: string;
  interpretation: string;
  projection: {
    short_term: number; // 1 año
    medium_term: number; // 3 años
    long_term: number; // 5 años
  };
  confidence: number; // 0-1
}

/**
 * FÓRMULAS MATEMÁTICAS PARA ANÁLISIS CUANTITATIVO
 */

class MathematicalFormulas {
  /**
   * Tasa de crecimiento anual compuesto (CAGR)
   * CAGR = (Valor_Final / Valor_Inicial)^(1/n) - 1
   */
  static calculateCAGR(initialValue: number, finalValue: number, years: number): number {
    return Math.pow(finalValue / initialValue, 1 / years) - 1;
  }

  /**
   * Promedio móvil ponderado
   * WMA = Σ(valor_i * peso_i) / Σ(peso_i)
   */
  static weightedMovingAverage(values: number[], weights: number[]): number {
    const sum = values.reduce((acc, val, i) => acc + val * weights[i], 0);
    const weightSum = weights.reduce((a, b) => a + b, 0);
    return sum / weightSum;
  }

  /**
   * Desviación estándar para medir volatilidad
   * σ = sqrt(Σ(x_i - μ)² / n)
   */
  static standardDeviation(values: number[]): number {
    const mean = values.reduce((a, b) => a + b, 0) / values.length;
    const variance = values.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0) / values.length;
    return Math.sqrt(variance);
  }

  /**
   * Índice de tendencia lineal (regresión simple)
   * y = mx + b
   */
  static linearTrend(values: number[]): { slope: number; intercept: number } {
    const n = values.length;
    const x = Array.from({ length: n }, (_, i) => i);
    const sumX = x.reduce((a, b) => a + b, 0);
    const sumY = values.reduce((a, b) => a + b, 0);
    const sumXY = x.reduce((acc, xi, i) => acc + xi * values[i], 0);
    const sumX2 = x.reduce((acc, xi) => acc + xi * xi, 0);
    
    const slope = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
    const intercept = (sumY - slope * sumX) / n;
    
    return { slope, intercept };
  }

  /**
   * Índice compuesto normalizado (0-100)
   * I = Σ(indicador_i * peso_i) * 100 / Σ(peso_i)
   */
  static compositeIndex(indicators: number[], weights: number[]): number {
    return this.weightedMovingAverage(indicators, weights) * 100;
  }

  /**
   * Proyección exponencial
   * P(t) = P0 * e^(r*t)
   */
  static exponentialProjection(currentValue: number, growthRate: number, years: number): number {
    return currentValue * Math.exp(growthRate * years);
  }

  /**
   * Ratio de competitividad
   * RC = (Fortalezas + Oportunidades) / (Debilidades + Amenazas)
   */
  static competitivenessRatio(strengths: number, opportunities: number, 
                               weaknesses: number, threats: number): number {
    return (strengths + opportunities) / (weaknesses + threats);
  }
}

/**
 * AGENTE 1: FORTALEZAS (Análisis Interno Positivo)
 */
class StrengthsAgent {
  async analyze(): Promise<AnalysisResult[]> {
    const results: AnalysisResult[] = [];
    
    // Simular datos de APIs (en producción, hacer fetch real)
    const investmentData = [15.2, 16.8, 18.5, 20.1, 22.3]; // Inversión educativa últimos 5 años
    const innovationIndex = [0.45, 0.48, 0.52, 0.55, 0.58]; // Índice innovación
    const publicationsGrowth = [120, 145, 178, 210, 245]; // Publicaciones científicas
    
    // Análisis 1: Crecimiento en inversión educativa
    const cagr = MathematicalFormulas.calculateCAGR(investmentData[0], investmentData[4], 4);
    const trend = MathematicalFormulas.linearTrend(investmentData);
    
    results.push({
      indicator: 'Inversión en Educación Superior',
      value: investmentData[4],
      trend: cagr > 0.05 ? 'positive' : 'neutral',
      formula: `CAGR = (${investmentData[4]}/${investmentData[0]})^(1/4) - 1 = ${(cagr * 100).toFixed(2)}%`,
      interpretation: `Crecimiento anual del ${(cagr * 100).toFixed(2)}% indica fortalecimiento constante`,
      projection: {
        short_term: MathematicalFormulas.exponentialProjection(investmentData[4], cagr, 1),
        medium_term: MathematicalFormulas.exponentialProjection(investmentData[4], cagr, 3),
        long_term: MathematicalFormulas.exponentialProjection(investmentData[4], cagr, 5)
      },
      confidence: 0.85
    });
    
    // Análisis 2: Capacidad de innovación
    const innovationGrowth = MathematicalFormulas.calculateCAGR(innovationIndex[0], innovationIndex[4], 4);
    
    results.push({
      indicator: 'Índice de Capacidad de Innovación',
      value: innovationIndex[4],
      trend: innovationGrowth > 0 ? 'positive' : 'neutral',
      formula: `I_innovación = Σ(patentes, publicaciones, I+D) / población_académica`,
      interpretation: `Índice ${innovationIndex[4]} refleja alta capacidad de generación de conocimiento`,
      projection: {
        short_term: innovationIndex[4] * (1 + innovationGrowth),
        medium_term: innovationIndex[4] * Math.pow(1 + innovationGrowth, 3),
        long_term: innovationIndex[4] * Math.pow(1 + innovationGrowth, 5)
      },
      confidence: 0.78
    });
    
    return results;
  }
}

/**
 * AGENTE 2: OPORTUNIDADES (Análisis Externo Positivo)
 */
class OpportunitiesAgent {
  async analyze(): Promise<AnalysisResult[]> {
    const results: AnalysisResult[] = [];
    
    // Datos simulados de fuentes externas
    const demographicBonus = [0.65, 0.68, 0.70, 0.71, 0.72]; // Bono demográfico (población 15-64)
    const digitalDemand = [1200, 1450, 1780, 2180, 2650]; // Demanda carreras digitales (miles)
    const industryInvestment = [8.5, 10.2, 12.8, 15.4, 18.9]; // Inversión industria 4.0 (miles millones)
    
    // Análisis 1: Ventana demográfica
    const demographicTrend = MathematicalFormulas.linearTrend(demographicBonus);
    
    results.push({
      indicator: 'Bono Demográfico',
      value: demographicBonus[4],
      trend: demographicTrend.slope > 0 ? 'positive' : 'negative',
      formula: `BD = (Población 15-64) / Población_total = ${demographicBonus[4]}`,
      interpretation: `${(demographicBonus[4] * 100).toFixed(1)}% población en edad productiva representa ventana de oportunidad`,
      projection: {
        short_term: demographicBonus[4] + demographicTrend.slope,
        medium_term: demographicBonus[4] + demographicTrend.slope * 3,
        long_term: demographicBonus[4] + demographicTrend.slope * 5
      },
      confidence: 0.92
    });
    
    // Análisis 2: Demanda en economía digital
    const digitalCAGR = MathematicalFormulas.calculateCAGR(digitalDemand[0], digitalDemand[4], 4);
    
    results.push({
      indicator: 'Crecimiento Demanda Profesionales Digitales',
      value: digitalDemand[4],
      trend: 'positive',
      formula: `CAGR_digital = ${(digitalCAGR * 100).toFixed(2)}% anual`,
      interpretation: `Demanda creciente de ${(digitalCAGR * 100).toFixed(2)}% anual en perfiles tecnológicos`,
      projection: {
        short_term: MathematicalFormulas.exponentialProjection(digitalDemand[4], digitalCAGR, 1),
        medium_term: MathematicalFormulas.exponentialProjection(digitalDemand[4], digitalCAGR, 3),
        long_term: MathematicalFormulas.exponentialProjection(digitalDemand[4], digitalCAGR, 5)
      },
      confidence: 0.88
    });
    
    return results;
  }
}

/**
 * AGENTE 3: DEBILIDADES (Análisis Interno Negativo)
 */
class WeaknessesAgent {
  async analyze(): Promise<AnalysisResult[]> {
    const results: AnalysisResult[] = [];
    
    // Datos de problemas internos
    const desertionRates = [18.2, 17.5, 16.8, 16.2, 15.8]; // Tasa deserción (%)
    const graduationEfficiency = [0.42, 0.44, 0.46, 0.47, 0.48]; // Eficiencia titulación
    const budgetConstraints = [0.78, 0.76, 0.74, 0.72, 0.70]; // Suficiencia presupuestal
    
    // Análisis 1: Deserción estudiantil
    const desertionTrend = MathematicalFormulas.linearTrend(desertionRates);
    
    results.push({
      indicator: 'Tasa de Deserción',
      value: desertionRates[4],
      trend: desertionTrend.slope < 0 ? 'positive' : 'negative',
      formula: `D = (Estudiantes_abandonan / Total_matriculados) * 100 = ${desertionRates[4]}%`,
      interpretation: `Deserción del ${desertionRates[4]}% requiere estrategias de retención`,
      projection: {
        short_term: desertionRates[4] + desertionTrend.slope,
        medium_term: desertionRates[4] + desertionTrend.slope * 3,
        long_term: desertionRates[4] + desertionTrend.slope * 5
      },
      confidence: 0.82
    });
    
    // Análisis 2: Eficiencia terminal
    const efficiencyGrowth = MathematicalFormulas.calculateCAGR(graduationEfficiency[0], graduationEfficiency[4], 4);
    
    results.push({
      indicator: 'Eficiencia de Titulación',
      value: graduationEfficiency[4],
      trend: efficiencyGrowth > 0 ? 'positive' : 'negative',
      formula: `ET = Titulados_tiempo / Ingreso_cohorte = ${(graduationEfficiency[4] * 100).toFixed(1)}%`,
      interpretation: `Solo ${(graduationEfficiency[4] * 100).toFixed(1)}% se titulan en tiempo, requiere mejoras`,
      projection: {
        short_term: graduationEfficiency[4] * (1 + efficiencyGrowth),
        medium_term: graduationEfficiency[4] * Math.pow(1 + efficiencyGrowth, 3),
        long_term: graduationEfficiency[4] * Math.pow(1 + efficiencyGrowth, 5)
      },
      confidence: 0.76
    });
    
    return results;
  }
}

/**
 * AGENTE 4: AMENAZAS (Análisis Externo Negativo)
 */
class ThreatsAgent {
  async analyze(): Promise<AnalysisResult[]> {
    const results: AnalysisResult[] = [];
    
    // Datos de amenazas externas
    const economicVolatility = [0.28, 0.32, 0.35, 0.38, 0.42]; // Volatilidad económica
    const unemploymentGrad = [8.5, 9.2, 10.1, 10.8, 11.5]; // Desempleo recién egresados (%)
    const globalCompetition = [145, 168, 195, 228, 265]; // Universidades competidoras
    
    // Análisis 1: Incertidumbre económica
    const volatilityTrend = MathematicalFormulas.linearTrend(economicVolatility);
    const volatilityStd = MathematicalFormulas.standardDeviation(economicVolatility);
    
    results.push({
      indicator: 'Volatilidad Económica',
      value: economicVolatility[4],
      trend: volatilityTrend.slope > 0 ? 'negative' : 'positive',
      formula: `V = σ(inflación, tipo_cambio, PIB) = ${economicVolatility[4].toFixed(2)}`,
      interpretation: `Alta volatilidad ${economicVolatility[4].toFixed(2)} dificulta planificación estratégica`,
      projection: {
        short_term: economicVolatility[4] + volatilityTrend.slope,
        medium_term: economicVolatility[4] + volatilityTrend.slope * 3,
        long_term: economicVolatility[4] + volatilityTrend.slope * 5
      },
      confidence: 0.68
    });
    
    // Análisis 2: Desempleo juvenil
    const unemploymentCAGR = MathematicalFormulas.calculateCAGR(unemploymentGrad[0], unemploymentGrad[4], 4);
    
    results.push({
      indicator: 'Desempleo Recién Egresados',
      value: unemploymentGrad[4],
      trend: 'negative',
      formula: `U_grad = Egresados_sin_empleo / Total_egresados * 100 = ${unemploymentGrad[4]}%`,
      interpretation: `Desempleo ${unemploymentGrad[4]}% afecta percepción calidad educativa`,
      projection: {
        short_term: MathematicalFormulas.exponentialProjection(unemploymentGrad[4], unemploymentCAGR, 1),
        medium_term: MathematicalFormulas.exponentialProjection(unemploymentGrad[4], unemploymentCAGR, 3),
        long_term: MathematicalFormulas.exponentialProjection(unemploymentGrad[4], unemploymentCAGR, 5)
      },
      confidence: 0.72
    });
    
    return results;
  }
}

/**
 * ORQUESTADOR DE AGENTES - Coordina análisis completo
 */
class FodaOrchestrator {
  private strengthsAgent: StrengthsAgent;
  private opportunitiesAgent: OpportunitiesAgent;
  private weaknessesAgent: WeaknessesAgent;
  private threatsAgent: ThreatsAgent;
  
  constructor() {
    this.strengthsAgent = new StrengthsAgent();
    this.opportunitiesAgent = new OpportunitiesAgent();
    this.weaknessesAgent = new WeaknessesAgent();
    this.threatsAgent = new ThreatsAgent();
  }
  
  async runCompleteAnalysis() {
    // Ejecutar todos los agentes en paralelo
    const [strengths, opportunities, weaknesses, threats] = await Promise.all([
      this.strengthsAgent.analyze(),
      this.opportunitiesAgent.analyze(),
      this.weaknessesAgent.analyze(),
      this.threatsAgent.analyze()
    ]);
    
    // Calcular índices agregados
    const strengthsScore = strengths.reduce((sum, s) => sum + s.value * s.confidence, 0) / strengths.length;
    const opportunitiesScore = opportunities.reduce((sum, o) => sum + o.value * o.confidence, 0) / opportunities.length;
    const weaknessesScore = weaknesses.reduce((sum, w) => sum + w.value * w.confidence, 0) / weaknesses.length;
    const threatsScore = threats.reduce((sum, t) => sum + t.value * t.confidence, 0) / threats.length;
    
    // Calcular ratio de competitividad
    const competitivenessRatio = MathematicalFormulas.competitivenessRatio(
      strengthsScore,
      opportunitiesScore,
      weaknessesScore,
      threatsScore
    );
    
    // Generar matriz de estrategias
    const strategies = this.generateStrategicMatrix(strengths, opportunities, weaknesses, threats);
    
    return {
      timestamp: new Date().toISOString(),
      summary: {
        strengths: {
          score: strengthsScore,
          count: strengths.length,
          trend: 'positive'
        },
        opportunities: {
          score: opportunitiesScore,
          count: opportunities.length,
          trend: 'positive'
        },
        weaknesses: {
          score: weaknessesScore,
          count: weaknesses.length,
          trend: 'negative'
        },
        threats: {
          score: threatsScore,
          count: threats.length,
          trend: 'negative'
        },
        competitivenessRatio,
        overallHealth: this.calculateOverallHealth(competitivenessRatio)
      },
      details: {
        strengths,
        opportunities,
        weaknesses,
        threats
      },
      strategies,
      dataSources: DATA_SOURCES
    };
  }
  
  private generateStrategicMatrix(strengths: AnalysisResult[], opportunities: AnalysisResult[], 
                                  weaknesses: AnalysisResult[], threats: AnalysisResult[]) {
    return {
      FO: [
        'Potenciar capacidad de innovación para capturar demanda en economía digital',
        'Aprovechar bono demográfico aumentando oferta de programas de calidad'
      ],
      FA: [
        'Fortalecer vinculación empresarial para reducir desempleo de egresados',
        'Diversificar fuentes de financiamiento ante volatilidad económica'
      ],
      DO: [
        'Desarrollar programas de retención aprovechando ventana demográfica',
        'Mejorar eficiencia terminal mediante modelos flexibles de titulación'
      ],
      DA: [
        'Implementar sistema de alertas tempranas ante deserción y vulnerabilidad económica',
        'Crear fondos de emergencia para estudiantes en riesgo por crisis económicas'
      ]
    };
  }
  
  private calculateOverallHealth(ratio: number): string {
    if (ratio >= 1.5) return 'Excelente';
    if (ratio >= 1.2) return 'Bueno';
    if (ratio >= 0.9) return 'Moderado';
    if (ratio >= 0.7) return 'Débil';
    return 'Crítico';
  }
}

/**
 * API ROUTE HANDLER
 */
export async function GET(request: NextRequest) {
  try {
    const orchestrator = new FodaOrchestrator();
    const analysis = await orchestrator.runCompleteAnalysis();
    
    return NextResponse.json({
      success: true,
      data: analysis
    });
  } catch (error) {
    console.error('Error en análisis FODA:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Error al procesar análisis FODA' 
      },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { aspect, timeframe } = body;
    
    const orchestrator = new FodaOrchestrator();
    const fullAnalysis = await orchestrator.runCompleteAnalysis();
    
    // Filtrar por aspecto específico si se solicita
    let filteredData = fullAnalysis;
    if (aspect && ['strengths', 'opportunities', 'weaknesses', 'threats'].includes(aspect)) {
      filteredData = {
        ...fullAnalysis,
        details: {
          [aspect]: fullAnalysis.details[aspect as keyof typeof fullAnalysis.details]
        }
      };
    }
    
    return NextResponse.json({
      success: true,
      data: filteredData
    });
  } catch (error) {
    console.error('Error en análisis FODA POST:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Error al procesar solicitud de análisis' 
      },
      { status: 500 }
    );
  }
}
