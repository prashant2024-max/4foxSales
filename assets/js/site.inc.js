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
      { breakpoint: 1400, settings: { slidesToShow: 5 } },
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
    speed: 3000,
    cssEase: "linear",
    infinite: true,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    variableWidth: false,
    rtl: true, // 👈 this makes it scroll in the opposite direction
    responsive: [
      { breakpoint: 1400, settings: { slidesToShow: 5 } },
      { breakpoint: 1300, settings: { slidesToShow: 4 } },
      { breakpoint: 850, settings: { slidesToShow: 4 } },
      { breakpoint: 611, settings: { slidesToShow: 3 } },
      { breakpoint: 500, settings: { slidesToShow: 2 } },
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
      { breakpoint: 1400, settings: { slidesToShow: 5 } },
      { breakpoint: 1300, settings: { slidesToShow: 4 } },
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
    asNavFor: '.trustedBySliderRgt'
  });
  $('.trustedBySliderRgt').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.trustedBySliderLft',
    dots: false,
    fade: true,
  });
});
