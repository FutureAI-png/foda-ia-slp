export default function HomePage() {
  return (
    <div style={{maxWidth: '1200px', margin: '0 auto', padding: '20px', fontFamily: 'system-ui'}}>
      <header style={{textAlign: 'center', marginBottom: '40px'}}>
                {/* Logos Header */}
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px'}}>
          <div style={{display: 'flex', gap: '15px', alignItems: 'center'}}>
            <img src="https://www.uaslp.mx/PublishingImages/Logos/Escudo-UASLP-oficial.png" alt="UASLP" style={{height: '80px'}} />
            <img src="https://fcsyh.uaslp.mx/PublishingImages/Logos/FCSyH-Logo.png" alt="FCSyH" style={{height: '70px'}} />
          </div>
          <div>
            <img src="https://copocyt.slp.gob.mx/img/logo.png" alt="COPOCYT" style={{height: '80px'}} />
          </div>
        </div>

        <h1 style={{fontSize: '2.5rem', marginBottom: '10px'}}>FODA IA Automotriz SLP</h1>
        <p style={{fontSize: '1.2rem', color: '#666'}}>Plataforma Científica de Indicadores y Donaciones para IA Automotriz en San Luis Potosí</p>
        <p style={{fontSize: '1rem', color: '#555', marginTop: '15px', lineHeight: '1.6'}}>
          Esta plataforma tiene como objetivo presentar un análisis estratégico integral del ecosistema de Inteligencia Artificial 
          aplicado al sector automotriz en San Luis Potosí, México. Aquí encontrarás indicadores científicos, escenarios estratégicos, 
          oportunidades de colaboración y un sistema de donaciones para impulsar el desarrollo tecnológico regional.
        </p>
      </header>

      <nav style={{backgroundColor: '#0070f3', padding: '15px', borderRadius: '8px', marginBottom: '30px'}}>
        <ul style={{listStyle: 'none', display: 'flex', justifyContent: 'center', gap: '30px', margin: 0, padding: 0, flexWrap: 'wrap'}}>
          <li><a href="#home" style={{color: 'white', textDecoration: 'none', fontSize: '1.1rem', fontWeight: '600'}}>Home</a></li>
          <li><a href="#research" style={{color: 'white', textDecoration: 'none', fontSize: '1.1rem', fontWeight: '600'}}>Research / Investigación</a></li>
          <li><a href="#support" style={{color: 'white', textDecoration: 'none', fontSize: '1.1rem', fontWeight: '600'}}>Support / Apoyo</a></li>
          <li><a href="#donate" style={{color: 'white', textDecoration: 'none', fontSize: '1.1rem', fontWeight: '600'}}>Donate / Donar</a></li>
          <li><a href="#contact" style={{color: 'white', textDecoration: 'none', fontSize: '1.1rem', fontWeight: '600'}}>Contact / Contacto</a></li>
        </ul>
      </nav>

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
          <h3 style={{color: '#0070f3', marginTop: '20px'}}>1. Índice de Citación Ponderada por Sector</h3>
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

      <section style={{marginBottom: '40px', backgroundColor: '#fef3c7', padding: '30px', borderRadius: '10px'}}>
        <h2 style={{borderBottom: '3px solid #f59e0b', paddingBottom: '10px'}}>Sistema de Donaciones</h2>
        <p style={{lineHeight: '1.8', marginTop: '20px'}}>
          Apoya el desarrollo de la investigación y aplicación de IA en el sector automotriz de San Luis Potosí. 
          Tu donación contribuye a:
        </p>
        <ul style={{lineHeight: '1.8', marginTop: '15px'}}>
          <li>Becas para estudiantes de posgrado en IA automotriz</li>
          <li>Financiamiento de proyectos de investigación aplicada</li>
          <li>Infraestructura tecnológica para laboratorios</li>
          <li>Programas de capacitación y certificación profesional</li>
        </ul>
        <button style={{marginTop: '20px', backgroundColor: '#f59e0b', color: 'white', padding: '12px 30px', border: 'none', borderRadius: '5px', fontSize: '1.1rem', cursor: 'pointer', fontWeight: '600'}}>Hacer una Donación</button>
      </section>

      <section style={{marginBottom: '30px', backgroundColor: '#f9fafb', padding: '25px', borderRadius: '8px', fontSize: '0.9rem'}}>
        <h3 style={{marginBottom: '15px', color: '#374151'}}>Políticas de Privacidad</h3>
        <p style={{lineHeight: '1.6', color: '#6b7280'}}>
          Esta plataforma respeta tu privacidad y está comprometida con la protección de tus datos personales. 
          Los datos recopilados a través de formularios de contacto y donaciones son utilizados exclusivamente 
          para los fines indicados y no son compartidos con terceros sin tu consentimiento explícito. 
          Para más información sobre nuestras políticas de privacidad y manejo de datos, contáctanos en 
        <a href="mailto:gac@uaslp.mx" style={{color: '#0070f3', marginLeft: '5px'}}>gac@uaslp.mx</a>.        </p>
      </section>

      <footer style={{textAlign: 'center', padding: '20px', borderTop: '2px solid #e5e7eb', marginTop: '40px'}}>
        <p style={{color: '#6b7280', fontSize: '0.9rem'}}>
          © 2025 FODA IA Automotriz SLP - Plataforma Científica de Indicadores y Donaciones
                    <br />
          Project supported by FCSyH—UASLP and the Consejo Potosino de Ciencia y Tecnología, San Luis Potosí México, with funds from Trust 23871, from electoral fines.
        </p>
        <p style={{color: '#9ca3af', fontSize: '0.85rem', marginTop: '8px'}}>
          Contacto: <a href="mailto:gac@uaslp.mx" style={{color: '#0070f3'}}>gac@uaslp.mx</a>        </p>

             
