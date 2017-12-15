$(function() {

    $(".carousel-results").owlCarousel({
        items: 3,
        nav: true,
        loop: true,
        margin: 180,
        smartSpeed: 500,
        responsive: {
            0: { items: 1 },
            481: { items: 2 },
            769: { items: 3 }            
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

});
    