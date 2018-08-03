document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM');

    var nav = document.querySelector('#navFirst');
    var drop = document.querySelector('.dropNav');
    nav.addEventListener('mouseover', function (e) {
        drop.style.opacity = 1;
        nav.addEventListener('mouseleave', function (e) {
            drop.style.opacity = 0;

        })

    });

    var image = document.querySelector('.image1');
    var background = document.querySelector('.transparent');
    image.addEventListener('mouseover', function (e) {
        background.style.display = 'none';
        image.addEventListener('mouseleave', function (e) {
            background.style.display = 'inline-block';
        })

    });

    var image2 = document.querySelector('.image2');
    var background2 = document.querySelector('.transparent2');
    image2.addEventListener('mouseover', function (e) {
        background2.style.display = 'none';
        image2.addEventListener('mouseleave', function (e) {
            background2.style.display = 'inline-block';

        })

    });


    var next = document.querySelector('.buttonRight');
    var previous = document.querySelector('.buttonLeft');
    var firstSlide = document.querySelector('.armchair');


    next.addEventListener('click', function (e) {

        firstSlide.classList.toggle('armchairOrange');
        firstSlide.classList.toggle('armchair');


    });




    previous.addEventListener('click', function (e) {
        console.log(previous);

        firstSlide.classList.toggle('armchairOrange');
        firstSlide.classList.toggle('armchair');


    });


});

