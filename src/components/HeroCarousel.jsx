import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { heroSlides, whatsapp } from '../data/company'

function Arrow({ previous = false }) {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d={previous ? 'm15 5-7 7 7 7M8 12h12' : 'm9 5 7 7-7 7M4 12h12'} fill="none" stroke="currentColor" strokeWidth="1.8" /></svg>
}

export default function HeroCarousel() {
  const [active, setActive] = useState(0)
  const [direction, setDirection] = useState(1)
  const [paused, setPaused] = useState(false)
  const [split, setSplit] = useState(58)
  const heroRef = useRef(null)
  const reduceMotion = useReducedMotion()
  const slide = heroSlides[active]

  const goTo = (index) => {
    const next = (index + heroSlides.length) % heroSlides.length
    setDirection(next > active || (active === heroSlides.length - 1 && next === 0) ? 1 : -1)
    setActive(next)
  }

  const updateSplitFromPointer = (clientX) => {
    const bounds = heroRef.current?.getBoundingClientRect()
    if (!bounds) return
    const percentage = ((clientX - bounds.left) / bounds.width) * 100
    setSplit(Math.min(72, Math.max(52, percentage)))
  }

  useEffect(() => {
    if (reduceMotion || paused || window.matchMedia('(max-width: 720px)').matches) return undefined
    const timer = window.setInterval(() => {
      setDirection(1)
      setActive((current) => (current + 1) % heroSlides.length)
    }, 7000)
    return () => window.clearInterval(timer)
  }, [paused, reduceMotion])

  return (
    <section
      className="hero-carousel"
      id="inicio"
      ref={heroRef}
      style={{ '--split': `${split}%` }}
      role="region"
      aria-roledescription="carrusel"
      aria-label="Proyectos destacados de Construpanel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      onKeyDown={(event) => {
        if (event.key === 'ArrowLeft') goTo(active - 1)
        if (event.key === 'ArrowRight') goTo(active + 1)
      }}
    >
      <div className="hero-photo">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.img
            key={slide.image}
            src={slide.image}
            alt={slide.overline}
            style={{ objectPosition: slide.fit }}
            initial={reduceMotion ? false : { opacity: 0, scale: 1.07, x: direction * 25 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, scale: 1.02, x: direction * -18 }}
            transition={{ duration: reduceMotion ? 0 : 0.85, ease: [0.16, 1, 0.3, 1] }}
          />
        </AnimatePresence>
      </div>

      <motion.div className="hero-blueprint" initial={reduceMotion ? false : { clipPath: 'inset(0 100% 0 0)' }} animate={{ clipPath: `inset(0 ${100 - split}% 0 0)` }} transition={{ duration: reduceMotion ? 0 : 1.05, ease: [0.16, 1, 0.3, 1] }}>
        <div className="blueprint-lines" aria-hidden="true"><i></i><i></i><i></i><i></i></div>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div className="hero-message" key={slide.title} initial={reduceMotion ? false : { opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={reduceMotion ? undefined : { opacity: 0, y: -24 }} transition={{ duration: reduceMotion ? 0 : 0.5, ease: [0.16, 1, 0.3, 1] }}>
            <p>{slide.overline}</p>
            <h1>{slide.title}</h1>
            <span>{slide.description}</span>
            <div className="hero-actions"><a href={whatsapp} target="_blank" rel="noreferrer">Cotizar con planos <Arrow /></a><a href="#caso">Ver el caso de 40 días</a></div>
          </motion.div>
        </AnimatePresence>
        <div className="hero-module"><span>FORMATO DE PANEL</span><b>2,44 × 0,615 m</b><small>1,50 m² por pieza</small></div>
      </motion.div>

      <div
        className="hero-seam"
        style={{ left: `${split}%` }}
        aria-hidden="true"
        onPointerDown={(event) => {
          event.currentTarget.setPointerCapture(event.pointerId)
          updateSplitFromPointer(event.clientX)
        }}
        onPointerMove={(event) => {
          if (event.currentTarget.hasPointerCapture(event.pointerId)) updateSplitFromPointer(event.clientX)
        }}
        onPointerUp={(event) => event.currentTarget.releasePointerCapture(event.pointerId)}
        onPointerCancel={(event) => event.currentTarget.releasePointerCapture(event.pointerId)}
      ><span>0,615 m</span><i></i></div>
      <input className="split-control" type="range" min="52" max="72" value={split} onChange={(event) => setSplit(Number(event.target.value))} aria-label="Ajustar división entre información y fotografía" />

      <div className="hero-carousel-controls">
        <button type="button" onClick={() => goTo(active - 1)} aria-label="Proyecto anterior"><Arrow previous /></button>
        <div className="hero-counter"><strong>{String(active + 1).padStart(2, '0')}</strong><span>/ {String(heroSlides.length).padStart(2, '0')}</span><i><b style={{ transform: `scaleX(${(active + 1) / heroSlides.length})` }} /></i></div>
        <button type="button" onClick={() => goTo(active + 1)} aria-label="Proyecto siguiente"><Arrow /></button>
        <p aria-live={paused ? 'polite' : 'off'}>{slide.metric}</p>
      </div>
    </section>
  )
}
