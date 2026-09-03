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

export const whatsapp = 'https://wa.me/59175022244?text=Hola%2C%20quiero%20cotizar%20un%20proyecto%20con%20Construpanel.'

export const heroSlides = [
  {
    image: modelHomeFinished,
    overline: 'Casa modelo · 100% Construpanel',
    title: '100 m² construidos en 40 días.',
    description: 'Caso documentado llave en mano. Autoportante hasta 3 m y sin columnas en esta configuración específica.',
    metric: 'DÍA 40',
    fit: 'center 54%',
  },
  {
    image: siemensCorridor,
    overline: 'Termoeléctrica de Warnes · Siemens',
    title: 'Oficinas que pueden moverse con la obra.',
    description: 'Módulos temporales construidos con paneles desmontables, con hasta 80% de reutilización según el sistema de montaje.',
    metric: 'REUSO 80%',
    fit: 'center',
  },
  {
    image: warehouseDivision,
    overline: 'Cerramiento industrial',
    title: 'Una división de galpón en 4 días.',
    description: 'Caso real de montaje rápido para crear nuevos ambientes dentro de una estructura existente.',
    metric: '4 DÍAS',
    fit: 'center',
  },
  {
    image: uruboExterior,
    overline: 'Proyecto Oficinas del Urubó',
    title: 'Del panel al espacio terminado.',
    description: 'Muros compatibles con estructura metálica, listos para macillar, pintar y recibir distintos acabados.',
    metric: 'OBRA REAL',
    fit: 'center',
  },
]

export const panelOptions = [
  { thickness: 60, use: 'Muro interior', weightM2: 40.33, panelWeight: 60.5, acoustic: 37, thermalResistance: 0.27 },
  { thickness: 75, use: 'Muro interior', weightM2: 48.33, panelWeight: 72.5, acoustic: 40, thermalResistance: 0.34 },
  { thickness: 100, use: 'Muro exterior', weightM2: 62.33, panelWeight: 93.5, acoustic: 42, thermalResistance: 0.45 },
  { thickness: 120, use: 'Muro exterior', weightM2: 73.33, panelWeight: 110, acoustic: 44, thermalResistance: 0.54 },
]

export const buildSteps = [
  { day: 'Día 01', title: 'Base e instalaciones', text: 'La obra arranca con la cimentación y la previsión de recorridos antes del montaje.', image: modelDay1, fit: 'center' },
  { day: 'Día 20', title: 'Muros montados', text: 'Los paneles definen la vivienda y permiten avanzar con instalaciones y estructura de cubierta.', image: modelDay20, fit: 'center' },
  { day: 'Día 40', title: 'Casa terminada', text: 'Cierre del caso documentado de 100 m², construido llave en mano con el sistema.', image: modelDay40, fit: 'center' },
]

export const projects = [
  { image: siemensOffices, name: 'Termoeléctrica de Warnes', category: 'Industrial', detail: 'Oficinas temporales · Siemens', fact: 'Hasta 80% reutilizable' },
  { image: warehouseInstallation, name: 'División de galpón', category: 'Industrial', detail: 'Montaje dentro de estructura existente', fact: 'Caso documentado: 4 días' },
  { image: uruboInstallation, name: 'Oficinas del Urubó', category: 'Oficinas', detail: 'Muros y estructura en ejecución', fact: 'Sistema combinado con acero' },
  { image: uruboOffices, name: 'Oficinas terminadas', category: 'Oficinas', detail: 'Acabados sobre Construpanel', fact: 'Listo para macillar y pintar' },
  { image: restaurantBigman, name: 'BigManBurguer', category: 'Comercial', detail: 'Mesones y soluciones interiores', fact: 'El panel más allá del muro' },
  { image: highRiseInstallation, name: 'Construcción en altura', category: 'Montaje', detail: 'Cuadrilla instalando paneles', fact: 'Fácil traslado entre pisos' },
]

export const fieldNotes = [
  { image: panelCutting, title: 'Se corta en obra', text: 'Una amoladora permite adaptar el panel a distintos tamaños y formas.', rotate: true },
  { image: panelTransport, title: 'Se transporta entre pisos', text: 'El formato modular simplifica el movimiento dentro de la construcción.' },
  { image: electricalInstallation, title: 'Recibe instalaciones', text: 'Las canalizaciones eléctricas pueden resolverse directamente sobre el muro.' },
  { image: finishedCoating, title: 'Admite revestimientos', text: 'La superficie puede recibir acabados para cocinas, baños y otros ambientes.' },
  { image: roofInterior, title: 'También resuelve cubiertas', text: 'La cubierta sándwich incorpora aislación y una cara interior prepintada.' },
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
