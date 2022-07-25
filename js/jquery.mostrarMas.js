
$('#abrirMAM').on('click', function () {
    console.log("estás aquí");  
    $('.nav-tabs a[href="#tab-6"]').tab('show');
    document.getElementById("features").scrollIntoView();
  })
  
$('#abrirECom').on('click', function () {
    console.log("estás aquí");  
    $('.nav-tabs a[href="#tab-2"]').tab('show');
    document.getElementById("features").scrollIntoView();
  })
$('#abrirSAP').on('click', function () {
    console.log("estás aquí");  
    $('.nav-tabs a[href="#tab-1"]').tab('show');
    document.getElementById("features").scrollIntoView();
  })
  $(document).ready(function() {
    $(".").click(function() {
      $(this).parent().prev('ul.more').toggleClass("main");
      if ($(this).parent().prev('ul.more').hasClass('main')) {
        $(this).text('Leer Menos');
      } else {
        $(this).text('Leer Más');
      }
    });
  });