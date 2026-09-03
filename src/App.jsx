import { useEffect, useState } from 'react'
import './App.css'

const specs = [
  ['λ', 'Aislación térmica', '0,221', 'W/m·K', 'Conductividad térmica según ficha técnica.'],
  ['dB', 'Aislación acústica', 'hasta 44', 'dB', 'En panel de 120 mm de espesor.'],
  ['FR', 'Resistencia al fuego', '2', 'horas', 'Placas de fibrocemento, grado A-1.'],
  ['30', 'Avance de obra', '30', 'm²/día-op.', 'Sin necesidad de revoque.'],
]

const applications = [
  'Viviendas y ampliaciones', 'Oficinas y campamentos', 'Galpones y cerramientos',
  'Edificios y hospitales', 'Divisiones interiores', 'Mesones y soluciones especiales',
]

const faqs = [
  ['¿Qué dimensiones tiene cada panel?', 'Cada panel mide 2,44 m × 0,615 m y cubre 1,50 m². Se fabrica en espesores de 60, 75, 100 y 120 mm, según el uso del muro.'],
  ['¿Dónde se puede usar el sistema?', 'Sirve para muros portantes y cerramientos en viviendas, oficinas, galpones, campamentos, edificios, hospitales y bardas. Se combina con estructuras metálicas, de hormigón o madera.'],
  ['¿Cómo solicito una cotización?', 'Envíanos los planos editables en AutoCAD o formato vectorial por WhatsApp o correo. Con esa información revisamos tu proyecto y preparamos una cotización.'],
]

function ArrowIcon() {
  return <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M3 10h13M11 5l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.6" /></svg>
}

function Brand() {
  return <a className="brand" href="#inicio" aria-label="Construpanel, inicio"><span className="brand-mark" aria-hidden="true">C</span><span>CONSTRU<b>PANEL</b></span></a>
}

