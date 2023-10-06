$(document).ready(function () {
  var main = $(".header_main").length;
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
if ($(".swiperProd").length) {
  let swiperProd = new Swiper(".swiperProd", {
    loop: true,
    spaceBetween: 24,
    autoplay: {
      delay: 1000,
    },
    speed: 1000,
    slidesPerView: 3,
  });
}

// TRUST SWIPER
if ($(".swiperTrust").length) {
  let swiperTrust = new Swiper(".swiperTrust", {
    loop: true,
    spaceBetween: 24,
    autoplay: {
      delay: 1000,
    },
    speed: 1000,
    slidesPerView: 3,
  });
}

// TRUST SWIPER
if ($(".swiperTeam").length) {
  let swiperTeam = new Swiper(".swiperTeam", {
    loop: true,
    spaceBetween: 24,
    autoplay: {
      delay: 1000,
    },
    speed: 1000,
    slidesPerView: 4,
  });
}

const svgImg = $("#stage");
if (svgImg.length) {
  $.get("../Shop/images/company/infograph.svg")
    .done(function () {
      svgImg.load("../Shop/images/company/infograph.svg", function (response) {
        $(this).addClass("svgLoaded");
        if (!response) {
          // console.log("HEEEEl");
        }
      });
    })
    .fail(function () {
      $.get("../images/company/infograph.svg")
        .done(function () {
          svgImg.load("../images/company/infograph.svg", function (response) {
            $(this).addClass("svgLoaded");
            if (!response) {
              // console.log("HEEEEl");
            }
          });
        })
        .fail(function () {});
    });
}

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

$(document).ready(function () {
  if ($(".card-wrap").find(".card_acb").length > 9) {
    $(".card-wrap a:nth-child(n+10)").slideToggle("");
    $(".show_hide_list").css("display", "block");

    $(".show_hide_list").click(function () {
      $(".card-wrap a:nth-child(n+10)").slideToggle("");
      $(this).toggleClass("opnd_g");
      if ($(this).hasClass("opnd_g")) {
        $(this).html("Показать меньше");
      } else {
        $(this).html("Показать еще");
      }
    });
  } else {
    $(".show_hide_list").hide();
  }
});

// svgImg.pageX
// ':'+event.pageY"

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
