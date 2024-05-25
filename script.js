// BACK TO TOP ICON Open
document.addEventListener('scroll', function() {
  const topButton = document.getElementById('top');
  if (window.scrollY > 300) { // Se puede cambiar 300 al número de píxeles en el que se quiera que aparezca el icono
      topButton.style.display = 'inline-flex';
  } else {
      topButton.style.display = 'none';
  }
});
// BACK TO TOP ICON Close

// COMENTARIOS CLIENTES Open

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// COMENTARIOS CLIENTES Fin







