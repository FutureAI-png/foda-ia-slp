'use client';
import { useState } from 'react';

const researchReports = [
  {
    slug: "reporte-1-indicadores-tercera-generacion",
    title: "Reporte 1: Fundamentación de Indicadores de Tercera Generación",
    summary:
      "Marco conceptual y justificación teórica de los indicadores ICPS, CCIA, ITT y MIS como base del sistema FODA IA.",
    year: 2025,
  },
  {
    slug: "reporte-2-analisis-cuantitativo",
    title: "Reporte 2: Análisis Cuantitativo del Sector Automotriz SLP",
    summary:
      "Resultados econométricos y de series de tiempo 2015–2025 que validan estadísticamente los indicadores ICPS, CCIA, ITT y MIS.",
    year: 2025,
  },
  {
    slug: "reporte-3-casos-estudio-bmw-gm",
    title: "Reporte 3: Casos de Estudio BMW–GM y Validación Práctica",
    summary:
      "Validación en planta de los indicadores mediante casos de estudio en BMW y GM San Luis Potosí, y propuesta de APIs operativas.",
    year: 2025,
  },
];

export default function HomePage() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div style={{fontFamily: 'system-ui'}}>
      {/* Barra de Navegación */}
      <nav style={{background: 'linear-gradient(90deg, #0070f3, #0052cc)', padding: '1rem', boxShadow: '0 4px 12px rgba(0,0,0,0.15)', position: 'sticky', top: 0, zIndex: 100}}>
        <div style={{maxWidth: '1200px', margin: '0 auto', display: 'flex', gap: '2rem', padding: '0 20px'}}>
          {[{id: 'home', label: 'Inicio'}, {id: 'research', label: 'Investigación y Publicaciones'}, {id: 'support', label: 'Soporte'}].map(tab => (
            <button key={tab.id} onClick={() => setActiveTab(tab.id)} style={{background: activeTab === tab.id ? 'rgba(255,255,255,0.25)' : 'transparent', color: 'white', border: 'none', padding: '0.75rem 1.5rem', fontSize: '1.05rem', fontWeight: activeTab === tab.id ? 'bold' : 'normal', cursor: 'pointer', borderRadius: '8px', transition: 'all 0.3s'}}>{tab.label}</button>
          ))}
        </div>
      </nav>

      <div style={{maxWidth: '1200px', margin: '0 auto', padding: '20px'}}>
        {activeTab === 'home' && (
          <>
            {/* Header Principal */}
            <header style={{textAlign: 'center', marginBottom: '50px', padding: '80px 30px', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', borderRadius: '20px', color: 'white', boxShadow: '0 10px 40px rgba(0,0,0,0.2)'}}>
              <h1 style={{fontSize: '4rem', fontWeight: '800', marginBottom: '25px', textShadow: '3px 3px 6px rgba(0,0,0,0.3)', lineHeight: 1.2}}>Plataforma de Inteligencia Artificial para la IA Automotriz en San Luis Potosí</h1>
              <p style={{fontSize: '1.4rem', marginTop: '25px', opacity: 0.95, fontWeight: '500'}}>Análisis FODA • Indicadores Científicos • Escenarios</p>
            </header>

            {/* FODA Interactivo */}
            <section style={{marginBottom: '60px'}}>
              <h2 style={{fontSize: '2.8rem', textAlign: 'center', marginBottom: '45px', color: '#1a202c', borderBottom: '5px solid #0070f3', paddingBottom: '20px'}}>Análisis FODA</h2>
              <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '25px'}}>
                {[
                  {title: 'Fortalezas', icon: '💪', color: '#10b981', items: ['Clúster BMW, GM, Continental', 'UASLP y tecnológicos', 'Ubicación estratégica', 'Manufactura 4.0']},
                  {title: 'Oportunidades', icon: '🚀', color: '#f59e0b', items: ['Transformación digital', 'Nearshoring tecnológico', 'Vehículos autónomos', 'Incentivos gubernamentales']},
                  {title: 'Debilidades', icon: '⚠️', color: '#ef4444', items: ['Escasez de talento IA', 'Baja inversión I+D', 'Infraestructura digital', 'Poca vinculación']},
                  {title: 'Amenazas', icon: '⚡', color: '#8b5cf6', items: ['Competencia global', 'Obsolescencia rápida', 'Dependencia tecnológica', 'Fuga de cerebros']}
                ].map(box => (
                  <div key={box.title} style={{padding: '30px', border: `4px solid ${box.color}`, borderRadius: '15px', backgroundColor: '#fff', transition: 'transform 0.3s', cursor: 'pointer'}} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.03)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                    <h3 style={{color: box.color, fontSize: '2rem', marginBottom: '20px'}}>{box.icon} {box.title}</h3>
                    <ul style={{lineHeight: '2', fontSize: '1.05rem'}}>{box.items.map((item, i) => <li key={i}>{item}</li>)}</ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Indicadores Científicos */}
            <section style={{marginBottom: '60px', background: '#f8fafc', padding: '45px', borderRadius: '20px'}}>
              <h2 style={{fontSize: '2.8rem', color: '#0070f3', marginBottom: '35px', borderBottom: '5px solid #0070f3', paddingBottom: '20px'}}>Indicadores Científicos de Tercera Generación</h2>
              {[
                {num: '1', title: 'Índice de Citación Ponderada por Sector (ICPS)', desc: 'Mide impacto de publicaciones en IA automotriz local', formula: 'ICPS = (Σ Cᵢ × Pᵢ × Aᵢ) / N'},
                {num: '2', title: 'Coeficiente Colaboración Industria-Academia (CCIA)', desc: 'Evalúa integración universidad-empresa', formula: 'CCIA = Pcolab / (Pacad + Pind)'},
                {num: '3', title: 'Índice de Transferencia Tecnológica (ITT)', desc: 'Conversión de investigación en aplicaciones', formula: 'ITT = (Pat + Spin + Lic) / Pinv'},
                {num: '4', title: 'Métrica Impacto Socioeconómico (MIS)', desc: 'Efecto en empleo y productividad regional', formula: 'MIS = α·ΔEmp + β·ΔProd + γ·ΔBien'}
              ].map(ind => (
                <div key={ind.num} style={{marginBottom: '30px', padding: '25px', background: 'white', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.08)'}}>
                  <h3 style={{color: '#0070f3', fontSize: '1.7rem', marginBottom: '12px'}}>{ind.num}️⃣ {ind.title}</h3>
                  <p style={{lineHeight: '1.9', marginBottom: '15px', fontSize: '1.05rem'}}>{ind.desc}</p>
                  <div style={{background: '#eff6ff', padding: '18px', borderRadius: '10px', fontFamily: 'monospace', fontSize: '1.1rem', fontWeight: '600', color: '#1e40af'}}>{ind.formula}</div>
                </div>
              ))}
            </section>

            {/* Escenarios Estratégicos */}
            <section style={{marginBottom: '60px'}}>
              <h2 style={{fontSize: '2.8rem', marginBottom: '35px', color: '#1a202c', borderBottom: '5px solid #10b981', paddingBottom: '20px'}}>Escenarios Estratégicos</h2>
              {[
                {title: 'Hub Tecnológico IA-Automotriz', type: 'Optimista', color: '#10b981', desc: 'SLP como centro de excelencia con inversión sostenida, talento internacional y propiedad intelectual', ejemplo: '🌍 Ejemplo: Bavaria (Alemania) con BMW - €2B en I+D IA'},
                {title: 'Crecimiento Gradual', type: 'Moderado', color: '#f59e0b', desc: 'Avance progresivo con inversiones moderadas. Proyectos exitosos sin liderazgo regional', ejemplo: '🌍 Ejemplo: Querétaro - crecimiento 15% anual en IA'},
                {title: 'Rezago Tecnológico', type: 'Pesimista', color: '#ef4444', desc: 'Falta de inversión lleva a pérdida de competitividad y migración de talento', ejemplo: '🌍 Lección: Detroit perdió 60% talento tech (2000-2020)'}
              ].map(esc => (
                <div key={esc.type} style={{marginTop: '25px', padding: '30px', border: `3px solid ${esc.color}`, borderRadius: '15px', background: '#fff'}}>
                  <h3 style={{color: esc.color, fontSize: '1.9rem', marginBottom: '15px'}}>Escenario {esc.type}: "{esc.title}"</h3>
                  <p style={{lineHeight: '1.9', fontSize: '1.1rem', marginBottom: '12px'}}>{esc.desc}</p>
                  <p style={{fontStyle: 'italic', color: '#64748b', fontSize: '1.05rem', marginTop: '15px'}}>{esc.ejemplo}</p>
                </div>
              ))}
            </section>

          </>
        )}

        {activeTab === 'research' && (
          <div style={{padding: '60px 30px', textAlign: 'center'}}>
            <h2 style={{fontSize: '3rem', color: '#0070f3', marginBottom: '30px'}}>Investigación y Publicaciones</h2>
            <p style={{fontSize: '1.3rem', color: '#64748b'}}>Sección en desarrollo - Próximamente publicaciones científicas y proyectos de investigación</p>
          </div>
        )}

        {activeTab === 'support' && (
          <div style={{padding: '60px 30px'}}>
            <h2 style={{fontSize: '3rem', color: '#0070f3', marginBottom: '40px', textAlign: 'center'}}>Soporte y Contacto</h2>
            <div style={{maxWidth: '700px', margin: '0 auto', padding: '40px', background: '#f8fafc', borderRadius: '15px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)'}}>
              <h3 style={{fontSize: '1.8rem', marginBottom: '25px', color: '#1a202c'}}>Responsable del Proyecto</h3>
              <p style={{fontSize: '1.2rem', lineHeight: '2', marginBottom: '15px'}}><strong>Correo:</strong> <a href="mailto:universidadgac@uaslp.mx" style={{color: '#0070f3'}}>universidadgac@uaslp.mx</a></p>
              <p style={{fontSize: '1.2rem', lineHeight: '2'}}><strong>Institución:</strong> Universidad Autónoma de San Luis Potosí</p>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer style={{background: '#1a202c', color: 'white', padding: '50px 20px', marginTop: '80px'}}>
        <div style={{maxWidth: '1200px', margin: '0 auto', textAlign: 'center'}}>
          <h3 style={{fontSize: '1.5rem', marginBottom: '20px'}}>Reconocimientos y Financiamiento</h3>
          <p style={{fontSize: '1.05rem', lineHeight: '1.9', marginBottom: '25px', opacity: 0.9}}>
            Este proyecto cuenta con el apoyo de la Universidad Autónoma de San Luis Potosí (UASLP) y colaboradores del sector automotriz regional.
          </p>
          <div style={{borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: '25px', marginTop: '30px'}}>
            <p style={{fontSize: '1rem', marginBottom: '10px'}}>© 2025 FODA IA Automotriz SLP - Plataforma Científica de Indicadores y Donaciones Project supported by FCSyH—UASLP and the Consejo Potosino de Ciencia y Tecnología, San Luis Potosí México, with funds from Trust 23871, from electoral fines.</p>
           /div>
        </div>
      </footer>
    </div>
  );
}
