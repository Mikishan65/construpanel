import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useState } from 'react'
import { buildSteps } from '../data/company'

export default function BuildTimeline() {
  const [step, setStep] = useState(0)
  const [direction, setDirection] = useState(1)
  const reduceMotion = useReducedMotion()
  const active = buildSteps[step]

  const selectStep = (next) => {
    setDirection(next > step ? 1 : -1)
    setStep(next)
  }

  return (
    <div className="build-timeline">
      <div className="timeline-visual">
        <AnimatePresence mode="wait" initial={false}>
          <motion.img
            key={active.day}
            src={active.image}
            alt={`${active.day}: ${active.title}`}
            style={{ objectPosition: active.fit }}
            loading="lazy"
            decoding="async"
            initial={reduceMotion ? false : { opacity: 0, x: direction * 32 }}
            animate={{ opacity: 1, x: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, x: direction * -24 }}
            transition={{ duration: reduceMotion ? 0 : 0.45, ease: [0.16, 1, 0.3, 1] }}
          />
        </AnimatePresence>
        <span className="timeline-stamp">ENTREGA EN 7 DÍAS / SISTEMA TERMOACÚSTICO</span>
        <strong>{active.day}</strong>
      </div>
      <div className="timeline-panel">
        <div className="timeline-readout"><span>Etapa {step + 1} de {buildSteps.length}</span><b>{active.day}</b><h3>{active.title}</h3><p>{active.text}</p></div>
        <input type="range" min="0" max="2" step="1" value={step} onChange={(event) => selectStep(Number(event.target.value))} aria-label="Etapa de construcción" aria-valuetext={`${active.day}: ${active.title}`} />
        <div className="timeline-controls">
          {buildSteps.map((item, index) => <button type="button" className={step === index ? 'is-active' : ''} onClick={() => selectStep(index)} key={item.day}><span>{item.day}</span><i></i></button>)}
        </div>
        <p className="timeline-disclaimer">Plazo correspondiente a este caso documentado; no constituye un plazo general para otros proyectos.</p>
      </div>
    </div>
  )
}
