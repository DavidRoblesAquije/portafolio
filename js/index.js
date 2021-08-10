//get images
var headerImg1 = document.querySelector('#headerimg1');
var headerImg2 = document.querySelector('#headerimg2');
var headerImg3 = document.querySelector('#headerimg3');

setInterval(() => {
    if (headerImg1.classList.contains("active")) {
        //se ve la imagen 1
        headerImg1.classList.remove("active");
        headerImg2.classList.add("active");
    } else if (headerImg2.classList.contains("active")) {
        //se ve la imagen 2
        headerImg2.classList.remove("active");
        headerImg3.classList.add("active");
    } else {
        //se ve la imagen 3
        headerImg3.classList.remove("active");
        headerImg1.classList.add("active");
    }
}, 3500);

//menu responsive
var navbar = document.getElementsByClassName('responsive')[0];
var menu = document.getElementsByClassName('hamburguer')[0];
var navresp = $('.navresp');

menu.addEventListener("click", function () {
    document.body.classList.toggle('noScrool');
    navbar.classList.toggle('active');
});

$('.navresp').click(function () {
    document.body.classList.toggle('noScrool');
    navbar.classList.toggle('active');
})

//current year
$(document).ready(function () {
    var now = new Date();
    var year = now.getFullYear();
    $("#fecha").text(year);
});