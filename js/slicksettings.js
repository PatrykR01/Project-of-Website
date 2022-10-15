$('.team-carousel').slick(
    
    {
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1500, 
        mobileFirst: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 0,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2
                }
            }
        ]
    }
);