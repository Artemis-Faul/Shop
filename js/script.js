var w = $(window).width(); // Получаем ширину окна

function changeMenu() {
  var nav = $(".nav");
  nav.children(".nav-link").removeClass("white");
  $(".number").removeClass("white");
  // $(".header ").css("background", "#fff");
  $(".header ").addClass("bg-white");
  $(".logo").attr("src", "images/main-page/logo.svg");
  $(".menu-icons")
    .find("img")
    .eq(0)
    .attr("src", "images/main-page/icons/instagram.svg");
  $(".menu-icons")
    .find("img")
    .eq(1)
    .attr("src", "images/main-page/icons/telegram.svg");
  $(".menu-icons")
    .find("img")
    .eq(2)
    .attr("src", "images/main-page/icons/email.svg");
}
// MENU
if (w >= 560) {
  $(document).ready(function () {
    var main = $(".header_main").length;
    var nav = $(".nav");
    if (main) {
      window.addEventListener("scroll", function () {
        var top = $(this).scrollTop();
        if (top > 1) {
          changeMenu();
        } else {
          nav.children(".nav-link").addClass("white");
          $(".number").addClass("white");
          $(".logo").attr("src", "images/main-page/logo-white.svg");
          $(".header ").removeClass("bg-white");

          $(".menu-icons")
            .find("img")
            .eq(0)
            .attr("src", "images/main-page/icons/instagram_white.svg");

          $(".menu-icons")
            .find("img")
            .eq(1)
            .attr("src", "images/main-page/icons/telegram_white.svg");

          $(".menu-icons")
            .find("img")
            .eq(2)
            .attr("src", "images/main-page/icons/email_white.svg");
        }
      });
    } else {
      changeMenu();
    }
  });
} else {
  // MOBILE
  changeMenu();
}

//MOBILE MENU
// console.log($(".side-menu").length);

$(".side-menu").on("change", function () {
  $(".header").toggleClass("active");
  $(".nav").toggleClass("active");
  $(".mobile-menu").toggleClass("active");
  $(".menu-icons").toggleClass("active");
  $(".header__contact").toggleClass("active");

  // if (this.checked) {
  // } else {
  //   // $(".header").removeClass("active");
  // }
});
// PRODUCTS SWIPER
if (w >= 560) {
  if ($(".swiperProd").length) {
    let swiperProd = new Swiper(".swiperProd", {
      loop: true,
      autoplay: {
        delay: 1000,
      },
      speed: 1000,
      slidesPerView: 3,
      spaceBetween: 24,
    });
  }
}

// DISTRIBUTORS SWIPER
let count = 1;
$(".container_dist").each(function () {
  // console.log($(this).find(".swiper-slide").length);
  if ($(this).find(".swiper-slide").length > 6) {
    let className = "swiperDistr" + count;
    count += 1;
    $(this).addClass(className);
    var swiper = new Swiper("." + className, {
      loop: true,
      autoplay: {
        delay: 1000,
        disableOnInteraction: false,
      },
      speed: 1000,

      centeredSlides: true * (count % 2),

      slidesPerView: 1.8,
      spaceBetween: 8,
      breakpoints: {
        // when window width is >= 320px
        560: {
          slidesPerView: 5.5,
          spaceBetween: 24,
        },
      },
    });
  } else {
    $(this).find(".swiper-wrapper").addClass("swiper-wrapper_distr");
  }
});

//  TRUST SWIPER
if ($(".swiperTrust").length) {
  let swiperTrust = new Swiper(".swiperTrust", {
    loop: true,
    autoplay: {
      delay: 1000,
    },
    speed: 1000,
    slidesPerView: 2,
    spaceBetween: 8,

    breakpoints: {
      // when window width is >= 320px
      560: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
    },
  });
}

// SWIPER TEAM
if ($(".swiperTeam").length) {
  let swiperTeam = new Swiper(".swiperTeam", {
    loop: true,

    autoplay: {
      delay: 1000,
    },
    speed: 1000,
    spaceBetween: 8,
    slidesPerView: 2,

    breakpoints: {
      // when window width is >= 320px
      560: {
        slidesPerView: 4,
        spaceBetween: 24,
      },
    },
  });
}

// DELIVER SWIPER
if ($(".swiperDeliver").length) {
  let swiperTeam = new Swiper(".swiperDeliver", {
    loop: true,
    spaceBetween: 20,
    autoplay: {
      delay: 1000,
    },
    speed: 1000,
    slidesPerView: 4,
  });
}

// INFOGRAPH
// const svgImg = $("#stage");
// if (svgImg.length) {
//   $.get("../Shop/images/company/infograph.svg")
//     .done(function () {
//       svgImg.load("../Shop/images/company/infograph.svg", function (response) {
//         $(this).addClass("svgLoaded");
//         if (!response) {
//           // console.log("HEEEEl");
//         }
//       });
//     })
//     .fail(function () {
//       $.get("VapeShop/images/company/infograph.svg")
//         .done(function () {
//           svgImg.load("/images/company/infograph.svg", function (response) {
//             $(this).addClass("svgLoaded");
//             if (!response) {
//               // console.log("HEEEEl");
//             }
//           });
//         })
//         .fail(function () {});
//     });
// }

