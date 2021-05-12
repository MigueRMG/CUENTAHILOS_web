//NAVIGATION
var nav = document.getElementsByClassName("navigation__link");

for (var x = 0; x < nav.length; x++) nav[x].addEventListener("click", cerrarNav);

function cerrarNav() {
    var checkbox = document.getElementsByClassName("navigation__checkbox");
    checkbox[0].checked = false;
}

//CARDS
var slideIndex = [0, 0, 0, 0];
var slideId = ["card__slide--0", "card__slide--1", "card__slide--2", "card__slide--3"];
showSlides();

function showSlides() {
    for (var i = 0; i < slideId.length; i++) {
        var slides = document.getElementsByClassName(slideId[i]);

        for (var j = 0; j < slides.length; j++) {
            slides[j].style.display = "none";
        }

        slideIndex[i]++;

        if (slideIndex[i] > slides.length) {
            slideIndex[i] = 1;
        }

        slides[slideIndex[i] - 1].style.display = "block";
    }
    setTimeout(showSlides, 4000);
}

//CHECBOX VALIDATION
