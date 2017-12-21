$(function() {

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
    // var $formQuestion = $(".form-question");
    // var $modalQuestion = $("#modal-question");

    $form.submit(function(e) {
        openThanks();
        $(".modal").hide();
        e.preventDefault();
    });

    // $formQuestion.submit(function(e) {
    //     e.preventDefault();
    //     $modalQuestion.fadeIn(500);
    //     $modalQuestion.find(".phone").val($formQuestion.find(".phone").val());
    // });

    // $(".phone").mask("+7 (999) 999 99 99");

    var openThanks = function() {
        $(".thanks").css("display", "flex").hide().fadeIn(500);
    }

    $(".modal-open").click(function() {
        var id = $(this).data("id");
        $("#" + id).fadeIn(500);
    });

    var $wnd = $(window);
    var $top = $(".page-top");
    var $html = $("html, body");
    var $header = $(".section-header");
    var $headerMenu = $(".header-menu");
    var $loader = $(".preloader");

    $wnd.scroll(function() { onscroll(); });

    var onscroll = function() {
        if($wnd.scrollTop() > $wnd.height()) {
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

    $wnd.on('load', function() {
        $loader.delay(0).fadeOut('slow');
    });

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
    