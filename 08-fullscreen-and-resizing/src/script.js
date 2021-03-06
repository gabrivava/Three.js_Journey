import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

/**
 * Base
 */
// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene() 

/**
 * Object
 */
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () => 
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    // Set pixelRation (pc: 1, smatphone: also 5) whe have to limit it
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

})

// Funzione al doppio click
window.addEventListener('dblclick', () =>
{
    // fix on sfari
    const fullscreenElement = document.fullscreenElement || document.wekitFullscreenElement


    if (!fullscreenElement) 
    {
        // if the browser already support request Fullscreen it's going to call canvas.requestFullscreen()
        if (canvas.requestFullscreen) 
        {
            canvas.requestFullscreen()
        }
        // if not js check if webkitRequestFullscreen exists and call canvas.webkitRequestFullscreen()
        else if (canvas.webkitRequestFullscreen)
        {
            canvas.webkitRequestFullscreen()
        }
    } 
    else 
    {
        if (document.exitFullscreen) 
        {
            document.exitFullscreen()
        }
        else if (document.webkitExitFullscreen)
        {
            document.webkitExitFullscreen()
        }
    }
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.z = 3
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)

/**
 * Animate
 */
const clock = new THREE.Clock()

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()

    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()