$(document).ready(function () {

  // Sticky Header
  $(window).on("scroll", function () {
    $("header").toggleClass("stickyHead", $(this).scrollTop() > 30);
  });


  // Hamburger menu toggle
  $(".menuIcon").on("click", function () {
    $(".menuCont").toggleClass("active");
    $("body").toggleClass("menu-open");

    if (!$(".menu-overlay").length) {
      $("header").append('<div class="menu-overlay"></div>');
    }
  });

  // Close menu
  $(document).on("click", ".menuClose, .menu-overlay", function () {
    $(".menuCont").removeClass("active");
    $("body").removeClass("menu-open");
    $(".menu-overlay").remove();
  });

  // Smooth scroll to anchor with 60px offset
  $(document).on('click', '.headMenu ul > li > a', function (e) {
    var href = $(this).attr('href');

    if (href && href.indexOf('#') === 0) {
      e.preventDefault();

      var $target = $(href);
      if ($target.length) {
        var offset = 80;
        var top = $target.offset().top - offset;

        window.scrollTo({
          top: top,
          behavior: "smooth" // âœ… real smooth, no speed jump
        });
      }
    }
  });

  // $(document).ready(function () {
  // First Marquee - Left to Right
  $(".psMarquee1Box").slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 3000,
    cssEase: "linear",
    infinite: true,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    variableWidth: false,
    responsive: [
      { breakpoint: 1600, settings: { slidesToShow: 5 } },
      { breakpoint: 1300, settings: { slidesToShow: 4 } },
      { breakpoint: 850, settings: { slidesToShow: 4 } },
      { breakpoint: 611, settings: { slidesToShow: 3 } },
      { breakpoint: 500, settings: { slidesToShow: 2 } },
    ],
  });

  // Second Marquee - Right to Left (reverse direction)
  $(".psMarquee2Box").slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 5000,
    cssEase: "linear",
    infinite: true,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    variableWidth: false,
    rtl: true, // 👈 this makes it scroll in the opposite direction
    responsive: [
      { breakpoint: 1600, settings: { slidesToShow: 5 } },
      { breakpoint: 1536, settings: { slidesToShow: 4 } },
      { breakpoint: 850, settings: { slidesToShow: 4 } },
      { breakpoint: 611, settings: { slidesToShow: 4 } },
      { breakpoint: 500, settings: { slidesToShow: 1 } },
    ],
  });
  // });

  $(".psMarquee1Box, .psMarquee2Box").slick("slickPlay");


  $(".winMiddle").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 30000,
    cssEase: "linear",
    infinite: true,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    variableWidth: false,
    responsive: [
      { breakpoint: 1600, settings: { slidesToShow: 5 } },
      { breakpoint: 1536, settings: { slidesToShow: 4 } },
      { breakpoint: 850, settings: { slidesToShow: 4 } },
      { breakpoint: 611, settings: { slidesToShow: 3 } },
      { breakpoint: 500, settings: { slidesToShow: 2 } },
    ],
  });

  $('.trustedBySliderLft').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: '.trustedBySliderRgt',
    responsive: [
      { breakpoint: 769, settings: { arrows: false } },
    ],
  });

  $('.trustedBySliderRgt').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.trustedBySliderLft',
    dots: false,
    fade: true,
    responsive: [
      { breakpoint: 769, settings: { arrows: true } },
    ],
  });


  $('.caseStudySlideBox').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    dots:true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      // { breakpoint: 1600, settings: { slidesToShow: 5 } },
      // { breakpoint: 1536, settings: { slidesToShow: 4 } },
      { breakpoint: 821, settings: { slidesToShow: 2 } },
      { breakpoint: 610, settings: { slidesToShow: 2 } },
      { breakpoint: 500, settings: { slidesToShow: 1 } },
    ],
  });

  function initLateUpSlider() {
    if ($(window).width() <= 820) {
      if (!$('.latestUpdatesCardsBox ').hasClass('slick-initialized')) {
        $('.latestUpdatesCardsBox ').slick({
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
          autoplay: true,
          autoplaySpeed: 3000000,
          responsive: [
            // { breakpoint: 1600, settings: { slidesToShow: 5 } },
            // { breakpoint: 1536, settings: { slidesToShow: 4 } },
            { breakpoint: 820, settings: { slidesToShow: 2 } },
            { breakpoint: 610, settings: { slidesToShow: 1 } },
          ],
        });
      }
    } else {
    if ($('.latestUpdatesCardsBox ').hasClass('slick-initialized')) {
      $('.latestUpdatesCardsBox ').slick('unslick'); // disable above 820px
    }
  }
}

initLateUpSlider();              // run on load
$(window).resize(initLateUpSlider); // run on resize



  // marketing Marquee - Right to Left (reverse direction)
  $(".markMarqueeBox").slick({
    slidesToShow:4.5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 4000,
    cssEase: "linear",
    infinite: true,
    arrows: false,
    dots: false,
    responsive: [
      { breakpoint: 1729, settings: { slidesToShow: 4 } },
      { breakpoint: 1681, settings: { slidesToShow: 4 } },
      { breakpoint: 1300, settings: { slidesToShow: 4 } },
      { breakpoint: 821, settings: { slidesToShow: 3 } },
      { breakpoint: 611, settings: { slidesToShow: 3 } },
      { breakpoint: 500, settings: { slidesToShow: 2.5 } },
    ],
  });
  
  // });

  $(".markMarqueeBox").slick("slickPlay");

});
