const e=document.getElementById("2ds"),n=document.getElementById("wds"),t=new THREE.Scene,i=new THREE.PerspectiveCamera(30,window.innerWidth/window.innerHeight,.1,1e3);i.position.z=20,i.position.y=0;let o=window.innerWidth,d=window.innerHeight;const w=new THREE.WebGLRenderer({alpha:!0,antialias:!0});w.setClearColor(0,0),w.setSize(window.innerWidth,window.innerHeight),window.addEventListener("resize",()=>{width=window.innerWidth,d=window.innerHeight,i.aspect=width/d,i.updateProjectionMatrix(),w.setSize(width,d),w.setPixelRatio(Math.min(window.devicePixelRatio,2)),w.render(t,i)}),w.domElement.setAttribute("id","waka"),n.insertBefore(w.domElement,e);const s=new THREE.AmbientLight(4210752,1.8);t.add(s);const r=new THREE.PointLight(16777215,.5);r.position.set(-3,.5,5),t.add(r);const a=new THREE.PointLight(16777215,1.3);a.position.set(4,4,-3),t.add(a);let c=new THREE.GLTFLoader,E=null;c.load("/3d/waka.gltf",function(e){(E=e).scene.scale.set(1.3,1.3,1.3),t.add(E.scene)}),function e(n){requestAnimationFrame(e),E&&(E.scene.rotation.y+=.01),w.render(t,i)}();const l={x:0},m=e=>{l.x=e.clientX/o-.5,E.scene.rotation.y=10*l.x,console.log(l.x),w.render(t,i)},h=e=>{l.x=e.targetTouches[0].clientX/o-.5,E.scene.rotation.y=10*l.x,w.render(t,i)};window.addEventListener("mousedown",e=>{window.addEventListener("mousemove",m)}),window.addEventListener("mouseup",e=>{window.removeEventListener("mousemove",m)}),window.addEventListener("touchstart",e=>{console.log(),window.addEventListener("touchmove",h)}),window.addEventListener("touchend",e=>{window.removeEventListener("touchmove",e=>{})});
//# sourceMappingURL=index.0a92d5ff.js.map