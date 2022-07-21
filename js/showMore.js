let readMore_btn = document.getElementById('readMore_btn');//botón
let hideText = document.getElementById('hideText');//texto
let youtubeMAM= document.getElementById('youtubeMAM');
let ecomerce= document.getElementById('leerMasECom');//botón
let imgHide= document.getElementById('imgHide');
let botonMAM= document.getElementById('abrirMAM');//imagen
let xq = document.getElementById('xqECom');
let sap = document.getElementById('sapHide');
let sapMas= document.getElementById('sapMore');
let sapImg= document.getElementById('imgSAP');


sapMas.addEventListener('click',mostrarImgSAP);
readMore_btn.addEventListener('click', toggleText);
ecomerce.addEventListener('click', mostrarImagen);




function mostrarImgSAP(){
  sap.classList.toggle('showText');//texto
  console.log("estás aquí");
  sapImg.style.display="inline";
  console.log("u hir");
  if(sap.classList.contains('showText')) {

    sapMas.innerHTML = 'Leer menos'
  }
  else {
    sapMas.innerHTML = 'Saber más'
    sapImg.style.display="none";
  }
}







function mostrarImagen(){
  imgHide.classList.toggle('showText');//texto
  console.log("estás aquí");
  xq.style.display="inline";
  console.log("u hir");
  if(imgHide.classList.contains('showText')) {

    ecomerce.innerHTML = 'Leer menos'
  }
  else {
    ecomerce.innerHTML = 'Saber más'
    xq.style.display="none";
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