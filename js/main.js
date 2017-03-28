$(document).ready(function () {

    $('#my-menu').mmenu({
    // options
    }, {
    // configuration
        offCanvas: {
            pageSelector: '#my-wrapper'
        }
    });

    var API = $('#my-menu').data('mmenu');

    $('#menu-button').click(function () {
        API.open();
    });

});