// INFOGRAPH ANIMATIONS
function ChangeSvg(e, x) {
  let elempPos = x.getBoundingClientRect();
  let elemTop = elempPos.top + elempPos.height / 2;
  let elemLeft = (elempPos.left + elempPos.width) / 2;
  let mousePosX = e.clientX;
  let mousePosY = e.clientY;

  let pathUp = document.querySelector("path[data-name='up']");
  let pathLeft = document.querySelector("path[data-name='left']");
  let pathRight = document.querySelector("path[data-name='right']");

  let textUp = document.querySelector("path[data-name='text-up']");
  let textLeft = document.querySelector("path[data-name='text-left']");
  let textRight = document.querySelector("path[data-name='text-right']");

  let titleUp = document.querySelector("path[data-name='title-up']");
  let titleLeft = document.querySelector("path[data-name='title-left']");
  let titleRight = document.querySelector("path[data-name='title-right']");

  let lineUp = document.querySelector("path[data-name='line-up']");
  let lineLeft = document.querySelector("path[data-name='line-left']");
  let lineRight = document.querySelector("path[data-name='line-right']");

  if (mousePosX <= elemLeft) {
    pathUp.setAttribute("class", "hide");
    pathLeft.setAttribute("class", "show");
    pathRight.setAttribute("class", "hide");

    titleUp.setAttribute("class", "disable");
    titleLeft.setAttribute("class", "active");
    titleRight.setAttribute("class", "disable");

    textUp.setAttribute("class", "disable");
    textLeft.setAttribute("class", "active");
    textRight.setAttribute("class", "disable");

    lineUp.setAttribute("class", "line-disable");
    lineLeft.setAttribute("class", "line-act");
    lineRight.setAttribute("class", "line-disable");

    // console.log("LEft");
  } else {
    if (mousePosY <= elemTop) {
      pathUp.setAttribute("class", "show");
      pathLeft.setAttribute("class", "hide");
      pathRight.setAttribute("class", "hide");

      titleUp.setAttribute("class", "active");
      titleLeft.setAttribute("class", "disable");
      titleRight.setAttribute("class", "disable");

      textUp.setAttribute("class", "active");
      textLeft.setAttribute("class", "disable");
      textRight.setAttribute("class", "disable");

      lineUp.setAttribute("class", "line-act");
      lineLeft.setAttribute("class", "line-disable");
      lineRight.setAttribute("class", "line-disable");

      // console.log("Right TOP");
    } else {
      pathUp.setAttribute("class", "hide");
      pathLeft.setAttribute("class", "hide");
      pathRight.setAttribute("class", "show");

      titleUp.setAttribute("class", "disable");
      titleLeft.setAttribute("class", "disable");
      titleRight.setAttribute("class", "active");

      textUp.setAttribute("class", "disable");
      textLeft.setAttribute("class", "disable");
      textRight.setAttribute("class", "active");

      lineUp.setAttribute("class", "line-disable");
      lineLeft.setAttribute("class", "line-disable");
      lineRight.setAttribute("class", "line-act");

      // console.log("Right BOTTOM");
    }
  }
  // if (l)
  // x.
}

//SHOW_HIDE CARD IN ALLBRANDS
$(document).ready(function () {
  if ($(".card-wrap").find(".card_acb").length > 9) {
    $(".card-wrap a:nth-child(n+10)").slideToggle();
    $(".btn_sh_brends").css("display", "flex");

    $(".btn_sh_brends").click(function () {
      $(".card-wrap a:nth-child(n+10)").slideToggle();
      $(".span_sh").toggleClass("opnd_g");
      if ($(".span_sh").hasClass("opnd_g")) {
        $(".span_sh").html("Показать меньше");
      } else {
        $(".span_sh").html("Показать еще");
      }
    });
  } else {
    $(".btn_sh_brends").hide();
  }
});
$(".btn_sh").css("display", "none");

//SHOW_HIDE CARD ON BUTTON-CLICK
if (w <= 560) {
  $(".banner__title").attr("src", "images/main-page/triom-mob.svg");

  $(".btn_sh").css("display", "flex");
  $(".btn_float").html("Написать");
  $(".content_sh").slideToggle(200);

  $(".btn_sh").click(function () {
    let btnAttr = $(this).attr("btn-name");
    let shType = $(this).attr("sh-type");
    if (shType == "text") {
      $(".content_sh[sh-name=" + btnAttr + "]").slideToggle(200);
    } else {
      $(".content_sh[sh-name=" + btnAttr + "]").slideToggle(0);
    }

    let span = $(this).find($(".span_sh"));
    console.log(span);
    span.toggleClass("opnd_g");

    if (span.hasClass("opnd_g")) {
      if (shType == "text") {
        span.html("Читать меньше");
      } else {
        span.html("Показать меньше");
      }
    } else {
      if (shType == "text") {
        span.html("Читать еще");
      } else {
        span.html("Показать еще");
      }
    }
  });
}

// $(document).ready(function () {
//   // var w = $(window).width(); // Получаем ширину окна
//   // if (w <= 560) {
//   //   $(".btn_float").html("Написать");
//   //   // } else if (w <= 1536) {
//   // }
// });
