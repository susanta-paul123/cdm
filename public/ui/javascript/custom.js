(function ($) {
    'use strict';

    AOS.init({
        once: true,
    });

    var a = 0;
    $(window).scroll(function () {
        var sticky = $('header'),
            scroll = $(window).scrollTop();

        if (scroll >= 200) {
            sticky.addClass('sticky-nav');
            $("body").addClass("scrollingheader");
        }else {
            sticky.removeClass('sticky-nav');
            $("body").removeClass("scrollingheader");
        }
   

    });

    jQuery(document).ready(function ($) {

        $('.home-slider .owl-carousel').owlCarousel({
            items: 1,
            loop: true,
            // autoplay: true,
            animateIn: 'animate__fadeIn',
            animateOut: 'animate__fadeOut',
            autoplayTimeout: 6000,
            autoplaySpeed: 1500,
            smartSpeed: 1500,
            responsiveClass: true,
            dots: false,
            autoplayHoverPause: true,
            nav: true,
            items: 1,
        });

        //

        $('.our-client .owl-carousel').owlCarousel({
            loop:true,
            margin:10,
            nav:true,
            dots:false,
            autoplay:false,
            responsive:{
                0:{
                    items:1
                }
            }
        })

        

        $('.explore-range .owl-carousel').owlCarousel({
            loop:true,
            margin:0,
            nav:true,
            autoplay:false,
            center:true,
            dots:false,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                1000:{
                    items:3
                }
            }
        })

        $('.explore-range .owl-carousel').owlCarousel({
            loop:true,
            margin:0,
            nav:true,
            autoplay:false,
            center:true,
            dots:false,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                1000:{
                    items:3
                }
            }
        })


        //
        $('.mot .owl-carousel').owlCarousel({
            loop:true,
            nav:true,
            autoplay:false,
            center:true,
            dots:false,
            responsive:{
                0:{
                    items:1
                },
                1024:{
                    items:1,
                    margin:0,
                },
                1366:{
                    items:1,
                    margin:-40,
                }
            }
        })

        //
        

        $('.timeline-carousel .owl-carousel').owlCarousel({
            loop:true,
            nav:true,
            autoplay:false,
            center:true,
            dots:false,
            responsive:{
                0:{
                    items:1
                },
                1024:{
                    items:3
                },
                1366:{
                    items:3,
                    margin:0,
                }
            }
        })

        //time line active when scroll
        $(window).scroll(function () {
            $('.timeline .column .row').each(function() {
                  var distance = $(this).offset().top - 350;
                  if ($(window).scrollTop() >= distance) {
                    $(this).addClass('active');
                  } else {
                    $(this).removeClass('active');
                  }
                });
        
        });



    });

    $(window).resize(function(){
        if($(window).width() <= 991){
            $( ".header-right" ).appendTo( ".navbar-collapse" );


            $('.map-address-mobile .address-box').hide();

            $('.pin').click(function(){
                $(this).addClass('active');
                $(this).siblings('.pin').removeClass('active')
                var dataadd = $(this).attr('data-add');
                $('.map-address-mobile .address-box').hide();
                $("#" + dataadd).toggle();
            });

        }else{
            $( ".header-right" ).prependTo( ".header-right-wrap" );

            // $( ".pin" ).unbind();
            $('.map-address-mobile .address-box').hide();
            
        }
     })


    //
        
    $(".mega-menu").parent('.dropdown').css({'position':'static'}) 
    $(window).resize(function(){
        if ($(window).width() >= 980){	 

        
        $(".navbar .dropdown-toggle").hover(function () {
            $(this).parent().toggleClass("show");
            $(this).parent().find(".mega-menu").toggleClass("show"); 
        });

        
        $( ".navbar .mega-menu" ).mouseleave(function() {
            $(this).removeClass("show");  
        });

        $('header .navbar .mega-menu').show()
    
         
        }	
        else{
            $('header .navbar .mega-menu').hide();
            
        }
    }); 
    






//

if($(window).width() <= 991){
    $( ".header-right" ).appendTo( ".navbar-collapse" );
    $('.mobile-toggle').click(function(){
        $('.mega-menu').slideToggle();
    })

    $('.map-address-mobile .address-box').hide();

    $('.pin').click(function(){
        $(this).addClass('active');
        $(this).siblings('.pin').removeClass('active')
        var dataadd = $(this).attr('data-add');
        $('.map-address-mobile .address-box').hide();
        $("#" + dataadd).toggle();
        console.log(dataadd)
    });
}else{
    $('.pin').click(function(){
        $(this).siblings('.pin').children('.address-box').hide();
        $(this).siblings('.pin').removeClass('active')
        $(this).toggleClass('active')
        $(this).children('.address-box').toggle();
    });
}




//map pin

$('.slider-content').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    arrows: true,
    fade: false,
    centerPadding: '0px',
    // infinite: false,
    speed: 1000,
    asNavFor: '.slider-thumb',
    arrows: true,
    prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
    nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
    responsive: [
       
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '0px',
            slidesToShow: 1
          }
        }
      ]
});
$('.slider-thumb').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    asNavFor: '.slider-content',
    dots: false,
    centerMode: false,
    focusOnSelect: true
});

// 
/* gallery slick slider css */
// $('.slider-gallery-content').slick({
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: true,
//     fade: false,
//         infinite: false,
//         speed: 1000,
//         asNavFor: '.slider-gallery-thumb',
//         arrows: true,
//         prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button"><i class="fa fa-arrow-left" aria-hidden="true"></i></button>',
//         nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button"><i class="fa fa-arrow-right" aria-hidden="true"></i></button>',
//     });
//         $('.slider-gallery-thumb').slick({
//         slidesToShow: 3,
//         slidesToScroll: 3,
//         asNavFor: '.slider-gallery-content',
//         dots: false,
//         centerMode: false,
//         focusOnSelect: true
//     });




}(jQuery));

