import './style.css'
import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Objects
 * 
 * Choose a unity method that match the project
 */
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
/* mesh.position.x = 0.5
   mesh.position.y = 0.5 
   mesh.position.z = -2 */
scene.add(mesh)

/* Update all mesh coordinate at once */
mesh.position.set(0.7, 0.6, 1)


// Scale
mesh.scale.x = 2
mesh.scale.set(2, 0.5, 0.5)


// Rotation (rotation and quaternion) [make reorder before changing the locatiom]
mesh.rotation.reorder('YXZ')
mesh.rotation.y = Math.PI * 0.25
mesh.rotation.x = Math.PI * 0.25

// Quaternion (rotation in a matematial way)


// Axes helper (argoment to pass is the units to display)
const axesHelper = new THREE.AxesHelper(3)
scene.add(axesHelper);


/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3.5
camera.position.y = 1
camera.position.x = 1
scene.add(camera)

// Look at (give a vector3)
camera.lookAt(mesh.position)
console.log(camera.rotation);

/* Normalize */
/* console.log(camera.position.length());
camera.position.normalize()
console.log(camera.position.length()); */

// console.log(mesh.position.distanceTo(camera.position));

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)