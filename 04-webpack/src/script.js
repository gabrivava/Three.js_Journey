import './style.css'
import * as THREE from 'three'

// Creation scene (we put object, models, light in it)
const scene = new THREE.Scene()

// creation of object
const cube = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 'red'});

const mesh = new THREE.Mesh(cube, material)
scene.add(mesh)

// Parametri da passare => angolo di visione in verticale || aspect ratio(widht/height)
const sizes = {
    width: 800,
    height: 600
}
// Camera (render come from only one camera)
const camera = new THREE.PerspectiveCamera(75, sizes.width/sizes.height)
camera.position.z = 4;
scene.add(camera)

// Renderer
const canvas = document.querySelector('.webgl')
console.log(canvas);
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})

// Resize render
renderer.setSize(sizes.width, sizes.height)

// Provide Scene and a camera
renderer.render(scene, camera)