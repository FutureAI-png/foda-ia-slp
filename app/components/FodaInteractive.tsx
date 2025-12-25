'use client';

import { useState, useEffect } from 'react';

interface AnalysisResult {
  indicator: string;
  value: number;
  trend: 'positive' | 'negative' | 'neutral';
  formula: string;
  interpretation: string;
  projection: {
    short_term: number;
    medium_term: number;
    long_term: number;
  };
  confidence: number;
}

interface FodaData {
  timestamp: string;
  summary: {
    strengths: { score: number; count: number; trend: string };
    opportunities: { score: number; count: number; trend: string };
    weaknesses: { score: number; count: number; trend: string };
    threats: { score: number; count: number; trend: string };
    competitivenessRatio: number;
    overallHealth: string;
  };
  details: {
    strengths: AnalysisResult[];
    opportunities: AnalysisResult[];
    weaknesses: AnalysisResult[];
    threats: AnalysisResult[];
  };
  strategies: {
    FO: string[];
    FA: string[];
    DO: string[];
    DA: string[];
  };
}

export default function FodaInteractive() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [fodaData, setFodaData] = useState<FodaData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch FODA analysis data
    const fetchFodaData = async () => {
      try {
        const response = await fetch('/api/foda-analysis');
        if (!response.ok) throw new Error('Error al cargar datos');
        const result = await response.json();
        if (result.success) {
          setFodaData(result.data);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error desconocido');
      } finally {
        setLoading(false);
      }
    };

    fetchFodaData();
  }, []);

  const fodaSections = {
    fortalezas: {
      title: 'Fortalezas',
      color: '#10b981',
      icon: '✔',
      items: fodaData?.details.strengths || [],
      description: 'Capacidades internas que nos posicionan favorablemente'
    },
    oportunidades: {
      title: 'Oportunidades',
      color: '#f59e0b',
      icon: '🔥',
      items: fodaData?.details.opportunities || [],
      description: 'Factores externos que podemos aprovechar'
    },
    debilidades: {
      title: 'Debilidades',
      color: '#ef4444',
      icon: '⚠',
      items: fodaData?.details.weaknesses || [],
      description: 'Aspectos internos que requieren mejora'
    },
    amenazas: {
      title: 'Amenazas',
      color: '#8b5cf6',
      icon: '⚡',
      items: fodaData?.details.threats || [],
      description: 'Factores externos que representan riesgos'
    }
  };

  if (loading) {
    return (
      <div style={{
        maxWidth: '1200px',
        margin: '60px auto',
        padding: '40px 20px',
        textAlign: 'center'
      }}>
        <div style={{
          fontSize: '1.2rem',
          color: '#0070f3'
        }}>
          📊 Cargando análisis FODA...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{
        maxWidth: '1200px',
        margin: '60px auto',
        padding: '40px 20px',
        textAlign: 'center',
        color: '#ef4444'
      }}>
        ⚠ Error: {error}
      </div>
    );
  }

  return (
    <div style={{
      maxWidth: '1200px',
      margin: '60px auto',
      padding: '40px 20px'
    }}>
      {/* Header with Overall Health */}
      <div style={{
        textAlign: 'center',
        marginBottom: '40px'
      }}>
        <h2 style={{
          fontSize: '2.5rem',
          fontWeight: 'bold',
          marginBottom: '20px',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          Análisis FODA Interactivo con IA
        </h2>
        
        {fodaData && (
          <div style={{
            display: 'inline-block',
            padding: '15px 30px',
            background: '#f0f9ff',
            borderRadius: '15px',
            border: '2px solid #0ea5e9'
          }}>
            <div style={{ fontSize: '0.9rem', color: '#0369a1', marginBottom: '5px' }}>
              Estado General del Sistema
            </div>
            <div style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#0ea5e9' }}>
              {fodaData.summary.overallHealth}
            </div>
            <div style={{ fontSize: '0.85rem', color: '#64748b', marginTop: '5px' }}>
              Ratio de Competitividad: {fodaData.summary.competitivenessRatio.toFixed(2)}
            </div>
          </div>
        )}
      </div>

      {/* Interactive FODA Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '25px',
        marginBottom: '50px'
      }}>
        {Object.entries(fodaSections).map(([key, section]) => (
          <div
            key={key}
            onClick={() => setActiveSection(activeSection === key ? null : key)}
            style={{
              background: activeSection === key 
                ? `linear-gradient(135deg, ${section.color}22 0%, ${section.color}11 100%)`
                : '#ffffff',
              border: `3px solid ${activeSection === key ? section.color : '#e5e7eb'}`,
              borderRadius: '20px',
              padding: '30px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              transform: activeSection === key ? 'scale(1.05)' : 'scale(1)',
              boxShadow: activeSection === key 
                ? `0 20px 40px ${section.color}33`
                : '0 4px 6px rgba(0,0,0,0.1)'
            }}
          >
            <div style={{
              fontSize: '3rem',
              marginBottom: '15px',
              textAlign: 'center'
            }}>
              {section.icon}
            </div>
            <h3 style={{
              color: section.color,
              fontSize: '1.5rem',
              fontWeight: 'bold',
              marginBottom: '10px',
              textAlign: 'center'
            }}>
              {section.title}
            </h3>
            <p style={{
              color: '#64748b',
              fontSize: '0.9rem',
              textAlign: 'center',
              marginBottom: '15px'
            }}>
              {section.description}
            </p>
            <div style={{
              textAlign: 'center',
              fontSize: '0.85rem',
              color: '#94a3b8'
            }}>
              {section.items.length} indicadores analizados
            </div>
          </div>
        ))}
      </div>

      {/* Detailed Analysis */}
      {activeSection && fodaSections[activeSection as keyof typeof fodaSections] && (
        <div style={{
          background: '#f8fafc',
          borderRadius: '20px',
          padding: '40px',
          marginTop: '30px',
          border: '2px solid #e2e8f0'
        }}>
          <h3 style={{
            fontSize: '2rem',
            color: fodaSections[activeSection as keyof typeof fodaSections].color,
            marginBottom: '30px',
            textAlign: 'center'
          }}>
            {fodaSections[activeSection as keyof typeof fodaSections].title} - Análisis Detallado
          </h3>
          
          <div style={{ display: 'grid', gap: '25px' }}>
            {fodaSections[activeSection as keyof typeof fodaSections].items.map((item, index) => (
              <div
                key={index}
                style={{
                  background: '#ffffff',
                  borderRadius: '15px',
                  padding: '25px',
                  border: `2px solid ${fodaSections[activeSection as keyof typeof fodaSections].color}22`,
                  boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
                }}
              >
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'start',
                  marginBottom: '15px'
                }}>
                  <h4 style={{
                    fontSize: '1.2rem',
                    fontWeight: 'bold',
                    color: '#1e293b',
                    flex: 1
                  }}>
                    {item.indicator}
                  </h4>
                  <span style={{
                    background: item.trend === 'positive' ? '#dcfce7' : item.trend === 'negative' ? '#fee2e2' : '#f1f5f9',
                    color: item.trend === 'positive' ? '#166534' : item.trend === 'negative' ? '#991b1b' : '#475569',
                    padding: '5px 12px',
                    borderRadius: '20px',
                    fontSize: '0.75rem',
                    fontWeight: 'bold'
                  }}>
                    {item.trend === 'positive' ? '↑ Positivo' : item.trend === 'negative' ? '↓ Negativo' : '→ Neutral'}
                  </span>
                </div>
                
                <div style={{
                  background: '#f8fafc',
                  padding: '15px',
                  borderRadius: '10px',
                  marginBottom: '15px'
                }}>
                  <div style={{ fontSize: '0.85rem', color: '#64748b', marginBottom: '5px' }}>Valor Actual</div>
                  <div style={{ fontSize: '2rem', fontWeight: 'bold', color: fodaSections[activeSection as keyof typeof fodaSections].color }}>
                    {item.value.toFixed(2)}
                  </div>
                </div>
                
                <div style={{ marginBottom: '15px' }}>
                  <div style={{ fontSize: '0.85rem', color: '#64748b', marginBottom: '8px' }}>Fórmula</div>
                  <code style={{
                    background: '#1e293b',
                    color: '#e2e8f0',
                    padding: '10px 15px',
                    borderRadius: '8px',
                    fontSize: '0.85rem',
                    display: 'block',
                    overflow: 'auto'
                  }}>
                    {item.formula}
                  </code>
                </div>
                
                <p style={{
                  color: '#475569',
                  fontSize: '0.95rem',
                  lineHeight: '1.6',
                  marginBottom: '15px'
                }}>
                  {item.interpretation}
                </p>
                
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '10px',
                  marginTop: '15px'
                }}>
                  <div style={{ textAlign: 'center', padding: '10px', background: '#f1f5f9', borderRadius: '8px' }}>
                    <div style={{ fontSize: '0.75rem', color: '#64748b', marginBottom: '5px' }}>Corto Plazo</div>
                    <div style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#334155' }}>
                      {item.projection.short_term.toFixed(2)}
                    </div>
                  </div>
                  <div style={{ textAlign: 'center', padding: '10px', background: '#f1f5f9', borderRadius: '8px' }}>
                    <div style={{ fontSize: '0.75rem', color: '#64748b', marginBottom: '5px' }}>Mediano Plazo</div>
                    <div style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#334155' }}>
                      {item.projection.medium_term.toFixed(2)}
                    </div>
                  </div>
                  <div style={{ textAlign: 'center', padding: '10px', background: '#f1f5f9', borderRadius: '8px' }}>
                    <div style={{ fontSize: '0.75rem', color: '#64748b', marginBottom: '5px' }}>Largo Plazo</div>
                    <div style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#334155' }}>
                      {item.projection.long_term.toFixed(2)}
                    </div>
                  </div>
                </div>
                
                <div style={{
                  marginTop: '15px',
                  padding: '10px',
                  background: '#fef3c7',
                  borderRadius: '8px',
                  fontSize: '0.85rem',
                  color: '#92400e'
                }}>
                  🎯 Confianza del análisis: {(item.confidence * 100).toFixed(0)}%
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Strategic Matrix */}
      {fodaData && (
        <div style={{
          marginTop: '50px',
          background: '#ffffff',
          borderRadius: '20px',
          padding: '40px',
          border: '2px solid #e2e8f0'
        }}>
          <h3 style={{
            fontSize: '2rem',
            textAlign: 'center',
            marginBottom: '30px',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Matriz de Estrategias
          </h3>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '20px'
          }}>
            {[
              { key: 'FO', title: 'Fortalezas + Oportunidades', color: '#10b981', icon: '🚀' },
              { key: 'FA', title: 'Fortalezas + Amenazas', color: '#f59e0b', icon: '🛡️' },
              { key: 'DO', title: 'Debilidades + Oportunidades', color: '#3b82f6', icon: '💡' },
              { key: 'DA', title: 'Debilidades + Amenazas', color: '#ef4444', icon: '⚠️' }
            ].map(strategy => (
              <div
                key={strategy.key}
                style={{
                  background: `${strategy.color}11`,
                  border: `2px solid ${strategy.color}44`,
                  borderRadius: '15px',
                  padding: '25px'
                }}
              >
                <div style={{
                  fontSize: '2rem',
                  marginBottom: '10px',
                  textAlign: 'center'
                }}>
                  {strategy.icon}
                </div>
                <h4 style={{
                  color: strategy.color,
                  fontSize: '1.1rem',
                  fontWeight: 'bold',
                  marginBottom: '15px',
                  textAlign: 'center'
                }}>
                  {strategy.title}
                </h4>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0
                }}>
                  {fodaData.strategies[strategy.key as keyof typeof fodaData.strategies].map((item, idx) => (
                    <li
                      key={idx}
                      style={{
                        color: '#475569',
                        fontSize: '0.9rem',
                        lineHeight: '1.6',
                        marginBottom: '10px',
                        paddingLeft: '20px',
                        position: 'relative'
                      }}
                    >
                      <span style={{
                        position: 'absolute',
                        left: 0,
                        color: strategy.color,
                        fontWeight: 'bold'
                      }}>
                        •
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Data Sources Info */}
      <div style={{
        marginTop: '40px',
        padding: '25px',
        background: '#f9fafb',
        borderRadius: '15px',
        border: '2px solid #e5e7eb',
        textAlign: 'center'
      }}>
        <p style={{
          color: '#6b7280',
          fontSize: '0.9rem',
          margin: 0
        }}>
          📊 Análisis generado con datos de: INEGI, Banxico, World Bank, OECD, UNESCO y otras fuentes oficiales
        </p>
        <p style={{
          color: '#9ca3af',
          fontSize: '0.8rem',
          marginTop: '5px'
        }}>
          Última actualización: {fodaData && new Date(fodaData.timestamp).toLocaleString('es-MX')}
        </p>
      </div>
    </div>
  );
}
