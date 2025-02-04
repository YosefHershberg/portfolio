import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Decal, Float, OrbitControls, Preload, useTexture } from '@react-three/drei'
import CanvasLoader from './Loader'
import useIntersectionObserver from '@/hooks/useIntersectionObserver'

const Ball = (props: any) => {
  const [decal] = useTexture([props.imgURL])

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color='#fff8eb'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          map={decal}
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
        />
      </mesh>
    </Float>
  )
}

const BallCanvas = ({ icon, threshold }: { icon: any, threshold: number }) => {
  const options = { threshold };
  const { ref, isVisible } = useIntersectionObserver<HTMLDivElement>(options);

  return (
    <div
      ref={ref}
      className={`size-24 cursor-grab active:cursor-grabbing transition-transform duration-700
         ${isVisible ? 'translate-y-0' : 'translate-y-full'}
      `}
    >
      <Canvas
        frameloop='demand'
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
          />
          <Ball imgURL={icon} />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  )
}

export default BallCanvas