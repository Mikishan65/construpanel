import { AnimatePresence, MotionConfig, motion } from 'framer-motion'
import { useState } from 'react'
import BuildTimeline from './components/BuildTimeline'
import HeroCarousel from './components/HeroCarousel'
import PanelLab from './components/PanelLab'
import ProjectReel from './components/ProjectReel'
import SectionRail from './components/SectionRail'
import {
  comparisons,
  construpanelLogo,
  faqs,
  fieldNotes,
  laboratoryData,
  obraTerminada,
  whatsappContacts,
} from './data/company'
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
  ['laboratorio', 'Panel'],
  ['caso', 'Caso 7 días'],
  ['obras', 'Obras'],
  ['contacto', 'Contacto'],
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState(0)
  const [waIndex, setWaIndex] = useState(0)
  const currentWhatsApp = whatsappContacts[waIndex]
  const currentWhatsAppUrl = `https://wa.me/${currentWhatsApp.phone}?text=${encodeURIComponent('Hola, quiero cotizar un proyecto con Construpanel.')}`

  const handleWhatsAppClick = (e, customText) => {
    e.preventDefault()
    const activeContact = whatsappContacts[waIndex]
    const text = customText || 'Hola, quiero cotizar un proyecto con Construpanel.'
    const url = `https://wa.me/${activeContact.phone}?text=${encodeURIComponent(text)}`
    setWaIndex((prev) => (prev + 1) % whatsappContacts.length)
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <MotionConfig reducedMotion="user">
      <a className="skip-link" href="#main-content">Saltar al contenido</a>
      <SectionRail />
      <header className="site-header">
        <Brand />
        <nav className="main-nav" aria-label="Navegación principal">
          {navItems.map(([id, label]) => <a href={`#${id}`} key={id}>{label}</a>)}
        </nav>
        <a className="header-cta" href={currentWhatsAppUrl} onClick={(e) => handleWhatsAppClick(e, 'Hola, quiero iniciar un proyecto con Construpanel.')}>
          <span>Iniciar proyecto</span><Arrow />
        </a>
        <button className={`menu-button ${menuOpen ? 'is-open' : ''}`} type="button" aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={menuOpen} onClick={() => setMenuOpen((value) => !value)}><i></i><i></i></button>
        <AnimatePresence>
          {menuOpen && (
            <motion.nav className="mobile-menu" aria-label="Navegación móvil" initial={{ clipPath: 'inset(0 0 100% 0)' }} animate={{ clipPath: 'inset(0)' }} exit={{ clipPath: 'inset(0 0 100% 0)' }} transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}>
              {navItems.map(([id, label], index) => <a href={`#${id}`} key={id} onClick={() => setMenuOpen(false)}><span>0{index + 1}</span>{label}</a>)}
              <a href={currentWhatsAppUrl} onClick={(e) => { setMenuOpen(false); handleWhatsAppClick(e, 'Hola, quiero cotizar por WhatsApp con Construpanel.'); }}>
                <span>→</span>Cotizar por WhatsApp
              </a>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      <main id="main-content">
        <HeroCarousel onWhatsAppClick={handleWhatsAppClick} currentWhatsAppUrl={currentWhatsAppUrl} />

        {/* Sección 2: Empresa con fondo de obra real completo a lo ancho */}
        <section className="empresa-section" id="empresa">
          <div
            className="manifesto-banner"
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(4, 21, 36, 0.55) 0%, rgba(5, 26, 46, 0.7) 45%, rgba(6, 26, 44, 0.92) 100%), url(${obraTerminada})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center 38%',
            }}
          >
            <div className="section-code section-code-light manifesto-badge">
              <span>01</span><p>Empresa / sistema</p>
            </div>
            <span className="manifesto-pill">EMPRESA BOLIVIANA · MUROS TERMOACÚSTICOS</span>
            <motion.h2
              className="manifesto-lead-title"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            >
              Una pared no debería detener una obra.
            </motion.h2>
            <p className="manifesto-lead-desc">
              Empresa boliviana dedicada a la producción, venta e instalación de paneles prefabricados tipo sándwich para construcción civil rápida, limpia y de máxima eficiencia térmica y acústica.
            </p>
          </div>

          <div className="manifesto-body section-pad">
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
          </div>
        </section>

        {/* Sección 3: Laboratorio */}
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

        {/* Sección 4: Demostración 1 día - 3 días - 7 días */}
        <section className="case-section section-pad" id="caso">
          <div className="case-copy">
            <div className="section-code section-code-light"><span>03</span><p>Caso documentado</p></div>
            <p className="section-kicker">AVANCE REAL / SANTA CRUZ</p>
            <h2>De la base a la entrega en 7 días.</h2>
            <p>Desliza el tiempo para recorrer el avance acelerado de una obra llave en mano realizada con paneles termoacústicos: desde la fijación de las primeras soleras hasta la culminación total.</p>
          </div>
          <BuildTimeline />
        </section>

        {/* Sección 5: Obras */}
        <section className="works section-pad" id="obras">
          <div className="section-head works-head">
            <div className="section-code"><span>04</span><p>Archivo de obras</p></div>
            <div><p className="section-kicker">NO SON RENDERS. SON OBRAS.</p><h2>El panel puesto a trabajar.</h2></div>
            <p className="section-summary">Viviendas residenciales, oficinas temporales, galpones industriales y montajes en altura. Arrastra el carrusel para recorrer el archivo real.</p>
          </div>
          <ProjectReel />
        </section>

        {/* Sección 6: Cuaderno de campo (Oculto temporalmente) */}
        {/*
        <section className="field-section">
          <div className="field-title">
            <div className="section-code" style={{ marginBottom: '24px' }}><span>05</span><p>Cuaderno de campo</p></div>
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
        */}

        {/* Sección 5: Ficha técnica */}
        <section className="data-section section-pad" id="datos">
          <div className="data-heading">
            <div className="section-code section-code-light"><span>05</span><p>Ficha técnica</p></div>
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

        {/* Sección 6: Aplicaciones */}
        <section className="applications">
          <div className="applications-title">
            <div className="section-code" style={{ marginBottom: '24px' }}><span>06</span><p>Escalas de aplicación</p></div>
            <h2>¿Dónde puede entrar?</h2>
          </div>
          <div className="application-list">
            {['Viviendas y ampliaciones', 'Oficinas y campamentos', 'Galpones y divisiones', 'Edificios y hospitales', 'Restaurantes y comercio', 'Cubiertas y soluciones especiales'].map((item, index) => (
              <a
                href={currentWhatsAppUrl}
                onClick={(e) => handleWhatsAppClick(e, `Hola, me interesa consultar sobre ${item} con Construpanel.`)}
                key={item}
              >
                <span>{String(index + 1).padStart(2, '0')}</span>
                <b>{item}</b>
                <i>Consultar <Arrow /></i>
              </a>
            ))}
          </div>
        </section>

        {/* =========================================================================
            COMPONENTES OCULTOS TEMPORALMENTE (Conservados para reactivar cuando se desee)
            ========================================================================= */}

        {/*
        <section className="faq-section section-pad">
          <div className="faq-intro"><span>ANTES DE CONSTRUIR</span><h2>Lo que conviene saber.</h2><p>Una respuesta clara antes de que el proyecto entre a cómputo.</p></div>
          <div className="faq-list">
            {faqs.map(([question, answer], index) => {
              const isOpen = openFaq === index
              return <article className={isOpen ? 'is-open' : ''} key={question}><button type="button" aria-expanded={isOpen} onClick={() => setOpenFaq(isOpen ? null : index)}><span>{String(index + 1).padStart(2, '0')}</span><b>{question}</b><i>{isOpen ? '−' : '+'}</i></button><div className="faq-answer"><p>{answer}</p></div></article>
            })}
          </div>
        </section>
        */}

        {/*
        <section className="contact-section" id="mesa-planos">
          <div className="contact-blueprint" aria-hidden="true"><i></i><i></i><i></i><i></i><span>0,615</span></div>
          <div className="contact-copy">
            <div className="section-code section-code-light" style={{ marginBottom: '28px' }}><span>08</span><p>Mesa de planos</p></div>
            <h2>Del archivo<br />a la obra.</h2>
            <p>Envíanos los planos editables de tu proyecto. Revisaremos superficie, espesores, encuentros y alcance de instalación.</p>
            <a
              href={currentWhatsAppUrl}
              onClick={(e) => handleWhatsAppClick(e, 'Hola, quiero enviar planos para cotización con Construpanel.')}
            >
              Enviar planos por WhatsApp <Arrow />
            </a>
          </div>
          <div className="contact-checklist">
            <span>PARA PREPARAR LA COTIZACIÓN</span>
            <ul>
              <li><b>01</b>Plano AutoCAD o vectorial</li>
              <li><b>02</b>Ubicación del proyecto</li>
              <li><b>03</b>Uso de cada ambiente</li>
              <li><b>04</b>Alcance de instalación</li>
            </ul>
            <div className="contact-direct-links">
              <a
                href={currentWhatsAppUrl}
                onClick={(e) => handleWhatsAppClick(e, 'Hola, quiero consultar con un asesor de Construpanel.')}
                className="contact-phone-badge"
              >
                📞 +591 750 22244 / 773 94185 (WhatsApp)
              </a>
              <a href="mailto:contacto@construpanel.com.bo">✉️ contacto@construpanel.com.bo</a>
            </div>
          </div>
        </section>
        */}
      </main>

      {/* Nuevo Footer idéntico al diseño de referencia */}
      <footer className="custom-footer" id="contacto">
        <div className="footer-top">
          {/* Columna 1: Marca y descripción */}
          <div className="footer-col footer-col-brand">
            <div className="footer-logo-card">
              <img src={construpanelLogo} alt="Construpanel Muros Termoacústicos" className="footer-logo-img" />
            </div>
            <p className="footer-about">
              El sistema constructivo mediante muros prefabricados tipo sándwich más rápido de Bolivia: aislamiento térmico y acústico, sin necesidad de revoque. Hecho en Bolivia.
            </p>
            <div className="footer-socials" aria-label="Redes sociales">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">IG</a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">FB</a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube">YT</a>
            </div>
          </div>

          {/* Columna 2: Enlaces rápidos */}
          <div className="footer-col">
            <h4 className="footer-heading">Enlaces Rápidos</h4>
            <ul className="footer-links">
              <li><a href="#inicio">Inicio</a></li>
              <li><a href="#obras">Proyectos</a></li>
              <li><a href="#laboratorio">Soluciones</a></li>
              <li><a href="#empresa">Nosotros</a></li>
              <li><a href="#contacto">Contactos</a></li>
            </ul>
          </div>

          {/* Columna 3: Nuestro sistema */}
          <div className="footer-col">
            <h4 className="footer-heading">Nuestro Sistema</h4>
            <ul className="footer-links">
              <li><a href="#laboratorio">Muros Termoacústicos</a></li>
              <li><a href="#obras">Cubierta Térmica (Techo)</a></li>
              <li><a href="#datos">Losas Alivianadas</a></li>
              <li><a href="#empresa">Bardas y Cerramientos</a></li>
            </ul>
          </div>

          {/* Columna 4: Contacto directo */}
          <div className="footer-col footer-col-contact">
            <h4 className="footer-heading">Contacto Directo</h4>
            <ul className="footer-contact-list">
              <li>
                <span className="contact-icon" role="img" aria-label="Ubicación">📍</span>
                <div>
                  <strong>Oficina Central:</strong> Santa Cruz de la Sierra, Bolivia
                </div>
              </li>
              <li>
                <span className="contact-icon" role="img" aria-label="Teléfono">📞</span>
                <div>
                  <strong>Teléfono / WhatsApp:</strong>{' '}
                  <a
                    href={currentWhatsAppUrl}
                    onClick={(e) => handleWhatsAppClick(e, 'Hola, me comunico desde la web de Construpanel.')}
                    className="footer-wa-link"
                    title="Haz clic para chatear por WhatsApp (rota automáticamente entre asesores)"
                  >
                    750 22244 / 773 94185
                  </a>
                </div>
              </li>
              <li>
                <span className="contact-icon" role="img" aria-label="Email">✉️</span>
                <div>
                  <strong>Email:</strong> <a href="mailto:contacto@construpanel.com.bo">contacto@construpanel.com.bo</a>
                </div>
              </li>
              <li>
                <span className="contact-icon" role="img" aria-label="Sucursales">🏢</span>
                <div>
                  <strong>Sucursales:</strong> La Paz y Cochabamba
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Construpanel - Todos los derechos reservados.</p>
          <span>Innovación en Muros Termoacústicos</span>
        </div>
      </footer>
    </MotionConfig>
  )
}

export default App
