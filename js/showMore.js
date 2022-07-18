let readMore_btn = document.getElementById('readMore_btn');//botón
let hideText = document.getElementById('hideText');//texto
let youtubeMAM= document.getElementById('youtubeMAM');
let ecomerce= document.getElementById('leerMasECom');//botón
let imgHide= document.getElementById('imgHide');
let botonMAM= document.getElementById('abrirMAM');//imagen

readMore_btn.addEventListener('click', toggleText);
ecomerce.addEventListener('click', mostrarImagen);

function mostrarImagen(){
if(imgHide.style.display === 'none'){
  imgHide.style.display = 'inline';
  ecomerce.innerHTML='Leer menos';
}else{
  imgHide.style.display='none';
  ecomerce.innerHTML='Saber Más';
}
}
function toggleText() {
  hideText.classList.toggle('showText');//texto
  console.log("estás aquí");
  youtubeMAM.style.display="inline";
  console.log("u hir");
  if(hideText.classList.contains('showText')) {

    readMore_btn.innerHTML = 'Leer menos'
  }
  else {
    readMore_btn.innerHTML = 'Saber más'
    youtubeMAM.style.display="none";
  }
}