$(function() {

    $(".carousel-results").owlCarousel({
        items: 3,
        nav: true,
        loop: true,
        smartSpeed: 500,
        responsive: {
            0: { items: 1 },
            481: { items: 2, margin: 30 },
            769: { items: 3, margin: 130 },
            993: { margin: 180 }          
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
        navText: ['<i class="arrow-left">', '<i class="arrow-right">']
    });

    $(".modal").click(function() {
        $(this).fadeOut(500);        
    });

    $(".modal-close").click(function() {
        $(this).closest('.modal').fadeOut(500);
    });

    $(".section-services-gallery-item .more").click(function() {
        var id = $(this).data("id");

        $("#modal-service-" + id).fadeIn(500);
    });

    var $html = $("html, body");

    $(".header-menu a").click(function(e) {
        e.preventDefault();
        var $href = $(this).attr('href');
        if($href.length > 0) {
            var top = $href.length == 1 ? 0 : $($href).offset().top;
            $html.stop().animate({ scrollTop: top }, "slow", "swing");
        }
    });

});
    