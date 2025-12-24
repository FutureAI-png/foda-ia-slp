export default function HomePage() {
  return (
    <div style={{maxWidth: '1200px', margin: '0 auto', padding: '20px', fontFamily: 'system-ui'}}>
      <header style={{textAlign: 'center', marginBottom: '40px'}}>
        <h1 style={{fontSize: '2.5rem', marginBottom: '10px'}}>FODA IA Automotriz SLP</h1>
        <p style={{fontSize: '1.2rem', color: '#666'}}>Plataforma Científica de Indicadores y Donaciones para IA Automotriz en San Luis Potosí</p>
      </header>

      <section style={{marginBottom: '40px'}}>
        <h2 style={{borderBottom: '3px solid #0070f3', paddingBottom: '10px'}}>Introducción</h2>
        <p style={{lineHeight: '1.8', marginTop: '20px'}}>
          Esta plataforma presenta un análisis FODA (Fortalezas, Oportunidades, Debilidades y Amenazas) 
          del ecosistema de Inteligencia Artificial aplicado al sector automotriz en San Luis Potosí, México. 
          El análisis integra indicadores científicos de tercera generación, escenarios estratégicos y 
          un sistema de donaciones para impulsar el desarrollo tecnológico regional.
        </p>
      </section>

      <section style={{marginBottom: '40px'}}>
        <h2 style={{borderBottom: '3px solid #10b981', paddingBottom: '10px', color: '#10b981'}}>Fortalezas</h2>
        <ul style={{lineHeight: '1.8', marginTop: '20px'}}>
          <li><strong>Clúster automotriz consolidado:</strong> SLP cuenta con una importante presencia de fabricantes automotrices (BMW, GM, Continental, entre otros)</li>
          <li><strong>Infraestructura educativa:</strong> Universidades e institutos tecnológicos con programas en ingeniería, mecatrónica e IA</li>
          <li><strong>Ubicación geográfica estratégica:</strong> Conexión con principales mercados de México y EE.UU.</li>
          <li><strong>Experiencia en manufactura avanzada:</strong> Capacidad instalada en producción y automatización industrial</li>
        </ul>
      </section>

      <section style={{marginBottom: '40px'}}>
        <h2 style={{borderBottom: '3px solid #f59e0b', paddingBottom: '10px', color: '#f59e0b'}}>Oportunidades</h2>
        <ul style={{lineHeight: '1.8', marginTop: '20px'}}>
          <li><strong>Transformación digital del sector:</strong> Creciente adopción de IA en manufactura, diseño y logística automotriz</li>
          <li><strong>Políticas públicas favorables:</strong> Programas gubernamentales de apoyo a innovación y tecnología</li>
          <li><strong>Nearshoring:</strong> Reubicación de empresas tecnológicas hacia México</li>
          <li><strong>Vehículos autónomos y eléctricos:</strong> Mercado emergente con alta demanda de IA</li>
          <li><strong>Colaboración academia-industria:</strong> Potencial para proyectos conjuntos de investigación aplicada</li>
        </ul>
      </section>

      <section style={{marginBottom: '40px'}}>
        <h2 style={{borderBottom: '3px solid #ef4444', paddingBottom: '10px', color: '#ef4444'}}>Debilidades</h2>
        <ul style={{lineHeight: '1.8', marginTop: '20px'}}>
          <li><strong>Brecha de talento especializado:</strong> Escasez de profesionales con experiencia en IA aplicada al sector automotriz</li>
          <li><strong>Inversión limitada en I+D:</strong> Presupuestos reducidos para investigación científica en IA</li>
          <li><strong>Infraestructura digital incompleta:</strong> Conectividad y centros de datos insuficientes para proyectos de gran escala</li>
          <li><strong>Falta de vinculación:</strong> Desconexión entre academia, industria y gobierno</li>
        </ul>
      </section>

      <section style={{marginBottom: '40px'}}>
        <h2 style={{borderBottom: '3px solid #8b5cf6', paddingBottom: '10px', color: '#8b5cf6'}}>Amenazas</h2>
        <ul style={{lineHeight: '1.8', marginTop: '20px'}}>
          <li><strong>Competencia global:</strong> Otras regiones con ecosistemas de IA más maduros</li>
          <li><strong>Obsolescencia tecnológica:</strong> Ritmo acelerado de cambio en tecnologías de IA</li>
          <li><strong>Dependencia tecnológica:</strong> Falta de desarrollo de soluciones propias</li>
          <li><strong>Migración de talento:</strong> Fuga de profesionales especializados a otros países o regiones</li>
          <li><strong>Incertidumbre económica:</strong> Factores macroeconómicos que afectan la inversión en innovación</li>
        </ul>
      </section>

      <section style={{marginBottom: '40px', backgroundColor: '#f3f4f6', padding: '30px', borderRadius: '10px'}}>
        <h2 style={{borderBottom: '3px solid #0070f3', paddingBottom: '10px'}}>Indicadores Científicos de Tercera Generación</h2>
        <div style={{marginTop: '20px'}}>
          <h3 style={{color: '#0070f3'}}>1. Índice de Citación Ponderada por Sector</h3>
          <p style={{lineHeight: '1.8', marginTop: '10px'}}>
            Mide el impacto de publicaciones científicas en IA automotriz considerando su aplicación práctica en la industria local.
          </p>

          <h3 style={{color: '#0070f3', marginTop: '20px'}}>2. Coeficiente de Colaboración Industria-Academia</h3>
          <p style={{lineHeight: '1.8', marginTop: '10px'}}>
            Evalúa el grado de integración entre universidades y empresas en proyectos de IA para el sector automotriz.
          </p>

          <h3 style={{color: '#0070f3', marginTop: '20px'}}>3. Índice de Transferencia Tecnológica</h3>
          <p style={{lineHeight: '1.8', marginTop: '10px'}}>
            Cuantifica la conversión de investigación científica en aplicaciones comerciales y patentes.
          </p>

          <h3 style={{color: '#0070f3', marginTop: '20px'}}>4. Métrica de Impacto Social y Económico</h3>
          <p style={{lineHeight: '1.8', marginTop: '10px'}}>
            Mide el efecto de proyectos de IA en empleo, productividad y bienestar de la región.
          </p>
        </div>
      </section>

      <section style={{marginBottom: '40px'}}>
        <h2 style={{borderBottom: '3px solid #10b981', paddingBottom: '10px'}}>Escenarios Estratégicos</h2>
        
        <div style={{marginTop: '30px', padding: '20px', border: '2px solid #10b981', borderRadius: '8px'}}>
          <h3 style={{color: '#10b981'}}>Escenario Optimista: "Hub Tecnológico IA-Automotriz"</h3>
          <p style={{lineHeight: '1.8', marginTop: '10px'}}>
            SLP se consolida como centro de excelencia en IA automotriz con inversión sostenida, 
            atracción de talento internacional y desarrollo de propiedad intelectual propia. 
            Colaboración efectiva entre gobierno, academia e industria.
          </p>
        </div>

        <div style={{marginTop: '20px', padding: '20px', border: '2px solid #f59e0b', borderRadius: '8px'}}>
          <h3 style={{color: '#f59e0b'}}>Escenario Moderado: "Crecimiento Gradual"</h3>
          <p style={{lineHeight: '1.8', marginTop: '10px'}}>
            Avance progresivo con inversiones moderadas y desarrollo incremental de capacidades. 
            Algunos proyectos exitosos pero sin consolidación como líder regional.
          </p>
        </div>

        <div style={{marginTop: '20px', padding: '20px', border: '2px solid #ef4444', borderRadius: '8px'}}>
          <h3 style={{color: '#ef4444'}}>Escenario Pesimista: "Rezago Tecnológico"</h3>
          <p style={{lineHeight: '1.8', marginTop: '10px'}}>
            Falta de inversión y coordinación llevan a pérdida de competitividad. 
            Migración de talento y empresas hacia otros polos tecnológicos.
          </p>
        </div>
      </section>

      <section style={{marginBottom: '40px', backgroundColor: '#0070f3', color: 'white', padding: '40px', borderRadius: '10px', textAlign: 'center'}}>
        <h2 style={{fontSize: '2rem', marginBottom: '20px'}}>Sistema de Donaciones</h2>
        <p style={{fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '30px'}}>
          Apoya el desarrollo de la investigación y aplicación de IA en el sector automotriz de San Luis Potosí. 
          Tu donación contribuye a:
        </p>
        <ul style={{textAlign: 'left', maxWidth: '600px', margin: '0 auto 30px', lineHeight: '2'}}>
          <li>Becas para estudiantes de posgrado en IA automotriz</li>
          <li>Financiamiento de proyectos de investigación aplicada</li>
          <li>Infraestructura tecnológica para laboratorios</li>
          <li>Programas de capacitación y certificación profesional</li>
        </ul>
        <button style={{
          backgroundColor: 'white',
          color: '#0070f3',
          padding: '15px 40px',
          fontSize: '1.2rem',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontWeight: 'bold'
        }}>
          Hacer una Donación
        </button>
      </section>

      <footer style={{textAlign: 'center', padding: '30px', borderTop: '1px solid #ddd', marginTop: '60px'}}>
        <p style={{color: '#666'}}>© 2025 FODA IA Automotriz SLP - Plataforma Científica de Indicadores y Donaciones</p>
        <p style={{color: '#999', fontSize: '0.9rem', marginTop: '10px'}}>Contacto: contacto@fodaiaauto-slp.mx</p>
      </footer>
    </div>
  );
}
