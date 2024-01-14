document.addEventListener('DOMContentLoaded', function() {
   
    var navbarBurger = document.querySelector('.navbar-burger');
  
 
    var target = document.getElementById(navbarBurger.dataset.target);
  

    navbarBurger.addEventListener('click', function() {
     
        navbarBurger.classList.toggle('is-active');
        target.classList.toggle('is-active');
    });
});

function downloadFile() {
    try {
        var fileUrl = '../public/document/Hoja_de_vida.docx';
        if (fileUrl == null) {
            console.log("No hay URL del archivo");
            return;
        }
        var fileName = 'KarenOrtega_Hoja_vida.docx';

        var a = document.createElement('a');
        a.href = fileUrl;
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    } catch (error) {
        console.error("Error al descargar el archivo:", error);
    }
}

  function irhome(){
    window.location.href = '#home';
}
  function irsobre(){
    window.location.href = '#sobre';
}
  function irproyectos(){
    window.location.href = '#proyectos';
}

  function irContacto(){
    window.location.href = '#contacto';
}

  