let hideText = document.getElementById('hideText');//texto

let imgHide= document.getElementById('imgHide');
let botonMAM= document.getElementById('abrirMAM');//imagen

let sap = document.getElementById('sapHide');
let sapMas= document.getElementById('sapMore');


//divs
let divMam = document.getElementById('divMam');
let divSrm = document.getElementById('divSrm');
let divEcom = document.getElementById('divEcom');
let divSap = document.getElementById('divSap');
//botones
let botonSrm = document.getElementById('saberSrm');
let readMore_btn = document.getElementById('readMore_btn');
let botonEcom= document.getElementById('leerMasECom');
let botonSap = document.getElementById('botonSap');
//imagenes
let imgEcom = document.getElementById('porQue');
let youtubeMAM= document.getElementById('youtubeMAM');
let sapImg= document.getElementById('imgSAP');









function handleClickMam() {
  console.log('estás aquí1');
  if (divMam.style.display === "none" || divMam.style.display === "") {
    divMam.style.display = 'inline';
    youtubeMAM.style.display = 'inline';

    readMore_btn.textContent = 'Leer Menos';
  } else {
    divMam.style.display = 'none';
    youtubeMAM.style.display = 'none';
    readMore_btn.textContent = 'Saber Más';
  }
}
function handleClickSrm() {
  if (divSrm.style.display === "none" || divSrm.style.display === "") {
    divSrm.style.display = 'inline';

    botonSrm.textContent = 'Leer Menos';
  } else {
    divSrm.style.display = 'none';

    botonSrm.textContent = 'Saber Más';
  }
}
function handleClickEcom() {
  if (divEcom.style.display === "none" || divEcom.style.display === "") {
    divEcom.style.display = 'inline';
    imgEcom.style.display = 'inline';
    botonEcom.textContent = 'Leer Menos';
  } else {
    divEcom.style.display = 'none';
    imgEcom.style.display = 'none';
    botonEcom.textContent = 'Saber Más';
  }
}
function handleClickSap() {
  if (divSap.style.display === "none" || divSap.style.display === "") {
    divSap.style.display = 'inline';
    sapImg.style.display = 'inline';
    botonSap.textContent = 'Leer Menos';
  } else {
    divSap.style.display = 'none';
    sapImg.style.display = 'none';
    botonSap.textContent = 'Saber Más';
  }
}