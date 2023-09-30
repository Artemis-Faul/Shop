$(document).ready(function () {
  var main = $(".header_main");
  var nav = $(".nav");
  if (main) {
    window.addEventListener("scroll", function () {
      var top = $(this).scrollTop();
      if (top > 0) {
        nav.children(".nav-link").removeClass("white");
        $(".number").removeClass("white");
        $(".header ").css("background", "#fff");
        $(".logo").attr("src", "images/main-page/logo.svg");
        $(".menu-icons")
          .children(".menu-icon")
          .eq(0)
          .attr("src", "images/main-page/icons/telegram.svg");
        $(".menu-icons")
          .children(".menu-icon")
          .eq(1)
          .attr("src", "images/main-page/icons/instagram.svg");
        $(".menu-icons")
          .children(".menu-icon")
          .eq(2)
          .attr("src", "images/main-page/icons/email.svg");
      } else {
        nav.children(".nav-link").addClass("white");
        $(".number").addClass("white");
        $(".logo").attr("src", "images/main-page/logo-white.svg");
        $(".header ").css("background", "transparent");

        $(".menu-icons")
          .children(".menu-icon")
          .eq(0)
          .attr("src", "images/main-page/icons/instagram_white.svg");
        $(".menu-icons")
          .children(".menu-icon")
          .eq(1)
          .attr("src", "images/main-page/icons/telegram_white.svg");
        $(".menu-icons")
          .children(".menu-icon")
          .eq(2)
          .attr("src", "images/main-page/icons/email_white.svg");
      }
    });
  }
});

// PRODUCTS SWIPER
let swiperProd = new Swiper(".swiperProd", {
  loop: true,
  spaceBetween: 24,
  autoplay: {
    delay: 1000,
  },
  speed: 1000,
  slidesPerView: 3,
});

// TRUST SWIPER
let swiperTrust = new Swiper(".swiperTrust", {
  loop: true,
  spaceBetween: 24,
  autoplay: {
    delay: 1000,
  },
  speed: 1000,
  slidesPerView: 3,
});

// TRUST SWIPER
let swiperTeam = new Swiper(".swiperTeam", {
  loop: true,
  spaceBetween: 24,
  autoplay: {
    delay: 1000,
  },
  speed: 1000,
  slidesPerView: 4,
});

// $(document).ready(function(){
//   var w = $(window).width(); // Получаем ширину окна
//   if (w <= 1601) {
//     // Если ширина окна меньше, либо равна 600
//     // $(".banner__img_one").css("animation-name", "updownone1600");
//   } else if (w <= 1536) {
//     // Если ширина окна меньше, либо равна 600
//     // $(".banner__img_one").css("animation-name", "updownone1600");
//   }
// });
