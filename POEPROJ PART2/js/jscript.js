
document.addEventListener('DOMContentLoaded', function () {

   
    var slides = document.querySelectorAll('.hero-slide');
    var dots = document.querySelectorAll('.hero-dot');
    var total = slides.length;
    var current = 0;
    var timer;

    function showSlide(index) {
        if (index < 0) index = total - 1;
        if (index >= total) index = 0;
        current = index;

        slides.forEach(function (slide, i) {
            slide.classList.toggle('active', i === current);
        });
        dots.forEach(function (dot, i) {
            dot.classList.toggle('active', i === current);
        });
    }

    function nextSlide() {
        showSlide(current + 1);
    }

    function startAuto() {
        timer = setInterval(nextSlide, 4500); 
    }

    function stopAuto() {
        clearInterval(timer);
    }

    if (slides.length > 0) {
        dots.forEach(function (dot) {
            dot.addEventListener('click', function () {
                stopAuto();
                showSlide(parseInt(dot.getAttribute('data-index'), 10));
                startAuto();
            });
        });
        startAuto();
    }

   
});
