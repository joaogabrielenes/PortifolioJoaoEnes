ScrollReveal().reveal('.headline');
ScrollReveal().reveal('.tagline', { delay: 5000 });
ScrollReveal().reveal('.punchline', { delay: 5000 });

$('.carousel').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: true,
  });
