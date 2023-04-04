// Selecciona las imágenes utilizando su atributo src

const section11 = document.querySelector('img[src="assets/section1/foto-1.png"]');
const section12 = document.querySelector('img[src="assets/section1/foto-3.png"]');
const section13 = document.querySelector('img[src="assets/section1/foto-2.png"]');
const section2 = document.querySelector('img[src="assets/section2/SEP1.png"]');
const section31 = document.querySelector('img[src="assets/section3/foto-1.png"]');
const section32 = document.querySelector('img[src="assets/section3/foto-2.png"]');
const section33 = document.querySelector('img[src="assets/section3/CUEVA.png"]');
const section4 = document.querySelector('img[src="assets/section4/SEP2.png"]');





function changeImage() {
 width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
if (width >= 992) { // Para  grandes
  section11.src = "assets/section1/foto-1.png";
  section12.src = "assets/section1/foto-3.png";
  section13.src = "assets/section1/foto-2.png";
  section2.src = "assets/section2/SEP1.png";
  section31.src = "assets/section3/foto-1.png";
  section32.src = "assets/section3/foto-2.png";
  section33.src = "assets/section3/CUEVA.png";
  section4.src = "assets/section4/SEP2.png";

} else if (width >= 768 && width < 992) { // Para pantallas medianas
    section11.src = "assets/section1/768/foto-1.png";
    section12.src = "assets/section1/768/foto-3.png";
    section13.src = "assets/section1/768/foto-2.png";
    section2.src = "assets/section2/768/SEP1.png";
    section31.src = "assets/section3/768/foto-1.png";
    section32.src = "assets/section3/768/foto-2.png";
    section33.src = "assets/section3/768/CUEVA.png";
    section4.src = "assets/section4/768/SEP2.png";

}else if (width < 576) { // Para pantallas pequeñas
    section11.src = "assets/section1/576/foto-1.png";
    section12.src = "assets/section1/576/foto-3.png";
    section13.src = "assets/section1/576/foto-2.png";
    section2.src = "assets/section2/576/SEP1.png";
    section31.src = "assets/section3/576/foto-1.png";
    section32.src = "assets/section3/576/foto-2.png";
    section33.src = "assets/section3/576/CUEVA.png";
    section4.src = "assets/section4/576/SEP2.png";
}
}

changeImage();

window.addEventListener("resize", changeImage);