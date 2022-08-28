$(function () {
  $('.banner-wrapper').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    prevArrow: '.left',
    nextArrow: '.right',
    dots: true,
  });


  $('.service-wrapper').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    vertical: true,
    centerMode: true,
    centerPadding: '0px',
    prevArrow: '.up',
    nextArrow: '.down',

  });

  $('.left-comment').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    vertical: true,
    centerMode: true,
    centerPadding: '0px',
    asNavFor: '.right-comment-wrapper'

  });
  $('.right-comment-wrapper').slick({
    slidesToShow: 1,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    vertical: true,
    centerMode: true,
    centerPadding: '0px',
    asNavFor: '.left-comment'

  });


  new VenoBox({
    selector: '.my-image-links',
    numeration: true,
    infinigall: true,
    share: true,
    spinner: 'rotating-plane'
  });



  $('.team-wrapper').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
    centerMode: true,
    centerPadding: 0,
    pauseOnFocus: false,
  });

})