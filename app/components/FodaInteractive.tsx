'use client';

import { useState } from 'react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function FodaInteractive() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

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

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: 'user' as const, content: input };
    setMessages([...messages, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch('/api/foda-chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input })
      });

      const data = await response.json();
      setMessages(prev => [...prev, { role: 'assistant', content: data.reply }]);
    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: 'Lo siento, hubo un error al procesar tu pregunta.' 
      }]);
    } finally {
      setLoading(false);
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
          🤖 Análisis FODA Interactivo con IA
        </h2>
        <p style={{fontSize: '1.1rem', opacity: 0.9}}>
          Consulta sobre indicadores, proyecciones y estrategias del sector automotriz en SLP
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

      {/* Chat Interface */}
      <div style={{
        background: '#f9fafb',
        borderRadius: '15px',
        padding: '25px',
        border: '2px solid #e5e7eb'
      }}>
        <h3 style={{marginBottom: '20px', color: '#0070f3', fontSize: '1.5rem'}}>
          💬 Consulta a la IA sobre FODA
        </h3>
        
        {/* Messages */}
        <div style={{
          maxHeight: '400px',
          overflowY: 'auto',
          marginBottom: '20px',
          padding: '15px',
          background: 'white',
          borderRadius: '10px',
          minHeight: '200px'
        }}>
          {messages.length === 0 ? (
            <div style={{textAlign: 'center', color: '#999', padding: '40px'}}>
              <p style={{fontSize: '1.1rem', marginBottom: '10px'}}>👋 ¡Hola! Soy tu asistente FODA</p>
              <p style={{fontSize: '0.9rem'}}>Pregúntame sobre indicadores, proyecciones o estrategias</p>
            </div>
          ) : (
            messages.map((msg, idx) => (
              <div key={idx} style={{
                marginBottom: '15px',
                display: 'flex',
                justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start'
              }}>
                <div style={{
                  maxWidth: '70%',
                  padding: '12px 18px',
                  borderRadius: '12px',
                  background: msg.role === 'user' ? '#0070f3' : '#e5e7eb',
                  color: msg.role === 'user' ? 'white' : '#333'
                }}>
                  {msg.content}
                </div>
              </div>
            ))
          )}
          {loading && (
            <div style={{textAlign: 'center', padding: '10px'}}>
              <span style={{color: '#0070f3'}}>Pensando...</span>
            </div>
          )}
        </div>

        {/* Input */}
        <div style={{display: 'flex', gap: '10px'}}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
            placeholder="Escribe tu pregunta sobre FODA..."
            style={{
              flex: 1,
              padding: '12px 15px',
              borderRadius: '8px',
              border: '2px solid #e5e7eb',
              fontSize: '1rem',
              outline: 'none'
            }}
          />
          <button
            onClick={sendMessage}
            disabled={loading || !input.trim()}
            style={{
              padding: '12px 30px',
              background: '#0070f3',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: loading ? 'not-allowed' : 'pointer',
              opacity: loading || !input.trim() ? 0.5 : 1
            }}
          >
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
}
