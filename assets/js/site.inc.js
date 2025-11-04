$(document).ready(function () {
  var hamburgers = document.querySelectorAll(".hamburger"),
    $menuWrap = $(".menu-wrap");
  $menuWrapDK = $(".menu-wrapdk");
  if (hamburgers.length > 0) {
    $(hamburgers).on("click", function () {
      this.classList.toggle("is-active");
      $menuWrap.toggleClass("menu-show");
      $menuWrapDK.toggleClass("menu-desk");
      $("body").toggleClass("no-scroll");
      $("body").toggleClass("overlay-body");
    });
  }

  
  $(window).scroll(function () {
    $(this).scrollTop() > 50
      ? $(".np-header").addClass("sticky")
      : $(".np-header").removeClass("sticky");
  });

  if ($(".np-cartList > a").length > 0) {
    $(".np-cartList > a").on(
      "click",
      function () {
        $(".np-addCart").addClass("active");
      }
    );
  }
  if ($(".np-nav-menu .np-cart.mob a").length > 0) {
    $(".np-nav-menu .np-cart.mob a").on(
      "click",
      function () {
        $(".np-addCart").addClass("active");
      }
    );
  }
  if ($(".closeBtn > a").length > 0) {
    $(".closeBtn > a").on("click", function () {
      $(".np-addCart").removeClass("active");
    });
  }

  $(".np-search > a").click(function () {
    $(".np-search__field").slideToggle();
  });
  $(".np-profile > a").click(function (event) {
    event.stopPropagation();
    $(".np-loginBtns").slideToggle();
  });
  $(document).click(function () {
    $(".np-loginBtns").slideUp();
  });

  $(".np-BeforloginBtns .np-profile__login").magnificPopup({
    type: "inline",
    preloader: false,
    focus: "#name",
    closeOnBgClick: false,
  });
  // $(".np-logout a").magnificPopup({
  //   type: "inline",
  //   preloader: false,
  //   focus: "#name",
  //   closeOnBgClick: false,
  // });
  // $("#no").on("click", function () {
  //   $.magnificPopup.close();
  // });

  if ($(".np-banner__Slider").length > 0) {
    $(".np-banner__Slider").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: true,
      speed: 1000,
      autoplay: false,
      autoplaySpeed: 1500,
      fade: true,
      cssEase: "linear",
    });
  }
  if ($(".np-services-slider").length > 0) {
    $(".np-services-slider").slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      dots: true,
      speed: 1000,
      nextArrow: ".np-services__nextBtn",
      prevArrow: ".np-services__prevBtn",
      responsive: [
        {
          breakpoint: 1700,
          settings: {
            slidesToShow: 2,
            arrows: true,
            dots: true,
          },
        },
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 1,
            arrows: true,
            dots: true,
          },
        },
        {
          breakpoint: 993,
          settings: {
            slidesToShow: 2,
            arrows: true,
            dots: true,
          },
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 1,
            arrows: true,
            dots: true,
          },
        },
      ],
    });
  }

  if ($(".np-reviews-slider").length > 0) {
    $(".np-reviews-slider").slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      dots: true,
      infinite: false,
      speed: 1000,
      nextArrow: ".np-services__nextBtn",
      prevArrow: ".np-services__prevBtn",
      responsive: [
        {
          breakpoint: 1700,
          settings: {
            slidesToShow: 2,
            arrows: true,
            dots: true,
          },
        },
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 1,
            arrows: true,
            dots: true,
          },
        },
        {
          breakpoint: 993,
          settings: {
            slidesToShow: 2,
            arrows: true,
            dots: true,
          },
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 1,
            arrows: true,
            dots: true,
          },
        },
      ],
    });
  }

  if ($(".np-aboutUs-team__slide").length > 0) {
    $(".np-aboutUs-team__slide").slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: true,
      dots: true,
      speed: 1000,
      nextArrow: ".np-aboutUs-team__sliderBtn-next",
      prevArrow: ".np-aboutUs-team__sliderBtn-prev",
      responsive: [
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 3,
            arrows: true,
            dots: true,
          },
        },
        {
          breakpoint: 993,
          settings: {
            slidesToShow: 2,
            arrows: true,
            dots: true,
          },
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 1,
            arrows: true,
            dots: true,
          },
        },
      ],
    });
  }
  if ($(".np-booking-custSay__slider").length > 0) {
    $(".np-booking-custSay__slider").slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
      infinite: false,
      speed: 1000,
      responsive: [
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 3,
            arrows: true,
            dots: false,
          },
        },
        {
          breakpoint: 993,
          settings: {
            slidesToShow: 2,
            arrows: false,
            dots: true,
          },
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 1,
            arrows: false,
            dots: true,
          },
        },
      ],
    });
  }
  if ($(".np-aboutUs-services__slide").length > 0) {
    $(".np-aboutUs-services__slide").slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      dots: true,
      speed: 1000,
      responsive: [
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 2,
            arrows: false,
            dots: true,
          },
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 1,
            arrows: false,
            dots: true,
          },
        },
      ],
    });
  }

  if ($(".np-cat__slider").length > 0) {
    $(".np-cat__slider").slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
      speed: 1000,
      autoplay: false,
      responsive: [
        {
          breakpoint: 1500,
          settings: {
            slidesToShow: 4,
            arrows: true,
          },
        },
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 3,
            arrows: true,
          },
        },
        {
          breakpoint: 993,
          settings: {
            slidesToShow: 2,
            arrows: true,
          },
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 1,
            arrows: true,
          },
        },
      ],
    });
  }
  

  if ($(".np-blogs__card-list").length > 0) {
    $(".np-blogs__card-list").slick({
      infinite: false,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: false,
      dots: false,
      speed: 1000,
      autoplay: false,
      responsive: [
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 3,
            dots: true,
          },
        },
        {
          breakpoint: 990,
          settings: {
            slidesToShow: 2,
            dots: true,
          },
        },
        {
          breakpoint: 580,
          settings: {
            slidesToShow: 1,
            dots: true,
          },
        },
      ],
    });
  }
  if ($(".np-retailProduct__Card").length > 0) {
    $(".np-retailProduct__Card").slick({
      infinite: false,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: false,
      dots: false,
      speed: 1000,
      autoplay: false,
      responsive: [
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 3,
            dots: true,
          },
        },
        {
          breakpoint: 990,
          settings: {
            slidesToShow: 2,
            dots: true,
          },
        },
        {
          breakpoint: 580,
          settings: {
            slidesToShow: 1,
            dots: true,
          },
        },
      ],
    });
  }
  if ($(".np-offerSec__card-list").length > 0) {
    $(".np-offerSec__card-list").slick({
      infinite: false,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: false,
      dots: false,
      speed: 1000,
      autoplay: false,
      responsive: [
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 3,
            dots: true,
          },
        },
        {
          breakpoint: 993,
          settings: {
            slidesToShow: 2,
            dots: true,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            dots: true,
          },
        },
      ],
    });
  }
  if ($(".np-booking-mobAssistance__slide").length > 0) {
    $(".np-booking-mobAssistance__slide").slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      dots: true,
      speed: 1000,
      autoplay: false,
      responsive: [
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 2,
            dots: true,
          },
        },
        {
          breakpoint: 993,
          settings: {
            slidesToShow: 2,
            dots: true,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            dots: true,
          },
        },
      ],
    });
  }

  if ($(".np-clientSay__slider").length > 0) {
    $(".np-clientSay__slider").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
      speed: 1000,
      autoplay: false,
    });
  }

  
  if ($(".np-productD__leftSec-sliderThum").length > 0) {
    $(".np-productD__leftSec-sliderThum").slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: ".np-productD__leftSec-slider",
      dots: false,
      arrows: false,
      infinite: false,
      focusOnSelect: true,
    });
  }
  if ($(".np-productD__leftSec-slider").length > 0) {
    $(".np-productD__leftSec-slider").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      infinite: false,
      fade: false,
      draggable: false,
      asNavFor: ".np-productD__leftSec-sliderThum",
    });
  }
  if ($(".np-faqSec-listing__list-title").length > 0) {
    $(".np-faqSec-listing__list-disc").not(":first").hide();
    $(".np-faqSec-listing__list-title").first().addClass("active");
    $(".np-faqSec-listing__list-title").on("click", function () {
      var dropdownContent = $(this).next(".np-faqSec-listing__list-disc");
      var image = $(this).find("img");
      dropdownContent.slideToggle(function () {
        if ($(this).is(":visible")) {
          image.css({
            transform: "rotate(0deg)",
            transition: "transform 0.3s ease",
          });
        } else {
          image.css({
            transform: "rotate(180deg)",
            transition: "transform 0.3s ease",
          });
        }
      });
      $(this).toggleClass("active");
      $(".np-faqSec-listing__list-title").not(this).removeClass("active");
      $(".np-faqSec-listing__list-disc").not(dropdownContent).slideUp();
      $(".np-faqSec-listing__list-title").not(this).find("img").css({
        transform: "rotate(180deg)",
        transition: "transform 0.3s ease",
      });
    });
  }

  if ($(".np-productD__RightSec-discAcc__title").length > 0) {
    $(".np-productD__RightSec-discAcc__txt").not(":first").hide();
    $(".np-productD__RightSec-discAcc__title").first().addClass("active");
    $(".np-productD__RightSec-discAcc__title").on("click", function () {
      var dropdownContent = $(this).next(".np-productD__RightSec-discAcc__txt");
      var image = $(this).find("img");
      dropdownContent.slideToggle(function () {
        if ($(this).is(":visible")) {
          image.css({
            transform: "rotate(0deg)",
            transition: "transform 0.3s ease",
          });
        } else {
          image.css({
            transform: "rotate(180deg)",
            transition: "transform 0.3s ease",
          });
        }
      });
      $(this).toggleClass("active");
      $(".np-productD__RightSec-discAcc__title")
        .not(this)
        .removeClass("active");
      $(".np-productD__RightSec-discAcc__txt").not(dropdownContent).slideUp();
      $(".np-productD__RightSec-discAcc__title").not(this).find("img").css({
        transform: "rotate(180deg)",
        transition: "transform 0.3s ease",
      });
    });
  }
  if ($(".np-productD__RightSec-addinfoAcc__title").length > 0) {
    $(".np-productD__RightSec-addinfoAcc__txt").not(":first").hide();
    $(".np-productD__RightSec-addinfoAcc__title").first().addClass("active");
    $(".np-productD__RightSec-addinfoAcc__title").on("click", function () {
      var dropdownContent = $(this).next(
        ".np-productD__RightSec-addinfoAcc__txt"
      );
      var image = $(this).find("img");
      dropdownContent.slideToggle(function () {
        if ($(this).is(":visible")) {
          image.css({
            transform: "rotate(0deg)",
            transition: "transform 0.3s ease",
          });
        } else {
          image.css({
            transform: "rotate(180deg)",
            transition: "transform 0.3s ease",
          });
        }
      });
      $(this).toggleClass("active");
      $(".np-productD__RightSec-addinfoAcc__title")
        .not(this)
        .removeClass("active");
      $(".np-productD__RightSec-addinfoAcc__txt")
        .not(dropdownContent)
        .slideUp();
      $(".np-productD__RightSec-addinfoAcc__title").not(this).find("img").css({
        transform: "rotate(180deg)",
        transition: "transform 0.3s ease",
      });
    });
  }

  $(".np-products__leftSec-Title.accor").click(function () {
    $(this).parent().find(".np-products__leftSec-price").slideToggle("slow");
    $(this).toggleClass("active");
  });

  if (window.innerWidth < 800) {
    $(".np-products__leftSec-Title.accorMob").click(function () {
      $(this).parent().find(".np-products__leftSec-accMob").slideToggle("slow");
      $(this).toggleClass("active");
    });
  }
  

  $(".np-blogListing__leftSide-blogBottom__catList .np-blogListing__cat a").on(
    "click",
    function () {
      var relTab = $(this).attr("rel");
      $(
        ".np-blogListing__leftSide-blogBottom__catList .np-blogListing__cat"
      ).removeClass("active");
      $(
        ".np-blogListing__leftSide-blogBottom__catList .np-blogListing__cat a"
      ).removeClass("active");
      $(".np-blogListing__cards").removeClass("active");
      $(this).parent().addClass("active");
      $(this).addClass("active");
      $(this)
        .parent()
        .parent()
        .parent()
        .parent()
        .parent()
        .parent()
        .find("#" + relTab)
        .addClass("active");
    }
  );

  $(".np-selectPackInputs input[type='radio']").on(
    "click",
    function () {
      var relTab = $(this).attr("rel");
      $(
        ".np-selectPackInputs input[type='radio']"
      ).removeClass("current");
      $(".np-Days").removeClass("current");
      $(this).addClass("current");
      $(this)
        .parent()
        .parent()
        .parent()
        .parent()
        .parent()
        .parent()
        .find("#" + relTab)
        .addClass("current");
    }
  );

  
  $(".np-retailProduct__CardItam-fev a i").on("click", function () {
    $(this).toggleClass("fa-heart fa-heart-o");
  });
  $(".np-productD__RightSec-Adfev a i").on("click", function () {
    $(this).toggleClass("fa-heart fa-heart-o");
  });

  $(".addPop > a").magnificPopup({
    // type: 'inline',
    // preloader: false,
    // focus: '#name',
    items: {
      src: "#address-form",
      type: "inline",
      midClick: true,
    },
    closeOnBgClick: false,
    enableEscapeKey: false,
    showCloseBtn: false,
  });
  $(".btnClose").on("click", function () {
    $.magnificPopup.close();
  });

  $(".editPop > a").magnificPopup({
    // type: 'inline',
    // preloader: false,
    // focus: '#name',
    items: {
      src: "#edit-form",
      type: "inline",
      midClick: true,
    },
    closeOnBgClick: false,
    enableEscapeKey: false,
    showCloseBtn: false,
  });
  $(".btnClose").on("click", function () {
    $.magnificPopup.close();
  });

  $(".np-reviews-popUpBtn a").magnificPopup({
    // type: 'inline',
    // preloader: false,
    // focus: '#name',
    items: {
      src: "#reviewBtn",
      type: "inline",
      midClick: true,
    },
    closeOnBgClick: false,
    enableEscapeKey: false,
    showCloseBtn: false,
  });
  $(".btnClose").on("click", function () {
    $.magnificPopup.close();
  });

  $(".quantity__minus, .quantity__plus").on("click", function (e) {
    e.preventDefault();
    var inputField = $(this).siblings(".quantity__input");
    var value = parseInt(inputField.val());

    if ($(this).hasClass("quantity__minus")) {
      // Decrease the value by 1
      value = value > 1 ? value - 1 : 1;

      // Modify the minus button opacity when the value is one
      if (value === 1) {
        $(this).css("opacity", "0.5");
      } else {
        $(this).css("opacity", "1");
      }
    } else if ($(this).hasClass("quantity__plus")) {
      // Increase the value by 1, limited to a maximum of 10
      value = value < 10 ? value + 1 : 10;
      $(".quantity__minus").css("opacity", "1");
    }

    inputField.val(value);
  });
  
  Fancybox.bind('[data-fancybox="gallery"]', {
    selector: ".slick-slide:not(.slick-cloned)",
    hash: false,
    Toolbar: {
      display: {
        left: [],
        middle: [],
        right: ["close"],
      },
    },
    Thumbs: {
      showOnStart: false,
    },
    contentClick: "iterateZoom",
    Images: {
      initialSize: "fit",
      Panzoom: {
        enabled: true,
        maxScale: 2,
        startScale: 1,
      },
      preload: false,
    },
    on: {
      click: function (_instance, slide) {
        // Toggle the zoom state of the slide
        slide.panzoom.toggleZoom();
      },
    },
  });

  $(".np-booking-services__tabList li a").on("click", function () {
    var relTab = $(this).attr("rel");
    $(".np-booking-services__tabList li").removeClass("current");
    $(".np-booking-services__tabList li a").removeClass("current");
    $(".np-booking-services__tab-content").removeClass("current");
    $(this).parent().parent().addClass("current");
    $(this).addClass("current");
    $(this)
      .parent()
      .parent()
      .parent()
      .parent()
      .parent()
      .find("#" + relTab)
      .addClass("current");
  });
  

  flatpickr('.np-bookingFormRgt__sDate-input.day .pickD', {
    enableTime: false,
    allowInput: false,
    dateFormat: "d/m/Y",
    disableMobile: "true"
  });
  flatpickr('.np-bookingFormRgt__sDate-input.time .pickT', {
    enableTime: true,
    allowInput: false,
    noCalendar: true,
    dateFormat: "h:i K",
    disableMobile: "true"
  });
  
  $(".np-popupOnLoad").magnificPopup({
    type: "inline",
    preloader: false,
    focus: "#name",
    closeOnBgClick: false,
  });

});
