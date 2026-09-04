import modelDay1 from '../assets/projects/model-day-1.jpg'
import modelDay20 from '../assets/projects/model-day-20.jpg'
import modelDay40 from '../assets/projects/model-day-40.jpg'
import modelHomeFinished from '../assets/projects/model-home-finished.jpg'
import siemensOffices from '../assets/projects/siemens-offices.jpg'
import siemensCorridor from '../assets/projects/siemens-corridor.jpg'
import warehouseDivision from '../assets/projects/warehouse-division.jpg'
import warehouseInstallation from '../assets/projects/warehouse-installation.jpg'
import uruboExterior from '../assets/projects/urubo-exterior.jpg'
import uruboInstallation from '../assets/projects/urubo-installation.jpg'
import uruboOffices from '../assets/projects/urubo-offices.jpg'
import restaurantBigman from '../assets/projects/restaurant-bigman.jpg'
import highRiseInstallation from '../assets/projects/high-rise-installation.jpg'
import electricalInstallation from '../assets/projects/electrical-installation.jpg'
import panelCutting from '../assets/projects/panel-cutting.jpg'
import panelTransport from '../assets/projects/panel-transport.jpg'
import finishedCoating from '../assets/projects/finished-coating.jpg'
import roofInterior from '../assets/projects/roof-interior.jpg'

// Nuevas fotos reales del proyecto Construpanel
import obraTerminada from '../assets/Obra terminada.jpg'
import entradaObra from '../assets/Entrada de la obra.jpg'
import muroConLogo from '../assets/muro con logo.jpeg'
import techoReal from '../assets/techo.jpeg'
import caminoConstruido from '../assets/Camino construido.jpeg'
import techoLamina from '../assets/techo construido con laminaq.jpeg'
import industrialSilos from '../assets/WhatsApp Image 2026-07-24 at 09.54.55.jpeg'
import galponEstructura from '../assets/WhatsApp Image 2026-07-24 at 09.54.53 (2).jpeg'
import galponInterior from '../assets/WhatsApp Image 2026-07-24 at 09.56.36 (1).jpeg'
import acabadosInteriores from '../assets/562ad250-ad0e-4b7d-ad60-0c91db9eaf3e(1).JPG'
import montajeAndamio from '../assets/IMG_2807.jpg'
import corredorResidencial from '../assets/IMG_0584.jpg'
import divisionDobleAltura from '../assets/IMG_2816.jpg'
import estructuraObra from '../assets/IMG_6267.jpg'
import detalleInterior from '../assets/IMG_0468.jpg'
import construpanelLogo from '../assets/construpanel-logo.png'

export {
  construpanelLogo,
  obraTerminada,
  entradaObra,
  muroConLogo,
  techoReal,
  caminoConstruido,
  techoLamina,
  industrialSilos,
  galponEstructura,
  galponInterior,
  acabadosInteriores,
  montajeAndamio,
  corredorResidencial,
  divisionDobleAltura,
  estructuraObra,
  detalleInterior,
}

// Lista de WhatsApp para alternar números en cada clic (750 22244 / 773 94185)
export const whatsappContacts = [
  { phone: '59175022244', display: '750 22244' },
  { phone: '59177394185', display: '773 94185' },
]

export const whatsapp = 'https://wa.me/59175022244?text=Hola%2C%20quiero%20cotizar%20un%20proyecto%20con%20Construpanel.'

export const heroSlides = [
  {
    image: obraTerminada,
    overline: 'Casa terminada · 100% Construpanel',
    title: 'Construcción veloz, termoacústica y definitiva.',
    description: 'Caso documentado llave en mano. Estructura sin fisuras, aislación térmica y acústica superior sin necesidad de revoque.',
    metric: '7 DÍAS',
    fit: 'center 45%',
  },
  {
    image: industrialSilos,
    overline: 'Nave industrial & acopio · Santa Cruz',
    title: 'Cerramientos perimetrales a gran escala.',
    description: 'Combinación de perfiles metálicos y panel sándwich de rápida colocación. Solución duradera y libre de mantenimiento.',
    metric: 'GRAN ESCALA',
    fit: 'center 48%',
  },
  {
    image: galponEstructura,
    overline: 'Tinglado comercial en ejecución',
    title: 'Muros modulares bajo cubierta metálica.',
    description: 'Obra limpia en seco. Autoportante, liviano y con encastre macho-hembra para un avance continuo sin desperdicios.',
    metric: 'OBRA LIMPIA',
    fit: 'center 50%',
  },
  {
    image: acabadosInteriores,
    overline: 'Acabados interiores en seco',
    title: 'Paredes listas para pintar sin revoque.',
    description: 'Tratamiento de juntas directo. Ahorro sustancial en tiempo de secado, mano de obra y materiales húmedos.',
    metric: 'SIN REVOQUE',
    fit: 'center 35%',
  },
]

export const panelOptions = [
  { thickness: 60, use: 'Muro interior', weightM2: 40.33, panelWeight: 60.5, acoustic: 37, thermalResistance: 0.27 },
  { thickness: 75, use: 'Muro interior', weightM2: 48.33, panelWeight: 72.5, acoustic: 40, thermalResistance: 0.34 },
  { thickness: 100, use: 'Muro exterior', weightM2: 62.33, panelWeight: 93.5, acoustic: 42, thermalResistance: 0.45 },
  { thickness: 120, use: 'Muro exterior', weightM2: 73.33, panelWeight: 110, acoustic: 44, thermalResistance: 0.54 },
]

