
 let slideIndex = 1;
 showSlides(slideIndex);

function showSlides(n){
    let i;
    let slides = document.getElementsByClassName("image");
    let dots = document.getElementsByClassName("dot");

    for(i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }

    for(i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace("active", "");
    }

    if(n > slides.length){
        slideIndex = 1;
    }

    if(n < 1){
        slideIndex = slides.length;
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active ";
}

function plusSlides(n){
    showSlides(slideIndex += n);
}

function currentSlide(n){
    showSlides(slideIndex = n);
}