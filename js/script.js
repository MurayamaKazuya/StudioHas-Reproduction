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
    arrows: false,
    slideToShow: 1,
    dots: true
  });

  $('.design-list').on('click', function () {
    index = $(this).index();
    $('.slider-design').slick('slickGoTo', index, false);
  });


  $('.study-img-area').slick({
    fade: true,
    asNavFor: ".study-list",
    cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1)'
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

  $(document).on("mousemove", function (e) {
    $(".stalker").css({
      left: e.clientX + 'px',
      top: e.clientY + 'px'
    });
  });

  $("a,.clickable").on({
    "mouseenter": function () {
      $(".stalker").addClass("active");
    },
    "mouseleave": function () {
      $(".stalker").removeClass("active");
    }
  })

  $(".design .slick-list,.about .slick-list").on("mouseenter", function () {
    $('.stalker').addClass("swipe");
  });
  $(".design .slick-list,.about .slick-list").on("mouseleave", function () {
    $('.stalker').removeClass("swipe");
  });

  $(document).ready(function () {
    $('.humberger').click(function () {
      $('.hum-cont').addClass('open');
      $('.nav').addClass('hide');
      $('.dark').addClass('darkActive');
      $('.hum-img').addClass('hum-img-anime');
      setTimeout(function () {
        $('.hum-img-journal').addClass('appear');
        $('.hum-close').addClass('appear');
        $('.hum-left .inner').addClass('appear');
        $('.hum-middle .inner').addClass('appear');
        $('.hum-right .inner').addClass('appear');
      }, 1500);
      setTimeout(function () {
        $('.hum-img').removeClass('hum-img-anime');
      }, 2500);
    });
  });


  $(document).ready(function () {
    $('.hum-close').click(function () {
      $('.hum-left .inner').addClass('opa');
      $('.hum-middle .inner').addClass('opa');
      $('.hum-right .inner').addClass('opa');
      $('.dark').removeClass('darkActive');
      setTimeout(function () {
        $('.hum-cont').removeClass('open');
        $('.nav').removeClass('hide');
        $('.hum-img').removeClass('appear');
        $('.sub-menu').removeClass('appear');
        $('.hum-close').removeClass('appear');
        $('.hum-left .inner').removeClass('appear');
        $('.hum-middle .inner').removeClass('appear');
        $('.hum-right .inner').removeClass('appear');
      }, 700);
      setTimeout(function () {
        $('.hum-left .inner').removeClass('opa');
        $('.hum-middle .inner').removeClass('opa');
        $('.hum-right .inner').removeClass('opa');
      }, 1700);
    });
  });

  $(document).ready(function () {
    $(".sub-journal").mouseover(function () {
      $('.hum-img').removeClass('appear');
      $('.sub-menu').removeClass('appear');
      $('.hum-img-journal').addClass('appear');
    });

    $(".sub-service").mouseover(function () {
      $('.hum-img').removeClass('appear');
      $('.sub-menu').removeClass('appear');
      $('.hum-img-service').addClass('appear');
      $('.sub-menu-service').addClass('appear');
    });

    $(".sub-about").mouseover(function () {
      $('.hum-img').removeClass('appear');
      $('.sub-menu').removeClass('appear');
      $('.hum-img-about').addClass('appear');
      $('.sub-menu-about').addClass('appear');
    });

    $(".sub-contact").mouseover(function () {
      $('.hum-img').removeClass('appear');
      $('.sub-menu').removeClass('appear');
      $('.hum-img-contact').addClass('appear');
    });
  });

  $(document).ready(function () {
    $(".service-main-img").addClass('s-active')

    $(".service-about").hover(function () {
        $('.service-img').removeClass('s-active');
        $('.service-about-img').addClass('s-active');
      },
      function () {
        $('.service-img').removeClass('s-active');
        $(".service-main-img").addClass('s-active')
      });

    $(".service-media").hover(function () {
        $('.service-img').removeClass('s-active');
        $('.service-media-img').addClass('s-active');
      },
      function () {
        $('.service-img').removeClass('s-active');
        $(".service-main-img").addClass('s-active')
      });

    $(".service-design").hover(function () {
        $('.service-img').removeClass('s-active');
        $('.service-design-img').addClass('s-active');
      },
      function () {
        $('.service-img').removeClass('s-active');
        $(".service-main-img").addClass('s-active')
      });

    $(".service-works").hover(function () {
        $('.service-img').removeClass('s-active');
        $('.service-works-img').addClass('s-active');
      },
      function () {
        $('.service-img').removeClass('s-active');
        $(".service-main-img").addClass('s-active')
      });

  });

  /*  $(window).on('load', function () {
      var w = $(window).width();
      var x = 767;

      if (w <= x) {
        jQuery(function ($) {
          $('.service-list').click(function () {
            $doc = $('html,body');
            var scrTop = $('.service').offset().top - 81;
            $doc.animate({
              scrollTop: scrTop
            }, '500', 'easeOutQuad');
          });
        });

      } else {
        jQuery(function ($) {
          $('.service-list').click(function () {
            var scrTop = $('.service').offset().top - 92;
            $('html,body').animate({
              scrollTop: scrTop
            }, '500', 'easeOutQuad');
          });
        });
      }
    });*/

  $(document).ready(function () {
    $('.service-list').click(function () {
      var scrTop = $('.service').offset().top - 92;
      $('html,body').animate({
        scrollTop: scrTop
      }, 'fast', 'swing');
    });
  });

  $(document).ready(function () {
    $('.service-sub-close').click(function () {
      $('.service-about-img').removeClass('s-active2');
      $('.service-sub-about').removeClass('s-active');
      $('.service-sub-about').children().removeClass('s-active');
      $('.service-media-img').removeClass('s-active2');
      $('.service-sub-media').removeClass('s-active');
      $('.service-sub-media').children().removeClass('s-active');
      $('.service-design-img').removeClass('s-active2');
      $('.service-sub-design').removeClass('s-active');
      $('.service-sub-design').children().removeClass('s-active');
      $('.service-works-img').removeClass('s-active2');
      $('.service-sub-works').removeClass('s-active');
      $('.service-sub-works').children().removeClass('s-active');
    });

    $(document).ready(function () {
      $('.service-about').click(function () {
        $('.service-about-img').addClass('s-active2');
        $('.service-sub-about').addClass('s-active');
        setTimeout(function () {
          $('.service-sub-about').children().addClass('s-active');
        }, 250);
      });

      $('.service-media').click(function () {
        $('.service-media-img').addClass('s-active2');
        $('.service-sub-media').addClass('s-active');
        setTimeout(function () {
          $('.service-sub-media').children().addClass('s-active');
        }, 250);
      });

      $('.service-design').click(function () {
        $('.service-design-img').addClass('s-active2');
        $('.service-sub-design').addClass('s-active');
        setTimeout(function () {
          $('.service-sub-design').children().addClass('s-active');
        }, 250);
      });

      $('.service-works').click(function () {
        $('.service-works-img').addClass('s-active2');
        $('.service-sub-works').addClass('s-active');
        setTimeout(function () {
          $('.service-sub-works').children().addClass('s-active');
        }, 250);
      });
    });


  });


});