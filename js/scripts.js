
$(document).ready(function(){
    $(window).scroll( function() {   
        var sticky = $('#home_header'),
        scroll = $(window).scrollTop();
        if (scroll >= 200) {
            sticky.removeClass('home-header');
            sticky.addClass('home-header2');
        } else {
            sticky.addClass('home-header');
            sticky.removeClass('home-header2');
        }
    });
});
