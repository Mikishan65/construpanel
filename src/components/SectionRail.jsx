import { motion, useScroll, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'

const sections = [
  ['inicio', 'Inicio'],
  ['empresa', 'Empresa'],
  ['laboratorio', 'Panel'],
  ['caso', '40 días'],
  ['obras', 'Obras'],
  ['datos', 'Datos'],
  ['contacto', 'Contacto'],
]

export default function SectionRail() {
  const [active, setActive] = useState('inicio')
  const { scrollYProgress } = useScroll()
  const scaleY = useSpring(scrollYProgress, { stiffness: 130, damping: 28, restDelta: 0.001 })

  useEffect(() => {
    const nodes = sections.map(([id]) => document.getElementById(id)).filter(Boolean)
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.find((entry) => entry.isIntersecting)
      if (visible) setActive(visible.target.id)
    }, { rootMargin: '-44% 0px -44%', threshold: 0 })
    nodes.forEach((node) => observer.observe(node))
    return () => observer.disconnect()
  }, [])

  return (
    <aside className="section-rail" aria-label="Progreso de la página">
      <div className="rail-track"><motion.i style={{ scaleY }} /></div>
      <nav>
        {sections.map(([id, label], index) => <a key={id} className={active === id ? 'is-active' : ''} href={`#${id}`} aria-current={active === id ? 'location' : undefined}><span>{String(index + 1).padStart(2, '0')}</span><b>{label}</b></a>)}
      </nav>
    </aside>
  )
}
