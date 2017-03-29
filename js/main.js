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
});
