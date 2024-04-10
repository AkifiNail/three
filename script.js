import * as THREE from "three";

let canvas = document.querySelector("canvas");

const texture = new THREE.TextureLoader().load("./images/younes.png");

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  70,
  window.innerWidth / window.innerWidth
);
const renderer = new THREE.WebGLRenderer({ canvas });

const light = new THREE.PointLight(0xffffff, 10); // Augmentation de l'intensité de la lumière
light.position.set(0, 0, 5);
scene.add(light);

const material = new THREE.MeshPhongMaterial({
  map: texture,
}); // Augmentation de l'émission du matériau

const geometry = new THREE.BoxGeometry(1, 1, 1);

const mesh = new THREE.Mesh(geometry, material);

scene.add(mesh);

camera.position.set(0, 0, 5);

loop();

function loop() {
  requestAnimationFrame(loop);

  mesh.rotation.x += 0.01;
  mesh.rotation.y += 0.01;

  renderer.render(scene, camera);
}

renderer.render(scene, camera);
