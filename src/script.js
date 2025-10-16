import * as THREE from 'three' 

//scene
const scene = new THREE.Scene()

//object
const geometry = new THREE.CircleGeometry(1, 32, 0, Math.PI * 2)
const material = new THREE.MeshBasicMaterial({ color: 0x919f81  })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

//sizes
const sizes = 
{
    width: 800,
    height: 600
}

//camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

//renderer
const canvas = document.querySelector('canvas.webgl')
const renderer = new THREE.WebGLRenderer({ canvas: canvas })
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)

    //console.log('Hello, Three.js!')

