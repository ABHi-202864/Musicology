// jquery
$(document).ready(function () {

    // Sticky Header
    $(window).scroll(function () {
        stickyHeader();
    });

    function stickyHeader() {
        if ($(this).scrollTop() > 1) {
            $('body').addClass("sticky");
        } else {
            $('body').removeClass("sticky");
        }
    }
    // Sticky Header close




    // owlCarousel
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 50,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            },
            1496: {
                items: 3
            },
        }
    })
    // owlCarousel close




    // wow js
    new WOW().init();
    // wow js close



    // counter js
    var a = 0;
    $(window).scroll(function () {

        var oTop = $('#counter').offset().top - window.innerHeight;
        if (a == 0 && $(window).scrollTop() > oTop) {
            $('.counter-value').each(function () {
                var $this = $(this),
                    countTo = $this.attr('data-count');
                $({
                    countNum: $this.text()
                }).animate({
                    countNum: countTo
                },

                    {

                        duration: 2000,
                        easing: 'swing',
                        step: function () {
                            $this.text(Math.floor(this.countNum));
                        },
                        complete: function () {
                            $this.text(this.countNum);
                            //alert('finished');
                        }

                    });
            });
            a = 1;
        }

    });
    // counter js close


    //   smooth scrolling
    $("a").on('click', function (event) {

        if (this.hash !== "") {
            event.preventDefault();

            // Store hash
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

            });
        } // End if
    });
    //   smooth scrolling close



    //in-view-js
    var $animation_elements = $('.animation-element');
    var $window = $(window);

    function check_if_in_view() {
        var window_height = $window.height();
        var window_top_position = $window.scrollTop();
        var window_bottom_position = (window_top_position + window_height);

        $.each($animation_elements, function () {
            var $element = $(this);
            var element_height = $element.outerHeight();
            var element_top_position = $element.offset().top;
            var element_bottom_position = (element_top_position + element_height);

            if ((element_bottom_position >= window_top_position) &&
                (element_top_position <= window_bottom_position)) {
                $element.addClass('in-view');
            } else {
                $element.removeClass('in-view');
            }
        });
    }

    $window.on('scroll resize', check_if_in_view);
    $window.trigger('scroll');
    //in-view-js close


})