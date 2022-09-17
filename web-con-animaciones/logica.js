const modal = document.querySelector('.seccion--modal');
const bntCerrar = document.querySelector('#btn--cerrar');
const Boton1 = document.querySelector('#Btn1');
const Boton2 = document.querySelector('#Btn2');
const Boton3 = document.querySelector('#Btn3');

Boton1.addEventListener('click', cambiarEstado);
Boton2.addEventListener('click', cambiarEstado);
Boton3.addEventListener('click', cambiarEstado);

bntCerrar.addEventListener('click',() =>{
    modal.classList.remove('grid');
    modal.classList.add('none');});
    

function cambiarEstado(){
    modal.classList.remove('none');
    modal.classList.add('grid');}
