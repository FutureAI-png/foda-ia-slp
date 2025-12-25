/**
 * CONFIGURACIÓN DE FUENTES DE DATOS PARA ANÁLISIS FODA AUTOMOTRIZ SLP
 * 
 * APIs gratuitas y permanentes para indicadores de tercera generación
 * Actualizadas periódicamente por instituciones gubernamentales y organismos internacionales
 */

export const DATA_SOURCES = {
  // INEGI - Instituto Nacional de Estadística y Geografía (México)
  inegi: {
    name: 'INEGI',
    baseUrl: 'https://www.inegi.org.mx/app/api/indicadores/desarrolladores/jsonxml/INDICATOR',
    indicators: {
      // Industria Automotriz
      automotive_production: 'ID_INDICATOR_AUTOMOTIVE_PROD',
      exports: 'ID_INDICATOR_EXPORTS_AUTO',
      employment: 'ID_INDICATOR_EMPLOYMENT_MFG',
      gdp_slp: 'ID_INDICATOR_GDP_SLP',
      innovation_index: 'ID_INDICATOR_INNOVATION'
    },
    refreshRate: '3M', // Actualización trimestral
    accessibility: 'FREE',
    reliability: 0.95
  },

  // Banco de México - Indicadores Económicos
  banxico: {
    name: 'Banco de México',
    baseUrl: 'https://www.banxico.org.mx/SieAPIRest/service/v1/series',
    indicators: {
      exchange_rate: 'SF43718', // Tipo de cambio USD/MXN
      inflation: 'SP1',
      interest_rate: 'SF61745',
      industrial_production: 'SR16734'
    },
    refreshRate: '1M',
    accessibility: 'FREE',
    reliability: 0.98
  },

  // World Bank - Open Data
  worldbank: {
    name: 'World Bank Open Data',
    baseUrl: 'https://api.worldbank.org/v2/country/MEX/indicator',
    indicators: {
      gdp_growth: 'NY.GDP.MKTP.KD.ZG',
      fdi_inflows: 'BX.KLT.DINV.WD.GD.ZS',
      trade_gdp: 'NE.TRD.GNFS.ZS',
      logistics_index: 'LP.LPI.OVRL.XQ'
    },
    refreshRate: '1Y',
    accessibility: 'FREE',
    reliability: 0.97
  },

  // OECD - Organisation for Economic Co-operation and Development
  oecd: {
    name: 'OECD Data',
    baseUrl: 'https://stats.oecd.org/sdmx-json/data',
    indicators: {
      productivity: 'DP_LIVE/.LABOUR.../OECD',
      rd_spending: 'MSTI_PUB/GERD',
      education_attainment: 'EAG_NEAC',
      digital_intensity: 'DIG_BUS'
    },
    refreshRate: '1Y',
    accessibility: 'FREE',
    reliability: 0.96
  },

  // API de Comercio Exterior de México
  comercio_exterior: {
    name: 'SE México - Comercio Exterior',
    baseUrl: 'https://www.gob.mx/se/acciones-y-programas/comercio-exterior-estadisticas',
    indicators: {
      automotive_exports_value: 'AUTO_EXPORTS',
      automotive_imports: 'AUTO_IMPORTS',
      trade_balance: 'TRADE_BALANCE_AUTO'
    },
    refreshRate: '1M',
    accessibility: 'FREE',
    reliability: 0.93
  },

  // UNESCO Institute for Statistics
  unesco: {
    name: 'UNESCO Institute for Statistics',
    baseUrl: 'http://data.uis.unesco.org/api',
    indicators: {
      researchers_rd: 'ENRSH.RESEARCHERS',
      science_graduates: 'GRAD.SCI',
      publications: 'SCIENTIFIC_PUBLICATIONS'
    },
    refreshRate: '1Y',
    accessibility: 'FREE',
    reliability: 0.94
  }
};

/**
 * INDICADORES MEDIBLES A LO LARGO DEL TIEMPO
 * Para generación de tablas, gráficas y datastories
 */
