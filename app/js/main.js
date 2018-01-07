$(document).ready(function() {

    var $wnd = $(window);
    var $top = $(".page-top");
    var $html = $("html, body");
    var $header = $(".section-header");
    var $headerMenu = $(".header-menu");
    var $loader = $(".preloader");

    $wnd.on('load', function() {
        $loader.delay(0).fadeOut('slow');
    });
    
    $(".carousel-results").owlCarousel({
        items: 3,
        nav: true,
        loop: true,
        smartSpeed: 500,
        autoplay: true,
        autoplayTimeout: 2000,
        navContainerClass: 'owl-nav border',
        responsive: {
            0: { items: 1 },
            480: { items: 2, margin: 30 },
            768: { items: 3, margin: 130 },
            992: { margin: 180 }          
        },
        navText: ['<i class="arrow-left">', '<i class="arrow-right">'],        
        onChanged: function(e) {
            setTimeout(function() {
                $(".carousel-results .owl-item").removeClass("scale");
                var item = $(".carousel-results .owl-item.active")[1];
                if(item) {
                    $(item).addClass("scale");
                }                    
            }, 100);
        }
    });

    $(".carousel-reviews").owlCarousel({
        items: 1,
        nav: true,
        dots: true,
        loop: true,
        smartSpeed: 500,
        margin: 30,
        autoplay: true,
        autoplayTimeout: 2000,
        navText: ['<i class="arrow-left">', '<i class="arrow-right">']
    });

    $(".carousel-certificate-mini").owlCarousel({
        nav: true,
        dots: true,
        loop: true,
        smartSpeed: 500,
        margin: 30,
        autoplay: false,
        autoWidth: true,
        // autoHeight: true,
        autoplayTimeout: 2000,
        navText: ['<i class="arrow-left">', '<i class="arrow-right">'],
        responsive: {
            0: { items: 1 },
            480: { items: 2 },
            768: { items: 3 },
            992: { items: 4 },
            1200: { items: 5 }          
        },
        onChanged: function(event) {
            var owl = $(event.target);
            var items = owl.find(".owl-item");
            
            // setTimeout(function() {
                owl.find('.owl-stage-outer').height(items.height()+2);                
            // }, 100);

            items.click(function(e) {
                e.preventDefault();
                var carousel = owl.data('owl.carousel');
                var index = carousel.relative($(this).index());

                var id = owl.data('id');
                $("#" + id).fadeIn(500, function() {
                    var carousel2 = $(this).find('.owl-carousel').data('owl.carousel');
                    carousel2.to(index, 500);
                });
            });        
        }
    });

    $(".carousel-certificate").owlCarousel({
        items: 1,
        nav: true,
        dots: true,
        loop: true,
        smartSpeed: 500,
        margin: 30,
        // autoWidth: true,
        // autoHeight: true,
        autoplayTimeout: 2000,
        responsive: {
            0: { autoHeight: true },
            768: { autoHeight: false },
        },
        navText: ['<i class="arrow-left">', '<i class="arrow-right">'],
        onChanged: function(event) {
            // var owl = $(event.target);
            // var items = owl.find(".owl-item");

            // owl.height(items.height());
        }
    });

    // $(".carousel-certificate img").click(function() {
    //     var el = $(this).closest('.carousel-certificate');
    //     el.fadeOut(500);
    // });

    $(".modal").click(function() {
        $(this).fadeOut(500);        
    });

    $(".modal-content").click(function(e) {
        e.stopPropagation();
    });

    $(".modal-close").click(function() {
        $(this).closest('.modal').fadeOut(500);
    });

    $(".thanks-close").click(function() {
        $(".thanks").fadeOut(500);
        $form.find("input[type=text], textarea").val("");
        $formQuestion.find("input[type=text], textarea").val("");
    });

    var $form = $(".form");

    $form.submit(function(e) {
        openThanks();
        $(".modal").hide();
        e.preventDefault();
    });

    // $(".phone").mask("+7 (999) 999 99 99", {
    //     completed: function() {
    //         console.log(this.val());
    //     }
    // });

    var openThanks = function() {
        $(".thanks").css("display", "flex").hide().fadeIn(500);
    }

    $(".modal-open").click(function() {
        var id = $(this).data("id");
        $("#" + id).fadeIn(500);
    });

    $wnd.scroll(function() { onscroll(); });

    var onscroll = function() {
        if($wnd.scrollTop() > $(".section-main").height()) {
            $top.addClass('active');
            $header.removeClass('ontop');
        } else {
            $top.removeClass('active');
            $header.addClass('ontop');
        }

        var scrollPos = $wnd.scrollTop() + 50;

        $headerMenu.find("a").each(function() {
            var link = $(this);
            var id = link.attr('href');
            var section = $(id);
            var sectionTop = section.offset().top;

            if(sectionTop <= scrollPos && (sectionTop + section.height()) >= scrollPos) {
                link.addClass('active');
            } else {
                link.removeClass('active');
            }
        });
    }

    onscroll();

    $top.click(function() {
        $html.stop().animate({ scrollTop: 0 }, 'slow', 'swing');
    });

    $(".doctor .more").click(function() {
        $(this).prev(".doctor-text").toggleClass('short');
    })

    $(".hamburger").click(function() {
        $this = $(this);
        $this.toggleClass("is-active");
        if($this.hasClass("is-active")) {
            $headerMenu.slideDown('700');
        } else {
            $headerMenu.slideUp('700');
        }
        return false;
    });    

    $(".header-menu a").click(function(e) {
        e.preventDefault();
        var $href = $(this).attr('href');
        if($href.length > 0) {
            var top = $href.length == 1 ? 0 : $($href).offset().top;
            $html.stop().animate({ scrollTop: top }, "slow", "swing");
        }
    });
});
    