export const buildSteps = [
  {
    day: '1 día',
    title: 'Fijación de guías y montaje de muros',
    text: 'La obra arranca con soleras niveladas y el levantamiento veloz de los primeros paneles termoacústicos con encastre macho-hembra.',
    image: muroConLogo,
    fit: 'center 40%',
  },
  {
    day: '3 días',
    title: 'Muros completos y estructura de techo',
    text: 'Cerramientos perimetrales e interiores concluidos, integrados a cerchas metálicas y paneles de cubierta con aislamiento térmico.',
    image: techoReal,
    fit: 'center',
  },
  {
    day: '7 días',
    title: 'Obra terminada y lista para entrega',
    text: 'Vivienda completada con acabados finos, puertas, ventanas e instalaciones, lista para habitar con eficiencia termoacústica.',
    image: obraTerminada,
    fit: 'center 45%',
  },
]

export const projects = [
  {
    image: obraTerminada,
    name: 'Residencia Moderna',
    category: 'Residencial',
    detail: 'Casa completa 100% Construpanel',
    fact: 'Entrega récord en 7 días',
  },
  {
    image: entradaObra,
    name: 'Fachada y Acceso Principal',
    category: 'Residencial',
    detail: 'Muros lisos con zócalo decorativo',
    fact: 'Aislamiento termoacústico',
  },
  {
    image: industrialSilos,
    name: 'Complejo Industrial & Silos',
    category: 'Industrial',
    detail: 'Cerramientos perimetrales de gran altura',
    fact: 'Montaje de alta velocidad',
  },
  {
    image: galponEstructura,
    name: 'Tinglado & Módulos Comerciales',
    category: 'Comercial',
    detail: 'Muros modulares con perfiles de acero',
    fact: 'Construcción en seco',
  },
  {
    image: montajeAndamio,
    name: 'Montaje en Altura',
    category: 'Montaje',
    detail: 'Fijación de muros sobre andamios',
    fact: '30 m² / jornal por operario',
  },
  {
    image: acabadosInteriores,
    name: 'Acabados y Cielorraso',
    category: 'Interiores',
    detail: 'Sellado de juntas sin revoque grueso',
    fact: 'Superficie lista para pintura',
  },
  {
    image: corredorResidencial,
    name: 'Galería y Circulación Interior',
    category: 'Residencial',
    detail: 'Ambientes confortables y silenciosos',
    fact: 'Sin fisuras ni humedad',
  },
  {
    image: techoLamina,
    name: 'Cubiertas Termoacústicas',
    category: 'Cubiertas',
    detail: 'Integración hermética de techo y muros',
    fact: 'Protección térmica continua',
  },
  {
    image: caminoConstruido,
    name: 'Cerramientos y Pasillos Técnicos',
    category: 'Cerramientos',
    detail: 'Divisiones exteriores de alta durabilidad',
    fact: 'Resistente a la intemperie',
  },
]

export const fieldNotes = [
  {
    image: montajeAndamio,
    title: 'Montaje en seco ágil',
    text: 'Las piezas modulares de 2,44 × 0,615 m se elevan y fijan rápidamente sin requerir encofrados ni tiempos de fraguado.',
  },
  {
    image: galponInterior,
    title: 'Estructura combinada',
    text: 'Compatibilidad directa con vigas metálicas, hormigón o perfiles tubulares para cerramientos de cualquier altura.',
  },
  {
    image: acabadosInteriores,
    title: 'Sin revoque tradicional',
    text: 'Las caras exteriores de fibrocemento o silicato de calcio solo requieren sellado de juntas para recibir pintura o textura.',
  },
  {
    image: techoLamina,
    title: 'Aislación térmica total',
    text: 'El núcleo aislante frena el calor solar y reduce el ruido exterior, garantizando confort interior en cualquier clima.',
  },
  {
    image: detalleInterior,
    title: 'Admite revestimientos finos',
    text: 'Soporta aplicaciones de madera decorativa, ladrillo visto, azulejos y elementos empotrados sin deteriorar el muro.',
  },
]

export const comparisons = [
  { label: 'Avance por jornal-op.', panel: 'Desde 30 m²', brick: 'Hasta 10 m²' },
  { label: 'Peso por m²', panel: 'Desde 40,33 kg', brick: '200 kg' },
  { label: 'Conductividad térmica', panel: 'Hasta 0,22 W/m·K', brick: 'Hasta 0,80 W/m·K' },
  { label: 'Aislación acústica', panel: 'Hasta 44 dB', brick: 'Hasta 18 dB' },
  { label: 'Reutilización', panel: 'Hasta 80%', brick: '0%' },
  { label: 'Espesor de muro', panel: 'Desde 6 cm', brick: 'Hasta 15 cm' },
]

export const laboratoryData = [
  ['Flexión longitudinal', '4,27 MPa'],
  ['Flexión transversal', '4118 N'],
  ['Contenido de humedad', '9%'],
  ['Calor continuo', '80 °C'],
  ['Alcalinidad superficial', 'pH 7–10'],
  ['Carga por anclaje', '50 kg/punto'],
]

export const faqs = [
  ['¿Qué compone un Construpanel?', 'Un núcleo de hormigón alivianado con poliestireno expandido, revestido por dos placas de fibrocemento de 4 mm libres de asbesto.'],
  ['¿Qué espesor necesito?', 'El material informativo recomienda 60 y 75 mm para interiores, y 100 o 120 mm para exteriores. La selección final debe responder al proyecto y al cálculo correspondiente.'],
  ['¿Puede trabajar con otras estructuras?', 'Sí. El sistema se combina con estructuras de hormigón, acero o madera y puede emplearse como muro portante o cerramiento, según diseño.'],
  ['¿Cómo recibo una cotización?', 'Envíanos los planos editables en AutoCAD o formato vectorial. Con esa información revisamos cantidades, espesores e instalación.'],
]
