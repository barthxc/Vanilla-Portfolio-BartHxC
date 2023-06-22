function desvanecerHexagon() {
    const hexagons = document.querySelectorAll("div"); // Selecciona todos los elementos div
       // Desplazar la ventana al inicio de la página
    window.scrollTo({ top: 0, behavior: "smooth" });
  
    setTimeout(function() {
      for (let i = 0; i < hexagons.length; i++) {
        if (hexagons[i].classList.contains("hexagon")) { // Verifica si el elemento tiene la clase "hexagon"
          hexagons[i].style.transition = "opacity 1s";
          hexagons[i].style.opacity = 0;
        }
      }
  
      setTimeout(function() {
        for (let i = 0; i < hexagons.length; i++) {
          if (hexagons[i].classList.contains("hexagon")) {
            hexagons[i].remove(); // Elimina el elemento "hexagon"
          }
        }
  
        const body = document.querySelector("body");
        body.classList.remove("no-scroll-y");
  
     
      }, 500); // Esperar 1.5 segundos adicionales después de la transición
    }, 1500);
  }
  
  window.onload = function() {
    desvanecerHexagon();
  };