'use client';

import { useState } from 'react';

export default function FodaInteractive() {
  const [activeSection, setActiveSection] = useState(null);

  const fodaSections = {
    fortalezas: {
      title: 'Fortalezas',
      color: '#10b981',
      icon: '✔️',
      items: [
        'Clúster automotriz consolidado',
        'Infraestructura educativa sólida',
        'Ubicación geográfica estratégica',
        'Experiencia en manufactura avanzada'
      ]
    },
    oportunidades: {
      title: 'Oportunidades',
      color: '#f59e0b',
      icon: '💡',
      items: [
        'Transformación digital del sector',
        'Nearshoring',
        'Vehículos autónomos y eléctricos',
        'Colaboración academia-industria'
      ]
    },
    debilidades: {
      title: 'Debilidades',
      color: '#ef4444',
      icon: '⚠️',
      items: [
        'Brecha de talento especializado',
        'Inversión limitada en I+D',
        'Infraestructura digital incompleta',
        'Falta de vinculación'
      ]
    },
    amenazas: {
      title: 'Amenazas',
      color: '#8b5cf6',
      icon: '⚡',
      items: [
        'Competencia global',
        'Obsolescencia tecnológica',
        'Migración de talento',
        'Incertidumbre económica'
      ]
    }
  };

  return (
    <div style={{marginBottom: '50px'}}>
      {/* Hero Section */}
      <div style={{
        background: 'linear-gradient(135deg, #0070f3 0%, #00c9ff 100%)',
        padding: '40px 20px',
        borderRadius: '15px',
        textAlign: 'center',
        marginBottom: '30px',
        color: 'white'
      }}>
        <h2 style={{fontSize: '2rem', marginBottom: '15px', fontWeight: '700'}}>
          🎯 Análisis FODA Interactivo
        </h2>
        <p style={{fontSize: '1.1rem', opacity: 0.9}}>
          Explora indicadores y estrategias del sector automotriz en SLP
        </p>
      </div>

      {/* FODA Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '20px',
        marginBottom: '40px'
      }}>
        {Object.entries(fodaSections).map(([key, section]) => (
          <div
            key={key}
            onClick={() => setActiveSection(key)}
            style={{
              background: activeSection === key ? section.color : 'white',
              color: activeSection === key ? 'white' : '#333',
              border: `3px solid ${section.color}`,
              borderRadius: '12px',
              padding: '20px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              transform: activeSection === key ? 'scale(1.05)' : 'scale(1)',
              boxShadow: activeSection === key 
                ? '0 10px 30px rgba(0,0,0,0.2)' 
                : '0 2px 8px rgba(0,0,0,0.1)'
            }}
          >
            <h3 style={{
              fontSize: '1.5rem',
              marginBottom: '15px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              <span style={{fontSize: '1.8rem'}}>{section.icon}</span>
              {section.title}
            </h3>
            <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
              {section.items.map((item, idx) => (
                <li key={idx} style={{
                  padding: '8px 0',
                  borderBottom: idx < section.items.length - 1 
                    ? `1px solid ${activeSection === key ? 'rgba(255,255,255,0.3)' : '#eee'}` 
                    : 'none',
                  fontSize: '0.95rem'
                }}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Info Message */}
      <div style={{
        background: '#f9fafb',
        borderRadius: '15px',
        padding: '25px',
        border: '2px solid #e5e7eb',
        textAlign: 'center'
      }}>
        <h3 style={{marginBottom: '10px', color: '#0070f3', fontSize: '1.3rem'}}>
          📊 Próximamente: Análisis con IA
        </h3>
        <p style={{color: '#666', fontSize: '1rem'}}>
          Estamos trabajando en integrar agentes de IA para análisis predictivo y prospecciones científicas.
        </p>
      </div>
    </div>
  );
}
