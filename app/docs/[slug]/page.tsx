import { notFound } from 'next/navigation';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Lista de reportes válidos
const VALID_REPORTS = [
  'reporte-1-indicadores-tercera-generacion',
  'reporte-2-analisis-cuantitativo',
  'reporte-3-casos-estudio-bmw-gm',
];

interface PageProps {
  params: {
    slug: string;
  };
}

// Generar rutas estáticas para los reportes
export function generateStaticParams() {
  return VALID_REPORTS.map((slug) => ({
    slug,
  }));
}

// Leer y parsear archivo Markdown
function getReportContent(slug: string) {
  if (!VALID_REPORTS.includes(slug)) {
    return null;
  }

  const docsDirectory = path.join(process.cwd(), 'docs');
  const filePath = path.join(docsDirectory, `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    metadata: data,
    content,
  };
}

export default function ReportPage({ params }: PageProps) {
  const report = getReportContent(params.slug);

  if (!report) {
    notFound();
  }

  const { metadata, content } = report;

  return (
    <div style={{ fontFamily: 'system-ui', maxWidth: '900px', margin: '0 auto', padding: '40px 20px' }}>
      {/* Botón de regreso */}
      <a
        href="/"
        style={{
          display: 'inline-block',
          marginBottom: '30px',
          padding: '10px 20px',
          background: '#0070f3',
          color: 'white',
          borderRadius: '8px',
          textDecoration: 'none',
          fontSize: '0.95rem',
          fontWeight: '500',
        }}
      >
        ← Volver al inicio
      </a>

      {/* Header del reporte */}
      <header style={{ marginBottom: '50px', paddingBottom: '30px', borderBottom: '3px solid #e5e7eb' }}>
        <h1
          style={{
            fontSize: '2.8rem',
            fontWeight: '700',
            color: '#0f172a',
            marginBottom: '15px',
            lineHeight: 1.2,
          }}
        >
          {metadata.title || 'Reporte de Investigación'}
        </h1>
        
        {metadata.author && (
          <p style={{ fontSize: '1.1rem', color: '#64748b', marginBottom: '10px' }}>
            <strong>Autor:</strong> {metadata.author}
          </p>
        )}
        
        {metadata.date && (
          <p style={{ fontSize: '1rem', color: '#64748b', marginBottom: '10px' }}>
            <strong>Fecha:</strong> {metadata.date}
          </p>
        )}
        
        {metadata.institution && (
          <p style={{ fontSize: '1rem', color: '#64748b' }}>
            <strong>Institución:</strong> {metadata.institution}
          </p>
        )}
      </header>

      {/* Contenido del reporte en Markdown */}
      <article
        style={{
          fontSize: '1.1rem',
          lineHeight: 1.8,
          color: '#1e293b',
        }}
        dangerouslySetInnerHTML={{ __html: convertMarkdownToHTML(content) }}
      />

      {/* Footer */}
      <footer
        style={{
          marginTop: '60px',
          paddingTop: '30px',
          borderTop: '2px solid #e5e7eb',
          textAlign: 'center',
          color: '#64748b',
          fontSize: '0.95rem',
        }}
      >
        <p>© 2025 FODA IA Automotriz SLP - Universidad Autónoma de San Luis Potosí</p>
      </footer>
    </div>
  );
}

// Función simple para convertir Markdown a HTML
function convertMarkdownToHTML(markdown: string): string {
  let html = markdown;
  
  // Headers
  html = html.replace(/^### (.*$)/gim, '<h3 style="font-size: 1.6rem; font-weight: 600; margin-top: 40px; margin-bottom: 15px; color: #0f172a;">$1</h3>');
  html = html.replace(/^## (.*$)/gim, '<h2 style="font-size: 2rem; font-weight: 700; margin-top: 50px; margin-bottom: 20px; color: #0070f3;">$1</h2>');
  html = html.replace(/^# (.*$)/gim, '<h1 style="font-size: 2.5rem; font-weight: 800; margin-top: 50px; margin-bottom: 25px; color: #0f172a;">$1</h1>');
  
  // Bold
  html = html.replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>');
  
  // Italic
  html = html.replace(/\*(.*?)\*/gim, '<em>$1</em>');
  
  // Lists
  html = html.replace(/^\- (.*$)/gim, '<li style="margin-left: 20px; margin-bottom: 8px;">$1</li>');
  html = html.replace(/^(\d+)\. (.*$)/gim, '<li style="margin-left: 20px; margin-bottom: 8px;">$2</li>');
  
  // Paragraphs
  html = html.replace(/\n\n/g, '</p><p style="margin-bottom: 20px;">');
  html = '<p style="margin-bottom: 20px;">' + html + '</p>';
  
  // Code blocks
  html = html.replace(/```(.*?)```/gs, '<pre style="background: #f8fafc; padding: 20px; border-radius: 8px; overflow-x: auto; font-family: monospace; font-size: 0.95rem; border: 1px solid #e2e8f0;"><code>$1</code></pre>');
  
  // Inline code
  html = html.replace(/`(.*?)`/g, '<code style="background: #f1f5f9; padding: 2px 6px; border-radius: 4px; font-family: monospace; font-size: 0.9em; color: #0f172a;">$1</code>');
  
  return html;
}
