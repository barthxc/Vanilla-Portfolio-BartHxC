/* last menu
const navigation = document.querySelector('nav')
document.querySelector('.menu').onclick = function (){
    this.classList.toggle('active');
    navigation.classList.toggle('active');
}
*/

/*

const toggleBtn = document.querySelector('.toggle_btn')
const dropDownMenu = document.querySelector('.dropdown_menu')



const dropDownMenu = document.getElementById(dropdown_menu);
const toggleBtn = document.getElementById(toggle_btn);


toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open');
    const isOpen = dropDownMenu.classList.contains('open');

    toggleBtn.classList.toggle('open');
}


toggleBtn.addEventListener('click', () => {
    toggleBtn.classList.toggle('open')
    dropDownMenu.classList.toggle('open');

})

*/

document.addEventListener("DOMContentLoaded", function() {
    var boton = document.querySelector(".toggle_btn");
    var dropDownMenu = document.querySelector(".dropdown_menu");
      boton.addEventListener("click", function () {
        dropDownMenu.classList.toggle("open");
        boton.classList.toggle("open");
      });

  
      let links=document.querySelectorAll(".dropdown_menu a");
      for(var x=0; x<links.length;x++){
        links[x].onclick = function(){
          boton.classList.toggle("open");
          dropDownMenu.classList.toggle("open");
        }
      }

    });
      
   