export const MEASURABLE_INDICATORS = {
  fortalezas: [
    {
      id: 'cluster_size',
      name: 'Tamaño del Clúster Automotriz',
      unit: 'empresas',
      source: ['inegi'],
      formula: 'COUNT(empresas_sector_automotriz_slp)',
      trend_analysis: true
    },
    {
      id: 'employment_auto',
      name: 'Empleo en Sector Automotriz',
      unit: 'trabajadores',
      source: ['inegi'],
      formula: 'SUM(empleados_manufactura_automotriz)',
      trend_analysis: true
    },
    {
      id: 'education_infrastructure',
      name: 'Instituciones de Educación Superior',
      unit: 'instituciones',
      source: ['inegi'],
      formula: 'COUNT(universidades_slp_ingenieria)',
      trend_analysis: true
    },
    {
      id: 'geographic_advantage',
      name: 'Índice de Conectividad Logística',
      unit: 'score',
      source: ['worldbank', 'oecd'],
      formula: 'WEIGHTED_AVG(logistics_index, proximity_to_markets)',
      trend_analysis: true
    }
  ],

  oportunidades: [
    {
      id: 'digital_transformation',
      name: 'Inversión en Transformación Digital',
      unit: 'MXN millions',
      source: ['inegi', 'oecd'],
      formula: 'SUM(inversion_tecnologia_sector_auto)',
      trend_analysis: true
    },
    {
      id: 'nearshoring_index',
      name: 'Índice de Nearshoring',
      unit: 'score',
      source: ['worldbank', 'comercio_exterior'],
      formula: 'RATIO(fdi_inflows_manufacturing, trade_balance)',
      trend_analysis: true
    },
    {
      id: 'ev_adoption',
      name: 'Adopción de Vehículos Eléctricos',
      unit: 'unidades',
      source: ['inegi'],
      formula: 'GROWTH_RATE(ventas_vehiculos_electricos)',
      trend_analysis: true
    },
    {
      id: 'academia_industry',
      name: 'Colaboración Academia-Industria',
      unit: 'proyectos',
      source: ['unesco'],
      formula: 'COUNT(proyectos_colaboracion_universidad_empresa)',
      trend_analysis: true
    }
  ],

  debilidades: [
    {
      id: 'talent_gap',
      name: 'Brecha de Talento Especializado',
      unit: 'personas',
      source: ['inegi', 'unesco'],
      formula: 'ABS(demanda_ingenieros - oferta_ingenieros)',
      trend_analysis: true
    },
    {
      id: 'rd_investment',
      name: 'Inversión en I+D como % del PIB',
      unit: 'percentage',
      source: ['oecd'],
      formula: 'PERCENTAGE(rd_spending / gdp_slp)',
      trend_analysis: true
    },
    {
      id: 'digital_infrastructure',
      name: 'Penetración de Internet de Alta Velocidad',
      unit: 'percentage',
      source: ['inegi'],
      formula: 'PERCENTAGE(hogares_internet_alta_velocidad / total_hogares)',
      trend_analysis: true
    },
    {
      id: 'linkage_coefficient',
      name: 'Coeficiente de Vinculación',
      unit: 'score',
      source: ['unesco'],
      formula: 'RATIO(proyectos_vinculacion, empresas_sector)',
      trend_analysis: true
    }
  ],

  amenazas: [
    {
      id: 'global_competition',
      name: 'Índice de Competitividad Global',
      unit: 'rank',
      source: ['worldbank', 'oecd'],
      formula: 'RANK(mexico_competitiveness, global_countries)',
      trend_analysis: true
    },
    {
      id: 'tech_obsolescence',
      name: 'Velocidad de Obsolescencia Tecnológica',
      unit: 'years',
      source: ['oecd'],
      formula: 'AVG(ciclo_vida_tecnologias_automotrices)',
      trend_analysis: true
    },
    {
      id: 'brain_drain',
      name: 'Tasa de Migración de Talento',
      unit: 'percentage',
      source: ['inegi'],
      formula: 'PERCENTAGE(profesionistas_emigran / total_profesionistas)',
      trend_analysis: true
    },
    {
      id: 'economic_uncertainty',
      name: 'Índice de Incertidumbre Económica',
      unit: 'score',
      source: ['banxico', 'worldbank'],
      formula: 'COMPOSITE_INDEX(inflation, exchange_rate_volatility, gdp_growth)',
      trend_analysis: true
    }
  ]
};

/**
 * CONFIGURACIÓN DE CACHÉ PARA OPTIMIZACIÓN
 */
export const CACHE_CONFIG = {
  ttl: 86400, // 24 horas en segundos
  maxSize: 100, // Máximo 100 entradas en caché
  refreshStrategy: 'background' // Refrescar en background para mejor UX
};
