
$('#abrirMAM').on('click', function () {
    console.log("estás aquí");  
    $('.nav-tabs a[href="#tab-6"]').tab('show');
    document.getElementById("tab-6").scrollIntoView();
  })
  
$('#abrirECom').on('click', function () {
    console.log("estás aquí");  
    $('.nav-tabs a[href="#tab-2"]').tab('show');
    document.getElementById("tab-2").scrollIntoView();
  })