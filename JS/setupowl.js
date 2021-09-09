$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})