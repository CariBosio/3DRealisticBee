import gsap from 'gsap'
import React, { FunctionComponent } from 'react'
import * as THREE from 'three'
gsap.registerPlugin()

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
const scene = new THREE.Scene()

const loader = new GLTFLoader()

const AptugoComponent: FunctionComponent<any> = (props) => {
  const beeRef = React.useRef('')
  const mountRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    if (!mountRef.current) return

    // --- THREE.JS SETUP ---
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(10, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.z = 13

    const renderer = new THREE.WebGLRenderer({ alpha: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    mountRef.current.appendChild(renderer.domElement)

    scene.add(new THREE.AmbientLight(0xffffff, 1.3))
    const topLight = new THREE.DirectionalLight(0xffffff, 1)
    topLight.position.set(500, 500, 500)
    scene.add(topLight)

    // --- CARGA DE MODELO Y ANIMACIÓN ---
    const loader = new GLTFLoader()
    const clock = new THREE.Clock()
    let mixer: THREE.AnimationMixer | null = null
    let beeMesh: THREE.Group | null = null

    // --- POSICIONES SEGÚN SECCIÓN ---
    const arrPositionModel = [
      { id: 'banner', position: { x: 0, y: -1, z: 0 }, rotation: { x: 0, y: 1.5, z: 0 } },
      { id: 'intro', position: { x: 1, y: -1, z: -5 }, rotation: { x: 0.5, y: -0.5, z: 0 } },
      { id: 'description', position: { x: -1, y: -1, z: -5 }, rotation: { x: 0, y: 0.5, z: 0 } },
      { id: 'contact', position: { x: 0.8, y: -1, z: 0 }, rotation: { x: 0.3, y: -0.5, z: 0 } },
    ]

    // --- OBSERVADOR DE INTERSECCIÓN ---
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const sectionId = entry.target.id
          const posObj = arrPositionModel.find((o) => o.id === sectionId)

          if (entry.isIntersecting && posObj && beeMesh) {
            gsap.to(beeMesh.position, {
              ...posObj.position,
              duration: 2,
              ease: 'power1.out',
            })
            gsap.to(beeMesh.rotation, {
              ...posObj.rotation,
              duration: 2,
              ease: 'power1.out',
            })
          }
        })
      },
      { threshold: 0.5 } // Activamos cuando el 50% del elemento es visible
    )

    loader.load(
      '/bee.glb',
      ({ scene: beeScene, animations }) => {
        beeMesh = beeScene
        scene.add(beeScene)

        mixer = new THREE.AnimationMixer(beeScene)
        mixer.clipAction(animations[0]).play()

        // Ahora que el modelo está listo, habilitamos el observador de intersección
        arrPositionModel.forEach((pos) => {
          const section = document.getElementById(pos.id)
          if (section) observer.observe(section)
        })
      },
      undefined,
      (error) => console.error('Error cargando el modelo:', error)
    )

    const animate = () => {
      requestAnimationFrame(animate)
      if (mixer) mixer.update(clock.getDelta())
      renderer.render(scene, camera)
    }
    animate()

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener('resize', onResize)

    // --- LIMPIEZA ---
    return () => {
      window.removeEventListener('resize', onResize)
      renderer.dispose()
      if (mountRef.current?.contains(renderer.domElement)) {
        mountRef.current.removeChild(renderer.domElement)
      }
      observer.disconnect() // Desconectamos el observer al desmontar el componente
    }
  }, [])

  return (
    <React.Fragment>
      <div
        data-title="div"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          pointerEvents: 'none',
          zIndex: 9999,
        }}
        ref={mountRef}
      ></div>
    </React.Fragment>
  )
}

export default AptugoComponent
