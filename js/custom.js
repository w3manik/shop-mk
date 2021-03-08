$(function(){
    //-------bannerslide----//
    $('.bansite-slide').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows:true,
    fade:true,
    dots:true,
    prevArrow:'.left',
    nextArrow:'.right',
    autoplaySpeed: 2000,
    });


//-------bannerslide----//
    $('.klc').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    prevArrow:'.pe',
    nextArrow:'.ne',
    arrows:true,
    autoplaySpeed: 2000,
    });


//----logoslide----//
    $('.log-slide').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    arrows:true,
    nextArrow:'.se',
    prevArrow:'.sc',
    autoplaySpeed: 2000,
    });

    //--aosjs--//
    AOS.init();

    //---updn--//
    $('.updn').click(function(){
        $('html, body').animate({scrollTop:0},1000);
    });

    $(window).scroll(function(){
        var scrolling = $(this).scrollTop();
        if(scrolling > 400){
            $('.updn').fadeIn(800);
        }
        else{
            $('.updn').fadeOut(800);
        }
    });


    //--sitebar slide----//
     
    
$('.site-pcc').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows:false,
    autoplaySpeed: 2000,
  });

//venu//
$('.venobox').venobox(); 

//sitebar//
$('.click').on('click', function(){
    $('.sitebar').toggleClass('barhoy');
    $('.fa').toggleClass('fa-bars');
});

//fetudprodec//
$('.fet-slder').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows:true,
    prevArrow:'.mci',
    nextArrow:'.mcm',
    autoplaySpeed: 2000,
  });


    //fetudprodec//
    $('.rence-news-sld').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows:false,
    dots:true,
    autoplaySpeed: 2000,
    });


 //shoes pages//
 $('.shob-slide').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade:true,
    arrows:false,
    autoplaySpeed: 2000,
    });



    //----------//
 $('.slaccesries-part').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slect-sm-imc'
  });
  $('.slect-sm-imc').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slaccesries-part',
    centerMode: true,
    autoplay:true,
    arrows:false,
    autoplaySpeed: 2000,
    focusOnSelect: true
  });
          

  $('.logo-slidshow').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    arrows:true,
    prevArrow:'.jori',
    nextArrow:'.jorim',
    autoplaySpeed: 2000,
  });

  $('.end-lst').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    dots:true,
    arrows:false,
    autoplaySpeed: 2000,
  });



});