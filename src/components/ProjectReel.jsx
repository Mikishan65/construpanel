import { useReducedMotion } from 'framer-motion'
import { useCallback, useEffect, useId, useRef, useState } from 'react'
import { projects } from '../data/company'

function Arrow({ previous = false }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d={previous ? 'm15 5-7 7 7 7M8 12h12' : 'm9 5 7 7-7 7M4 12h12'}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  )
}

export default function ProjectReel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const trackRef = useRef(null)
  const slideRefs = useRef([])
  const visibilityRatios = useRef([])
  const reduceMotion = useReducedMotion()
  const instanceId = useId()
  const trackId = `project-reel-track-${instanceId}`

  const goTo = useCallback((requestedIndex) => {
    const nextIndex = Math.max(0, Math.min(requestedIndex, projects.length - 1))
    const track = trackRef.current
    const slide = slideRefs.current[nextIndex]

    if (!track || !slide) return

    setActiveIndex(nextIndex)
    const left = slide.getBoundingClientRect().left - track.getBoundingClientRect().left + track.scrollLeft
    track.scrollTo({
      left,
      behavior: reduceMotion ? 'auto' : 'smooth',
    })
  }, [reduceMotion])

  useEffect(() => {
    const track = trackRef.current
    const slides = slideRefs.current.filter(Boolean)

    if (!track || slides.length === 0 || typeof IntersectionObserver === 'undefined') return undefined

    visibilityRatios.current = Array(projects.length).fill(0)

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const index = Number(entry.target.dataset.projectIndex)
        visibilityRatios.current[index] = entry.isIntersecting ? entry.intersectionRatio : 0
      })

      let mostVisibleIndex = 0
      let largestRatio = -1

      visibilityRatios.current.forEach((ratio, index) => {
        if (ratio > largestRatio) {
          largestRatio = ratio
          mostVisibleIndex = index
        }
      })

      if (largestRatio > 0) setActiveIndex(mostVisibleIndex)
    }, {
      root: track,
      rootMargin: '0px -8% 0px -8%',
      threshold: [0, 0.25, 0.5, 0.75, 1],
    })

    slides.forEach((slide) => observer.observe(slide))
    return () => observer.disconnect()
  }, [])

  const handleTrackKeyDown = (event) => {
    if (event.target !== event.currentTarget) return

    const destinations = {
      ArrowLeft: activeIndex - 1,
      ArrowRight: activeIndex + 1,
      Home: 0,
      End: projects.length - 1,
    }

    if (!(event.key in destinations)) return

    event.preventDefault()
    goTo(destinations[event.key])
  }

  return (
    <div
      className="project-reel"
      role="region"
      aria-roledescription="carrusel"
      aria-label="Trabajos realizados por Construpanel"
    >
      <div className="project-reel__toolbar">
        <p className="project-reel__status" aria-live="polite" aria-atomic="true">
          Proyecto {activeIndex + 1} de {projects.length}: {projects[activeIndex].name}
        </p>

        <div className="project-reel__controls">
          <button
            className="project-reel__arrow project-reel__arrow--previous"
            type="button"
            onClick={() => goTo(activeIndex - 1)}
            disabled={activeIndex === 0}
            aria-controls={trackId}
            aria-label="Ver proyecto anterior"
          >
            <Arrow previous />
          </button>
          <button
            className="project-reel__arrow project-reel__arrow--next"
            type="button"
            onClick={() => goTo(activeIndex + 1)}
            disabled={activeIndex === projects.length - 1}
            aria-controls={trackId}
            aria-label="Ver proyecto siguiente"
          >
            <Arrow />
          </button>
        </div>
      </div>

      <div
        className="project-reel__track"
        id={trackId}
        ref={trackRef}
        tabIndex="0"
        onKeyDown={handleTrackKeyDown}
        aria-label="Proyectos. Desliza horizontalmente o usa las flechas izquierda y derecha."
      >
        {projects.map((project, index) => (
          <article
            className={`project-reel__slide${activeIndex === index ? ' is-active' : ''}`}
            ref={(node) => { slideRefs.current[index] = node }}
            data-project-index={index}
            role="group"
            aria-roledescription="diapositiva"
            aria-label={`${index + 1} de ${projects.length}: ${project.name}`}
            key={`${project.name}-${project.detail}`}
          >
            <figure className="project-reel__figure">
              <div className="project-reel__image-wrap">
                <img
                  className="project-reel__image"
                  src={project.image}
                  alt={`${project.name}, ${project.detail}`}
                  loading="lazy"
                  decoding="async"
                  draggable="false"
                />
                <span className="project-reel__number" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              <figcaption className="project-reel__caption">
                <span className="project-reel__category">{project.category}</span>
                <h3>{project.name}</h3>
                <p>{project.detail}</p>
                <strong>{project.fact}</strong>
              </figcaption>
            </figure>
          </article>
        ))}
      </div>

      <div className="project-reel__pagination" aria-label="Seleccionar proyecto">
        {projects.map((project, index) => (
          <button
            className={`project-reel__dot${activeIndex === index ? ' is-active' : ''}`}
            type="button"
            onClick={() => goTo(index)}
            aria-controls={trackId}
            aria-current={activeIndex === index ? 'true' : undefined}
            aria-label={`Ir al proyecto ${index + 1}: ${project.name}`}
            key={project.name}
          >
            <span aria-hidden="true" />
          </button>
        ))}
      </div>
    </div>
  )
}
