import { AnimatePresence, MotionConfig, motion } from 'framer-motion'
import { useState } from 'react'
import BuildTimeline from './components/BuildTimeline'
import HeroCarousel from './components/HeroCarousel'
import PanelLab from './components/PanelLab'
import ProjectReel from './components/ProjectReel'
import SectionRail from './components/SectionRail'
import { comparisons, faqs, fieldNotes, laboratoryData, whatsapp } from './data/company'
import './App.css'

function Arrow({ direction = 'right' }) {
  const path = direction === 'up' ? 'M12 20V5m0 0-6 6m6-6 6 6' : 'M4 12h15m0 0-6-6m6 6-6 6'
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d={path} fill="none" stroke="currentColor" strokeWidth="1.8" /></svg>
}

function Brand() {
  return (
    <a className="brand" href="#inicio" aria-label="Construpanel, ir al inicio">
      <span className="brand-mark" aria-hidden="true"><i></i><i></i><i></i></span>
      <span className="brand-word">CONSTRU<b>PANEL</b></span>
    </a>
  )
}

const navItems = [
  ['empresa', 'Empresa'],
  ['laboratorio', 'El panel'],
  ['caso', 'Caso 40 días'],
  ['obras', 'Obras'],
  ['datos', 'Ficha técnica'],
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState(0)

  return (
    <MotionConfig reducedMotion="user">
      <SectionRail />
      <header className="site-header">
        <Brand />
        <nav className="main-nav" aria-label="Navegación principal">
          {navItems.map(([id, label]) => <a href={`#${id}`} key={id}>{label}</a>)}
        </nav>
        <a className="header-cta" href={whatsapp} target="_blank" rel="noreferrer"><span>Iniciar proyecto</span><Arrow /></a>
        <button className={`menu-button ${menuOpen ? 'is-open' : ''}`} type="button" aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={menuOpen} onClick={() => setMenuOpen((value) => !value)}><i></i><i></i></button>
        <AnimatePresence>
          {menuOpen && (
            <motion.nav className="mobile-menu" aria-label="Navegación móvil" initial={{ clipPath: 'inset(0 0 100% 0)' }} animate={{ clipPath: 'inset(0)' }} exit={{ clipPath: 'inset(0 0 100% 0)' }} transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}>
              {navItems.map(([id, label], index) => <a href={`#${id}`} key={id} onClick={() => setMenuOpen(false)}><span>0{index + 1}</span>{label}</a>)}
              <a href={whatsapp} target="_blank" rel="noreferrer"><span>→</span>Cotizar por WhatsApp</a>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      <main>
        <HeroCarousel />

        <section className="manifesto" id="empresa">
          <div className="section-code"><span>01</span><p>Empresa / sistema</p></div>
          <div className="manifesto-intro">
            <p>Empresa boliviana dedicada a la producción, venta e instalación de paneles prefabricados para construcción civil.</p>
            <motion.h2 initial={{ backgroundSize: '0% 100%' }} whileInView={{ backgroundSize: '100% 100%' }} viewport={{ once: true, amount: 0.45 }} transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}>Una pared no debería detener una obra.</motion.h2>
          </div>

          <div className="manifesto-grid">
            <div className="manifesto-story">
              <span className="micro-label">QUÉ RESOLVEMOS</span>
              <p>Construpanel concentra estructura de muro, aislación y superficie de acabado en una pieza modular. Menos carga, menos etapas húmedas y una obra que puede avanzar desde el primer panel.</p>
              <p>El sistema se integra con estructuras de acero, hormigón o madera y puede aplicarse en viviendas, oficinas, divisiones industriales, campamentos y soluciones especiales.</p>
            </div>
            <ol className="service-sequence">
              <li><span>01</span><div><b>Producimos</b><p>Paneles de 2,44 × 0,615 m en cuatro espesores.</p></div></li>
              <li><span>02</span><div><b>Dimensionamos</b><p>Revisamos planos y definimos cantidades para cada proyecto.</p></div></li>
              <li><span>03</span><div><b>Instalamos</b><p>Ejecutamos el montaje y resolvemos encuentros en obra.</p></div></li>
            </ol>
          </div>

          <div className="fact-ribbon" aria-label="Cifras principales del sistema">
            <div><span>FORMATO</span><b>2,44 × 0,615</b><small>metros</small></div>
            <div><span>SUPERFICIE</span><b>1,50</b><small>m² / panel</small></div>
            <div><span>RENDIMIENTO</span><b>30</b><small>m² / jornal-op.</small></div>
            <div><span>PESO INICIAL</span><b>40,33</b><small>kg / m²</small></div>
          </div>
        </section>

        <section className="laboratory section-pad" id="laboratorio">
          <div className="section-head">
            <div className="section-code"><span>02</span><p>Laboratorio del panel</p></div>
            <div><p className="section-kicker">NO TODOS LOS MUROS PIDEN LO MISMO</p><h2>Cambia el espesor.<br />Cambia el desempeño.</h2></div>
            <p className="section-summary">Explora el panel en 3D, separa sus capas y calcula una referencia de material, peso y jornadas para tu superficie.</p>
          </div>
          <PanelLab />
          <div className="anatomy-strip">
            <div><span>CAPA 01</span><b>Fibrocemento</b><p>Dos caras de 4 mm, libres de asbesto y listas para acabado.</p></div>
            <div><span>NÚCLEO 02</span><b>Hormigón alivianado</b><p>Aporta cuerpo con una fracción del peso de un muro tradicional.</p></div>
            <div><span>AISLANTE 03</span><b>Poliestireno expandido</b><p>Integra aislación térmica dentro del propio elemento constructivo.</p></div>
          </div>
        </section>

        <section className="case-section section-pad" id="caso">
          <div className="case-copy">
            <div className="section-code section-code-light"><span>03</span><p>Caso documentado</p></div>
            <p className="section-kicker">CASA MODELO / SANTA CRUZ</p>
            <h2>De la base a una casa de 100 m² en 40 días.</h2>
            <p>Desliza el tiempo para recorrer un proyecto llave en mano realizado con paneles. La configuración fue autoportante hasta 3 m y sin columnas; esa solución corresponde a este caso y debe validarse mediante cálculo en cada proyecto.</p>
          </div>
          <BuildTimeline />
        </section>

        <section className="works section-pad" id="obras">
          <div className="section-head works-head">
            <div className="section-code"><span>04</span><p>Archivo de obras</p></div>
            <div><p className="section-kicker">NO SON RENDERS. SON OBRAS.</p><h2>El panel puesto a trabajar.</h2></div>
            <p className="section-summary">Oficinas temporales, galpones, espacios comerciales y construcción en altura. Arrastra el carrusel para recorrer el archivo real.</p>
          </div>
          <ProjectReel />
        </section>

        <section className="field-section">
          <div className="field-title">
            <span>05 / CUADERNO DE CAMPO</span>
            <h2>Así se comporta<br />cuando entra a obra.</h2>
            <p>No solo mostramos el resultado. Estas imágenes documentan corte, traslado, instalaciones, acabados y cubierta.</p>
          </div>
          <div className="field-notes">
            {fieldNotes.map((note, index) => (
              <motion.figure className={`field-note field-note-${index + 1}`} key={note.title} initial={{ opacity: 0.45 }} whileInView={{ opacity: 1 }} viewport={{ amount: 0.45 }}>
                <div className={note.rotate ? 'rotate-photo' : ''}><img src={note.image} alt={note.title} loading="lazy" decoding="async" /></div>
                <figcaption><span>{String(index + 1).padStart(2, '0')}</span><b>{note.title}</b><p>{note.text}</p></figcaption>
              </motion.figure>
            ))}
          </div>
        </section>

        <section className="data-section section-pad" id="datos">
          <div className="data-heading">
            <div className="data-sheet-mark"><b>CP</b><span>FT—01<br />DATOS DE FÁBRICA</span></div>
            <div><p className="section-kicker">FICHA COMPARADA / MATERIAL INFORMATIVO</p><h2>Datos para especificar.</h2></div>
            <p>Las cifras publicadas por Construpanel, puestas frente al muro de ladrillo descrito en su documentación técnica.</p>
          </div>

          <div className="comparison-table" role="table" aria-label="Comparación entre Construpanel y muro de ladrillo">
            <div className="comparison-row comparison-header" role="row"><span role="columnheader">VARIABLE</span><b role="columnheader">CONSTRUPANEL</b><b role="columnheader">LADRILLO</b></div>
            {comparisons.map((item, index) => <motion.div className="comparison-row" role="row" key={item.label} initial={{ '--fill': '0%' }} whileInView={{ '--fill': `${100 - index * 7}%` }} viewport={{ once: true, amount: 0.7 }} transition={{ duration: 0.75, delay: index * 0.06 }}><span role="cell">{item.label}</span><b role="cell">{item.panel}</b><em role="cell">{item.brick}</em><i aria-hidden="true"></i></motion.div>)}
          </div>

          <div className="technical-block">
            <div className="technical-title"><span>ENSAYOS Y PROPIEDADES DECLARADAS</span><h3>Ficha detrás<br />del panel.</h3><p>Valores declarados en la documentación de la empresa. Deben contrastarse con la especificación y cálculo de cada obra.</p></div>
            <dl className="technical-list">
              {laboratoryData.map(([label, value], index) => <div key={label}><dt><span>{String(index + 1).padStart(2, '0')}</span>{label}</dt><dd>{value}</dd></div>)}
            </dl>
          </div>

          <div className="fire-note">
            <span className="fire-mark">A1</span>
            <div><p>COMPORTAMIENTO AL FUEGO</p><h3>Hasta 2 horas declaradas en la documentación.</h3></div>
            <p>Las placas de fibrocemento se describen como Grado A y Euroclase A1. La información de resistencia del conjunto se presenta como dato de fábrica; solicita la documentación aplicable a tu proyecto.</p>
          </div>
        </section>

        <section className="applications">
          <div className="applications-title"><span>07 / UN MÓDULO, DISTINTAS ESCALAS</span><h2>¿Dónde puede entrar?</h2></div>
          <div className="application-list">
            {['Viviendas y ampliaciones', 'Oficinas y campamentos', 'Galpones y divisiones', 'Edificios y hospitales', 'Restaurantes y comercio', 'Cubiertas y soluciones especiales'].map((item, index) => <a href={whatsapp} target="_blank" rel="noreferrer" key={item}><span>{String(index + 1).padStart(2, '0')}</span><b>{item}</b><i>Consultar <Arrow /></i></a>)}
          </div>
        </section>

        <section className="faq-section section-pad">
          <div className="faq-intro"><span>ANTES DE CONSTRUIR</span><h2>Lo que conviene saber.</h2><p>Una respuesta clara antes de que el proyecto entre a cómputo.</p></div>
          <div className="faq-list">
            {faqs.map(([question, answer], index) => {
              const isOpen = openFaq === index
              return <article className={isOpen ? 'is-open' : ''} key={question}><button type="button" aria-expanded={isOpen} onClick={() => setOpenFaq(isOpen ? null : index)}><span>{String(index + 1).padStart(2, '0')}</span><b>{question}</b><i>{isOpen ? '−' : '+'}</i></button><div className="faq-answer"><p>{answer}</p></div></article>
            })}
          </div>
        </section>

        <section className="contact-section" id="contacto">
          <div className="contact-blueprint" aria-hidden="true"><i></i><i></i><i></i><i></i><span>0,615</span></div>
          <div className="contact-copy"><span>08 / MESA DE PLANOS</span><h2>Del archivo<br />a la obra.</h2><p>Envíanos los planos editables de tu proyecto. Revisaremos superficie, espesores, encuentros y alcance de instalación.</p><a href={whatsapp} target="_blank" rel="noreferrer">Enviar planos por WhatsApp <Arrow /></a></div>
          <div className="contact-checklist"><span>PARA PREPARAR LA COTIZACIÓN</span><ul><li><b>01</b>Plano AutoCAD o vectorial</li><li><b>02</b>Ubicación del proyecto</li><li><b>03</b>Uso de cada ambiente</li><li><b>04</b>Alcance de instalación</li></ul><div><a href="tel:+59175022244">+591 750 22244</a><a href="mailto:contacto@construpanel.com.bo">contacto@construpanel.com.bo</a></div></div>
        </section>
      </main>

      <footer className="site-footer">
        <Brand />
        <address>Tercer Anillo Externo, entre Av. Virgen de Cotoca y Av. Brasil<br />Calle Ángel Chávez esq. Padre José M. Carrillo · Santa Cruz, Bolivia</address>
        <p>PRODUCCIÓN · VENTA · INSTALACIÓN</p>
        <a href="#inicio" aria-label="Volver al inicio">Volver arriba <Arrow direction="up" /></a>
      </footer>
    </MotionConfig>
  )
}

export default App
