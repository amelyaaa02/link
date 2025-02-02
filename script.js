
function showSlide(slideNumber) {
    var slides = document.querySelectorAll('.slide');
    slides.forEach(slide => {
        slide.style.display = 'none';
    });
    var slideToShow = document.getElementById('slide' + slideNumber);
    slideToShow.style.display = 'block';
}

function handleYes() {
    document.getElementById('slide1').style.display = 'none';
    showSlide(2);
}

function handleNo() {
    document.getElementById('errorMessage1').style.display = 'block';
}

function handleYes2() {
    document.getElementById('slide2').style.display = 'none';
    showSlide(3);
}

function handleNo2() {
    document.getElementById('errorMessage2').style.display = 'block';
}

function handleYes3() {
    document.getElementById('slide3').style.display = 'none';
    showSlide(4);
}

function handleNo3() {
    document.getElementById('errorMessage3').style.display = 'block';
}

function handleYes4() {
    document.getElementById('slide4').style.display = 'none';
    showSlide(5);
}

function handleNo4() {
    document.getElementById('errorMessage4').style.display = 'block';
}

function handleNext() {
    document.getElementById('slide5').style.display = 'none';
    showSlide(6);
}

function handleYes5() {
    document.getElementById('slide6').style.display = 'none';
    showSlide(7);
}

function handleNo5() {
    document.getElementById('errorMessage5').style.display = 'block';
}

function handleNext7() {
    document.getElementById('slide7').style.display = 'none';
    showSlide(8);
}

function openGift() {
    document.getElementById('openBtn').style.display = 'none';
    document.getElementById('flowerContainer').style.display = 'block';
}
