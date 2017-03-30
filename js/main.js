$(document).ready(function () {

//mmenu
    $('#my-menu').mmenu({
    // options
    }, {

    // configuration
        offCanvas: {
            pageSelector: '#my-wrapper'
        }
    });

    var mainMenu = $('#my-menu').data('mmenu');

    $('#menu-button').click(function () {
        mainMenu.open();
    });
/*
    var contact = $('#contact').data('mmenu');

    $('#contact').click(function () {
        contact.open();
    });
*/

//scrollup - default elements listed - I may change them
    $.scrollUp({
        scrollName: 'scrollUp', // Element ID
        topDistance: '300', // Distance from top before showing element (px)
        topSpeed: 300, // Speed back to top (ms)
        animation: 'fade', // Fade, slide, none
        animationInSpeed: 200, // Animation in speed (ms)
        animationOutSpeed: 200, // Animation out speed (ms)
        scrollText: 'Scroll to top', // Text for element
        activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
    });

//my custom code to change my headshot to my logo on a click; does not work, yet
/*
    $('#imageOriginal').click(function () {
        $('img', '#imageOriginal').attr('src', 'img/logosmall.png');
    });

//my custom code to add text after clicking on the headshot; every click gets a new <p>
    $('#imageOriginal').click(function () {
        $('#imageOriginal').after('<p>Producer. Writer. Movement Educator.</p>');
    });
});
*/
//my custom code to add text after clicking on the headshot; adding one solves it
    $('#imageOriginal').one('click', function () {
        $('#imageOriginal').after('<p>Producer/Writer</p>');
    });

    //Jquery flip
    $('#card').flip();

    //owlcarousel
    $('.owl-carousel').owlCarousel();


    //slick image carousel
    $('.slick-images').slick();

    //slippry image carousel
    $('#slippryImages').slippry();

    //backstretch image slideshow
    $('.backstretch-show').backstretch([
        {width: 500, url: 'img/clear.png'},
        {width: 500, url: 'img/strong.png'},
        {width: 500, url: 'img/vibrant.png'}
    ], {duration: 4000, fade: 750});

});
