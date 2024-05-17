window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("btn-topo").style.display = "block";
    } else {
        document.getElementById("btn-topo").style.display = "none";
    }
}

document.getElementById("btn-topo").addEventListener("click", function() {
    document.body.scrollTop = 0; // Para navegadores Safari
    document.documentElement.scrollTop = 0; // Para outros navegadores
});

ScrollReveal().reveal('.headline');
ScrollReveal().reveal('.tagline', { delay: 5000});
ScrollReveal().reveal('.punchline', { delay: 5000 });