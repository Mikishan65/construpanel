import { Canvas, useFrame } from '@react-three/fiber'
import { useReducedMotion } from 'framer-motion'
import { MathUtils } from 'three'
import { useMemo, useRef } from 'react'

function Layer({ position, size, color, roughness = 0.8 }) {
  return (
    <group position={position}>
      <mesh>
        <boxGeometry args={size} />
        <meshStandardMaterial color={color} roughness={roughness} metalness={0.02} />
      </mesh>
      <mesh scale={1.003}>
        <boxGeometry args={size} />
        <meshBasicMaterial color="#22302d" wireframe transparent opacity={0.16} />
      </mesh>
    </group>
  )
}

function PanelModel({ thickness, exploded, reduceMotion }) {
  const group = useRef()
  const normalizedThickness = (thickness - 60) / 60
  const coreDepth = 0.42 + normalizedThickness * 0.38
  const faceDepth = coreDepth / 2 + 0.08
  const frontPosition = exploded ? [-1.55, 0, 0.4] : [0, 0, faceDepth]
  const backPosition = exploded ? [1.55, 0, -0.4] : [0, 0, -faceDepth]
  const beads = useMemo(() => Array.from({ length: 30 }, (_, index) => ({
    x: -0.62 + (index % 6) * 0.25,
    y: -1.35 + Math.floor(index / 6) * 0.67,
    z: index % 2 === 0 ? 0.22 : -0.22,
    scale: 0.055 + (index % 3) * 0.012,
  })), [])

  useFrame((state) => {
    if (!group.current) return
    const pointerX = reduceMotion ? 0 : state.pointer.x
    const pointerY = reduceMotion ? 0 : state.pointer.y
    group.current.rotation.y = MathUtils.lerp(group.current.rotation.y, -0.18 + pointerX * 0.16, 0.045)
    group.current.rotation.x = MathUtils.lerp(group.current.rotation.x, -0.05 - pointerY * 0.08, 0.045)
  })

  return (
    <group ref={group} rotation={[-0.05, -0.18, 0]} scale={exploded ? 0.7 : 0.86}>
      <Layer position={frontPosition} size={[1.6, 3.65, 0.12]} color="#f4f1e8" />
      <Layer position={[0, 0, 0]} size={[1.6, 3.65, coreDepth]} color="#73887b" roughness={1} />
      <Layer position={backPosition} size={[1.6, 3.65, 0.12]} color="#f4f1e8" />
      {beads.map((bead, index) => (
        <mesh key={index} position={[bead.x, bead.y, bead.z]} scale={bead.scale}>
          <sphereGeometry args={[1, 10, 10]} />
          <meshStandardMaterial color="#d9dfd8" roughness={1} />
        </mesh>
      ))}
    </group>
  )
}

export default function PanelScene({ thickness = 75, exploded = true }) {
  const reduceMotion = useReducedMotion()
  return (
    <div className="panel-canvas" aria-hidden="true">
      <Canvas dpr={reduceMotion ? 1 : [1, 1.5]} camera={{ position: [0, 0, 7.2], fov: 37 }} frameloop={reduceMotion ? 'demand' : 'always'} gl={{ antialias: true, alpha: true }}>
        <ambientLight intensity={2.1} />
        <directionalLight position={[4, 6, 3]} intensity={3.2} color="#fffaf0" />
        <directionalLight position={[-4, -2, 2]} intensity={1.4} color="#b8d0c4" />
        <PanelModel thickness={thickness} exploded={exploded} reduceMotion={reduceMotion} />
      </Canvas>
    </div>
  )
}
