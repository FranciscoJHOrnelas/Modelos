// Esperar 2 segundos y luego mostrar el contenido principal
setTimeout(function () {
    document.querySelector('.splash-screen').style.display = 'none';
    document.querySelector('main').classList.remove('hidden');
}, 2000); // 2000 milisegundos = 2 segundos

AFRAME.registerComponent('rotation-reader', {
    /**
     * We use IIFE (immediately-invoked function expression) to only allocate one
     * vector or euler and not re-create on every tick to save memory.
     */
    tick: (function () {
      var position = new THREE.Vector3();
      var quaternion = new THREE.Quaternion();
  
      return function () {
        this.el.object3D.getWorldPosition(position);
        this.el.object3D.getWorldQuaternion(quaternion);
        // position and rotation now contain vector and quaternion in world space.
      };
    })()
  });