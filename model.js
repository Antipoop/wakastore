const ds = document.getElementById('2ds');
const container = document.getElementById('wds');

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 20;
camera.position.y = 0;

let widthd = window.innerWidth;
let height = window.innerHeight;
let aspectRatio = widthd / height;

const renderer = new THREE.WebGLRenderer({alpha: true, antialias: true});
renderer.setClearColor(0x000000, 0);
console.log(window.innerWidth, window.innerHeight);
renderer.setSize(window.innerWidth, window.innerHeight);

window.addEventListener('resize', () => {
    width = window.innerWidth;
    height = window.innerHeight;

    camera.aspect = width / height;
    camera.updateProjectionMatrix();

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.render(scene, camera)
});

renderer.domElement.setAttribute("id", "waka");
const res = container;
res.insertBefore(renderer.domElement, ds);
const aLight = new THREE.AmbientLight(0x404040, 1.8);

scene.add(aLight);
const pLight = new THREE.PointLight(0xFFFFFF, 0.5);
pLight.position.set(-3, 0.5, 5);
scene.add(pLight);
const pLight2 = new THREE.PointLight(0xFFFFFF, 1.3);
pLight2.position.set(4, 4, -3);
scene.add(pLight2);

let loader = new THREE.GLTFLoader();
let obj = null;

loader.load('/3d/waka.gltf', function(gLtf) {
    obj = gLtf;
    obj.scene.scale.set(1.3, 1.3, 1.3);
    scene.add(obj.scene);
});

function animate(de) {
    requestAnimationFrame(animate);
    if(obj) {
        obj.scene.rotation.y += 0.01;
    }
    renderer.render(scene, camera);
};

animate()

const cursor = {
    x: 0,
}

function animate2(de) {
    requestAnimationFrame(animate2);
    if(obj) {
        obj.scene.rotation.y = cursor.x * 10;
    }
    renderer.render(scene, camera);
};

const red = (event) => {
   cursor.x = (event.clientX / widthd - 0.5)
        obj.scene.rotation.y = cursor.x * 10
        console.log(cursor.x)
        renderer.render(scene, camera)
}

const red2 = (event) => {
    cursor.x = (event.targetTouches[0].clientX / widthd - 0.5)
         obj.scene.rotation.y = cursor.x * 10
         renderer.render(scene, camera)
 }

window.addEventListener('mousedown', (event) => {
    window.addEventListener('mousemove', red)
})
window.addEventListener('mouseup', (event) => {
    window.removeEventListener('mousemove', red)
    
})
window.addEventListener('touchstart', (event) => {
    console.log()
    window.addEventListener('touchmove', red2)
})
window.addEventListener('touchend', (event) => { 
    window.removeEventListener('touchmove', (e) => {   
    } )
})








// const fs = () => {
// window.addEventListener('mousedown', (event) => {
//     window.addEventListener('mousemove', (event) => {    
//         red()
//     }); 
// })
// window.addEventListener('mouseup', (event) => {
//     console.log('grgrgt')
//     window.removeEventListener('mousedown', red, false)
// })
// }
// fs()


// const tick = () => {

     
//             obj.scene.rotation.y = cursor.x * 10
    
//     renderer.render(scene, camera)
//     requestAnimationFrame(tick)
// }

// window.addEventListener('mousedown', (event) => {
// window.addEventListener('mousemove', (event) => {    
//     cursor.x = (event.clientX / widthd - 0.5)
//     // tick();
//     obj.scene.rotation.y = cursor.x * 10
    
//     renderer.render(scene, camera)
// });
// window.addEventListener('mouseup', (event) => {
//     // animate()
//     cursor.x = 0
//     obj.scene.rotation.y = 0
//     renderer.render(scene, camera)
// })
// })
// animate();



// const frf = () => {
//     let per = 0
// window.addEventListener('mousedown', () => {
//     per = 1;
//     if (per === 1) {
//     window.addEventListener('mousemove', (event) => {
//     cursor.x = (event.clientX / widthd - 0.5)
//     obj.scene.rotation.y = cursor.x * 10
//     renderer.render(scene, camera)
//     })
//     } else {
//     window.addEventListener('mouseup', () => {
//     per = 0
//     console.log(per)
// })
//     }
//     console.log(per)
// })
// }
// frf()



// const canvas = document.querySelector('body')
// let ispressed = false;
// canvas.addEventListener('mousedown', function(){
//     ispressed = true
//   })
// canvas.addEventListener('mouseup', function(){
//     ispressed = false
//   })

//   if(ispressed) {
//     tick()
//   }