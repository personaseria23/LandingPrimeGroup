let readMore_btn = document.getElementById('readMore_btn');
let hideText = document.getElementById('hideText');
let youtubeMAM= document.getElementById('youtubeMAM');

readMore_btn.addEventListener('click', toggleText);

function toggleText() {
  hideText.classList.toggle('showText');
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