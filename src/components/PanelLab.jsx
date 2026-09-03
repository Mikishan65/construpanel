import { AnimatePresence, motion, useInView, useReducedMotion } from 'framer-motion'
import { lazy, Suspense, useMemo, useRef, useState } from 'react'
import { panelOptions } from '../data/company'

const PanelScene = lazy(() => import('./PanelScene'))

function AnimatedValue({ children }) {
  const reduceMotion = useReducedMotion()
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.strong key={children} initial={reduceMotion ? false : { opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={reduceMotion ? undefined : { opacity: 0, y: -8 }} transition={{ duration: reduceMotion ? 0 : 0.2 }}>{children}</motion.strong>
    </AnimatePresence>
  )
}

export default function PanelLab() {
  const [thickness, setThickness] = useState(75)
  const [exploded, setExploded] = useState(true)
  const [area, setArea] = useState(60)
  const sceneRef = useRef(null)
  const sceneInView = useInView(sceneRef, { margin: '220px 0px' })
  const selected = panelOptions.find((panel) => panel.thickness === thickness)
  const estimate = useMemo(() => {
    const safeArea = Number.isFinite(Number(area)) ? Math.max(0, Number(area)) : 0
    const panels = Math.ceil(safeArea / 1.5)
    return {
      panels,
      weight: Math.round(panels * selected.panelWeight),
      panelDays: (safeArea / 30).toFixed(1),
      brickDays: (safeArea / 10).toFixed(1),
    }
  }, [area, selected])

  return (
    <div className="panel-lab">
      <div className="lab-stage" ref={sceneRef}>
        <div className="lab-ruler ruler-horizontal"><span>0</span><i></i><span>0,615 m</span></div>
        <div className="lab-ruler ruler-vertical"><span>2,44 m</span><i></i></div>
        {sceneInView ? (
          <Suspense fallback={<div className="scene-loader"><span></span><p>Cargando corte técnico</p></div>}>
            <PanelScene thickness={thickness} exploded={exploded} />
          </Suspense>
        ) : <div className="panel-poster" aria-hidden="true"><i></i><i></i><i></i></div>}
        <div className="lab-stage-copy"><span>Vista técnica</span><b>{exploded ? 'CAPAS SEPARADAS' : 'PANEL ARMADO'}</b></div>
      </div>

      <div className="lab-console">
        <div className="console-head"><span>CONFIGURADOR / CP-01</span><button type="button" onClick={() => setExploded(!exploded)} aria-pressed={exploded}>{exploded ? 'Ver armado' : 'Separar capas'}<i></i></button></div>
        <fieldset className="thickness-selector">
          <legend>Selecciona el espesor</legend>
          {panelOptions.map((panel) => <label key={panel.thickness} className={thickness === panel.thickness ? 'is-active' : ''}><input type="radio" name="thickness" value={panel.thickness} checked={thickness === panel.thickness} onChange={() => setThickness(panel.thickness)} /><span>{panel.thickness}<small>mm</small></span><b>{panel.use}</b></label>)}
        </fieldset>

        <div className="selected-specs">
          <div><span>Peso por m²</span><AnimatedValue>{selected.weightM2.toFixed(2).replace('.', ',')} kg</AnimatedValue><small>± 4 kg/m²</small></div>
          <div><span>Peso por panel</span><AnimatedValue>{selected.panelWeight.toFixed(1).replace('.', ',')} kg</AnimatedValue><small>1,50 m² por pieza</small></div>
          <div><span>Desempeño acústico</span><AnimatedValue>{selected.acoustic} dB</AnimatedValue><small>dato por espesor</small></div>
          <div><span>Resistencia térmica</span><AnimatedValue>{selected.thermalResistance.toFixed(2).replace('.', ',')}</AnimatedValue><small>m²·K/W · e/λ</small></div>
        </div>

        <div className="wall-calculator">
          <div className="calculator-title"><span>Calcula una referencia</span><label>Superficie del muro <span><input type="number" min="1" max="9999" value={area} onChange={(event) => setArea(event.target.value)} /> m²</span></label></div>
          <div className="calculator-output">
            <div><b>{estimate.panels}</b><span>paneles aprox.</span></div>
            <div><b>{estimate.weight.toLocaleString('es-BO')}</b><span>kg aprox.</span></div>
            <div><b>{estimate.panelDays}</b><span>jornales-op. panel</span></div>
            <div><b>{estimate.brickDays}</b><span>jornales-op. ladrillo</span></div>
          </div>
          <p>Cálculo orientativo sin desperdicio, aberturas ni condiciones particulares. Rendimientos y pesos según datos de fábrica; no reemplaza cómputo ni cálculo estructural.</p>
        </div>
      </div>
    </div>
  )
}
