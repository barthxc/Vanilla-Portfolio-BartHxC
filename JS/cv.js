document.addEventListener("DOMContentLoaded", function() {
    var btn = document.querySelector(".nav-bar");
    var menu = document.querySelector(".nav");
        btn.addEventListener("click", function () {
        btn.classList.toggle("open");
        menu.classList.toggle("open");
      });

      let links=document.querySelectorAll("nav a");
      for(var x=0; x<links.length;x++){
        links[x].onclick = function(){
            btn.classList.toggle("open");
            menu.classList.toggle("open");
        }
      }
  

    });
      