function App() {
  const [openFaq, setOpenFaq] = useState(null)

  useEffect(() => {
    document.documentElement.classList.add('has-motion')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12 })
    document.querySelectorAll('.reveal').forEach((element) => observer.observe(element))
    return () => {
      observer.disconnect()
      document.documentElement.classList.remove('has-motion')
    }
  }, [])

  return (
    <main>
      <header className="site-header">
        <Brand />
        <nav className="main-nav" aria-label="Navegación principal">
          <a href="#sistema">El sistema</a><a href="#aplicaciones">Aplicaciones</a><a href="#tecnica">Ficha técnica</a>
        </nav>
        <a className="header-contact" href="https://wa.me/59175022244" target="_blank" rel="noreferrer">Cotizar proyecto <ArrowIcon /></a>
      </header>

      <section className="hero-section" id="inicio">
        <div className="hero-copy reveal">
          <p className="eyebrow"><span></span> Santa Cruz · Bolivia</p>
          <h1>Construir más rápido también es construir mejor.</h1>
          <p className="hero-intro">Muros prefabricados termoacústicos para obras que necesitan avanzar sin perder precisión.</p>
          <div className="hero-actions">
            <a className="button button-dark" href="https://wa.me/59175022244?text=Hola%2C%20quiero%20cotizar%20un%20proyecto%20con%20Construpanel." target="_blank" rel="noreferrer">Cotizar mi proyecto <ArrowIcon /></a>
            <a className="text-link" href="#tecnica">Ver ficha técnica <ArrowIcon /></a>
          </div>
          <p className="hero-note">Envíanos tus planos editables en AutoCAD o formato vectorial.</p>
        </div>
        <div className="hero-visual reveal" aria-label="Esquema de corte de un panel Construpanel" role="img">
          <div className="visual-label visual-label-top">Fibrocemento<br />4 mm</div>
          <div className="visual-label visual-label-right">Núcleo termoacústico</div>
          <div className="panel-drawing">
            <div className="panel-face"></div>
            <div className="panel-core"><span></span><span></span><span></span><span></span><span></span></div>
            <div className="panel-face"></div>
            <div className="panel-measurement"><i></i> 60–120 mm</div>
          </div>
          <div className="visual-caption"><span>Sección constructiva</span><b>01</b></div>
        </div>
      </section>

      <section className="statement-section" id="sistema">
        <div className="section-topline reveal"><p className="eyebrow">El sistema</p><p>Producción, venta e instalación de paneles prefabricados.</p></div>
        <div className="statement-grid">
          <h2 className="reveal">Menos etapas en obra. Más control sobre el resultado.</h2>
          <div className="statement-copy reveal"><p>Construpanel reemplaza el muro tradicional por una solución lista para montar. Su núcleo de hormigón alivianado con poliestireno expandido está revestido por dos placas de fibrocemento libres de asbesto.</p><p>El resultado es un muro más ligero, térmico y acústico, compatible con estructuras de hormigón, metal o madera.</p></div>
        </div>
      </section>

      <section className="specs-section" id="tecnica">
        <div className="section-heading reveal"><p className="eyebrow">Datos que se miden</p><h2>Desempeño para decidir con certeza.</h2></div>
        <div className="spec-grid">
          {specs.map(([mark, label, value, unit, note], index) => <article className="spec-card reveal" style={{ '--index': index }} key={label}><span className="spec-mark">{mark}</span><p>{label}</p><strong>{value} <small>{unit}</small></strong><span className="spec-note">{note}</span></article>)}
        </div>
        <div className="comparison reveal">
          <div><p className="eyebrow">Frente al ladrillo</p><h3>Más avance, menos peso.</h3></div>
          <dl>
            <div><dt>Avance por jornal</dt><dd>Desde 30 m² <span>vs. hasta 10 m²</span></dd></div>
            <div><dt>Peso por m²</dt><dd>Desde 40,33 kg <span>vs. 200 kg</span></dd></div>
            <div><dt>Reutilización</dt><dd>Hasta 80% <span>vs. 0%</span></dd></div>
          </dl>
        </div>
      </section>

      <section className="applications-section" id="aplicaciones">
        <div className="applications-media reveal" aria-hidden="true"><div className="grid-plane grid-plane-back"></div><div className="grid-plane grid-plane-front"></div><p>2,44 m × 0,615 m</p><span>Panel modular</span></div>
        <div className="applications-copy reveal">
          <p className="eyebrow">Donde hace falta avanzar</p><h2>Un mismo sistema para obras de escalas distintas.</h2><p>Desde una vivienda hasta una división interna en un galpón, los paneles se adaptan a la estructura y a las condiciones de cada proyecto.</p>
          <ul>{applications.map((application) => <li key={application}>{application}<ArrowIcon /></li>)}</ul>
        </div>
      </section>

      <section className="process-section">
        <div className="section-heading reveal"><p className="eyebrow">Una obra empieza antes del primer panel</p><h2>Para cotizar, necesitamos entender tu proyecto.</h2></div>
        <ol className="process-list">
          <li className="reveal"><span>01</span><h3>Comparte tus planos</h3><p>Recibimos el proyecto editable en AutoCAD o formato vectorial.</p></li>
          <li className="reveal"><span>02</span><h3>Revisamos la solución</h3><p>Definimos espesores, cantidades y necesidades de instalación.</p></li>
          <li className="reveal"><span>03</span><h3>Recibes tu cotización</h3><p>Te acompañamos con una propuesta clara para iniciar la obra.</p></li>
        </ol>
      </section>

      <section className="faq-section">
        <div className="faq-heading reveal"><p className="eyebrow">Preguntas frecuentes</p><h2>Información clara para planificar mejor.</h2><a className="text-link" href="mailto:contacto@construpanel.com.bo">Escribir al equipo <ArrowIcon /></a></div>
        <div className="faq-list reveal">
          {faqs.map(([question, answer], index) => {
            const isOpen = openFaq === index
            return <article className={isOpen ? 'faq-item is-open' : 'faq-item'} key={question}><button type="button" onClick={() => setOpenFaq(isOpen ? null : index)} aria-expanded={isOpen}><span>{question}</span><b aria-hidden="true">{isOpen ? '−' : '+'}</b></button><div className="faq-answer"><p>{answer}</p></div></article>
          })}
        </div>
      </section>

      <section className="contact-section"><div className="contact-grid reveal"><p className="eyebrow">Construpanel Bolivia</p><h2>Tu obra no tiene por qué avanzar al ritmo de siempre.</h2><a className="button button-light" href="https://wa.me/59175022244?text=Hola%2C%20quiero%20cotizar%20un%20proyecto%20con%20Construpanel." target="_blank" rel="noreferrer">Hablar por WhatsApp <ArrowIcon /></a></div></section>

      <footer className="site-footer">
        <Brand />
        <address>Tercer Anillo Externo, entre Av. Virgen de Cotoca y Av. Brasil<br />Calle Ángel Chávez, esq. Padre José M. Carrillo · Santa Cruz, Bolivia</address>
        <div className="footer-links"><a href="tel:+59175022244">+591 750 22244</a><a href="mailto:contacto@construpanel.com.bo">contacto@construpanel.com.bo</a></div>
      </footer>
    </main>
  )
}

export default App
