$( document ).ready(function() {

    var opdr,
    intro

    opdr = $('.opdr');
    intro = $('.intro');


    $(window).bind('scroll', function () {
        if ($(window).scrollTop() > 500) {
            $('.navbar').css("background-color", "#FF5722");
        }else {
            $('.navbar').css("background-color", "");
        }
    });

    opdr.onScreen({
        container: window,
        direction: 'vertical',
        doIn: function() {
            // Do something to the matched elements as they come in
            $('.opdr').css({
  '-webkit-transform' : 'scale(1)',
  '-moz-transform'    : 'scale(1)',
  '-ms-transform'     : 'scale(1)',
  '-o-transform'      : 'scale(1)',
  'transform'         : 'scale(1)'
});
            console.log("het werkt");
        },
        doOut: function() {
            // Do something to the matched elements as they get off scren
            $('.opdr').css({
  '-webkit-transform' : 'scale(0)',
  '-moz-transform'    : 'scale(0)',
  '-ms-transform'     : 'scale(0)',
  '-o-transform'      : 'scale(0)',
  'transform'         : 'scale(0)'
});
        },
        tolerance: 0,
        throttle: 50,
        toggleClass: 'onScreen',
        lazyAttr: null,
        lazyPlaceholder: 'someImage.jpg',
        debug: false
    });




    $(function() {
        $('a[href*=#][class*="smooth"]:not([href=#])').click(function()  {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });






});
