$(function () {
  $(window).scroll(function () {
    const small = $('.nav');
    scroll = $(window).scrollTop();
    if (scroll > 1) {
      small.addClass('nav-small');
    } else {
      small.removeClass('nav-small');
    }
  })
  $('.slider-design').slick({
    arrows: false
  });

  $('.design-list').on('click', function () {
    index = $(this).index();
    $('.slider-design').slick('slickGoTo', index, false);
  });

  $('.service-img-area').slick({
    fade: true,
  });

  $('.service-list').hover(
    function () {
      index = $(this).index();
      $('.service-img-area').slick('slickGoTo', index, false);
    },

    function () {
      index = 0
      $('.service-img-area').slick('slickGoTo', index, false);
    });

  $('.study-img-area').slick({
    fade: true,
    asNavFor: ".study-list"
  });

  $('.study-list').slick({
    draggable: false,
    arrows: false,
    fade: true
  });

  $('.about-cardlist').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 800,
    variableWidth: true,
    slideToShow: 4,
  });


  const fade_bottom = 50;
  const fade_move = 100;
  const fade_time = 800;
  $(".scroll-fade-up").css({
    opacity: 0,
    transform: "translateY(" + fade_move + "px)",
    transition: fade_time + "ms",
  });
  $(window).on("scroll load", function () {
    const scroll_top = $(this).scrollTop();
    const scroll_bottom = scroll_top + $(this).height();
    const fade_position = scroll_bottom - fade_bottom;
    $(".scroll-fade-up").each(function () {
      const this_position = $(this).offset().top;
      if (fade_position > this_position) {
        $(this).css({
          opacity: 1,
          transform: "translateY(0)",
        });
      }
    });
  });



});