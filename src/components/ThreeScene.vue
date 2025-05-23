<template>
  <div class="three-scene" ref="threeContainer"></div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import * as THREE from 'three';

export default {
  name: 'ThreeScene',
  props: {
    size: {
      type: Object,
      default: () => ({ width: '100%', height: '100%' })
    }
  },
  setup(props) {
    const threeContainer = ref(null);
    let scene, camera, renderer, geometry, material, mesh;
    let frameId = null;
    
    // Inicialitzar l'escena 3D
    const initThree = () => {
      // Crear l'escena
      scene = new THREE.Scene();
      scene.background = new THREE.Color(0x000000);
      
      // Crear la càmera
      const container = threeContainer.value;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
      camera.position.z = 5;
      
      // Crear el renderer
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(width, height);
      renderer.setPixelRatio(window.devicePixelRatio);
      
      // Afegir el renderer al DOM
      container.appendChild(renderer.domElement);

      // Crear una geometria matemàtica complexa: Torus Knot
      geometry = new THREE.TorusKnotGeometry(1, 0.3, 128, 32, 2, 3);
      
      // Material brillant amb color blau
      material = new THREE.MeshStandardMaterial({ 
        color: 0x003EFF,
        metalness: 0.7,
        roughness: 0.2,
        emissive: 0x001F80,
        emissiveIntensity: 0.2
      });
      
      // Crear la mesh
      mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);
      
      // Afegir llums
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
      scene.add(ambientLight);
      
      const pointLight1 = new THREE.PointLight(0x003EFF, 2, 50);
      pointLight1.position.set(5, 5, 5);
      scene.add(pointLight1);
      
      const pointLight2 = new THREE.PointLight(0xffffff, 1, 50);
      pointLight2.position.set(-5, -5, 2);
      scene.add(pointLight2);
      
      // Iniciar l'animació
      animate();
      
      // Afegir listener per redimensionar
      window.addEventListener('resize', onWindowResize);
    };
    
    // Funció d'animació
    const animate = () => {
      frameId = requestAnimationFrame(animate);
      
      // Rotar la mesh
      if (mesh) {
        mesh.rotation.x += 0.005;
        mesh.rotation.y += 0.01;
      }
      
      // Renderitzar l'escena
      renderer.render(scene, camera);
    };
    
    // Redimensionar l'escena quan canvia la mida de la finestra
    const onWindowResize = () => {
      if (!threeContainer.value) return;
      
      const width = threeContainer.value.clientWidth;
      const height = threeContainer.value.clientHeight;
      
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      
      renderer.setSize(width, height);
    };
    
    // Netejar recursos quan es desmunta el component
    const cleanUp = () => {
      if (frameId != null) {
        cancelAnimationFrame(frameId);
      }
      
      if (threeContainer.value && renderer) {
        threeContainer.value.removeChild(renderer.domElement);
      }
      
      window.removeEventListener('resize', onWindowResize);
      
      // Disposar de tots els recursos
      if (geometry) geometry.dispose();
      if (material) material.dispose();
      if (renderer) renderer.dispose();
    };
    
    onMounted(() => {
      initThree();
    });
    
    onBeforeUnmount(() => {
      cleanUp();
    });
    
    return {
      threeContainer
    };
  }
};
</script>

<style scoped>
.three-scene {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  overflow: hidden;
}
</style>
