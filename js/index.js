// // SLIDE BAR MENU
// var swiper = new Swiper(".swiper-container-slide", {
//   speed: 600,
//   autoplay: 2000,
//   parallax: true,
//   direction: "horizontal",
//   loop: true,
//   autoplay: {
//     delay: 2000,
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   navigation: {
//     nextEl: ".button-next",
//     prevEl: ".button-prev",
//   },
// });

// // SLIDE RESPONSIVE ARRIVALS
// var swiper = new Swiper(".swiper-container-arrivals", {
//   slidesPerView: 4,
//   pagination: {
//     el: "swiper-pagination-arrivals",
//     clickable: true,
//   },
//   breakpoints: {
//     0: {
//       slidesPerView: 1,
//     },
//     414: {
//       slidesPerView: 2,
//     },
//     768: {
//       slidesPerView: 3,
//     },
//     1024: {
//       slidesPerView: 4,
//     },
//   },
//   navigation: {
//     nextEl: ".button-next-arrivals",
//     prevEl: ".button-prev-arrivals",
//   },
// });

// // SLIDERS REPONSIVE FEATURES
// var swiper = new Swiper(".swiper-container-features", {
//   slidesPerView: 4,
//   pagination: {
//     el: "swiper-pagination-features",
//     clickable: true,
//   },
//   breakpoints: {
//     0: {
//       slidesPerView: 1,
//     },
//     414: {
//       slidesPerView: 2,
//     },
//     768: {
//       slidesPerView: 3,
//     },
//     1024: {
//       slidesPerView: 4,
//     },
//   },
// });

// // SlIDER REPONSIVE FOOTER
// var swiper = new Swiper(".swiper-container-footer", {
//   slidesPerView: 4,
//   breakpoints: {
//     0: {
//       slidesPerView: 2,
//     },
//     414: {
//       slidesPerView: 2,
//     },
//     768: {
//       slidesPerView: 3,
//     },
//     1024: {
//       slidesPerView: 6,
//     },
//   },
// });



// function getDirection() {
//   var windowWidth = window.innerWidth;
//   var direction = window.innerWidth <= 760 ? "vertical" : "horizontal";

//   return direction;
// }


    // SWIPER SLIDE ALL
function slider_all() {
  $(".slider-all").each(function() {
    var swp = $(this).attr('data-class');
    var swp_perview = $(this).attr('data-perview');
    var swp_loop = $(this).attr('data-loop');
    var swp_next = $(this).attr('data-navigation-next');
    var swp_prev = $(this).attr('data-navigation-prev');
    var swp_pgt = $(this).attr('data-pgt');
    var swp_res_0 = $(this).attr('data-breakpoint-0');
    var swp_res_414 = $(this).attr('data-breakpoint-414');
    var swp_res_768 = $(this).attr('data-breakpoint-768');
    var swp_res_1024 = $(this).attr('data-breakpoint-1024');
  
    var swiper = new Swiper("." + swp, {
    slidesPerView: swp_perview,
    loop: swp_loop,
    pagination: {
      el: "." + swp_pgt,
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: swp_res_0,
      },
      414: {
        slidesPerView: swp_res_414,
      },
      768: {
        slidesPerView: swp_res_768,
      },
      1024: {
        slidesPerView: swp_res_1024,
      },
    },
    navigation: {
      nextEl: "." + swp_next,
      prevEl: "." + swp_prev,
    },
    });
  });
};



 // RESIZE
$(window).resize(function () {
  var left = $(".list-menu").offset().left;
  if ($(window).width() <= 1268) {
    $(".navbar-nav").css({ left: -left });
  } else {
    $(".navbar-nav").css({ left: "" });
  }
});

// OFFSET DROP DOWN MENU
// method on load sau khi load xong html,css sẽ chạy js
$(window).on("load", function () {
  var left = $(".list-menu").offset().left;
  if ($(window).width() <= 1268) {
    $(".navbar-nav").css({ left: -left });
  } else {
    $(".navbar-nav").css({ left: "" });
  }
});

$(document).ready(function () {
slider_all();

// TABS MENU
$(".wrapper_tabs").find(".btn-features li .tablink").on("click", function () {
  var tab_id = $(this).attr("data-id");
  $(".tablink").removeClass("active");
  $(this).addClass("active");
  $(this).parents(".wrapper_tab_all").find("#"+tab_id).addClass("active");
  $(this).parents(".wrapper_tab_all").find(".tab").not("#"+tab_id).removeClass("active");
  setTimeout(slider_all(), 700);
});


  // DROP DOWN MENU BARS
  $(".drop-down-menu").on("click",function () {
    $(this).parents(".list-menu").find(".navbar-nav").slideToggle();
    $(this).toggleClass("active");
  });

  // SLIDE UP, DOWN MENU
  $(".drop-down-all").on("click",function () {
    $(this).parents(".navbar-nav").find(">.nav-item").not($(this).parents(".nav-item")).find(".general-sub-menu").slideUp();
    $(this).parent().next().slideToggle();
    $(this).toggleClass("active");
  });

  // SHOW SEARCH
  function search() {
    $("#show-search").on("click", function () {
      $(".main-search").show();
      $(".main-search").css({
        top: "0",
        transition: "1s",
        visibility: "visible",
      });
    });

    $("#close").on("click", function () {
      $(".main-search").css("top", "1000px");
    });
  }
  $(document).ready(function () {
    search();
  });

  // SCROLL MENU TOP
  $(window).on("scroll", function () {
    var scroll_menu = $(window).scrollTop();
    if (scroll_menu > 500) {
      $("#menu-top").addClass("fixed");
    }
    if (scroll_menu > 700) {
      $("#menu-top").addClass("active");
    }
    else if (scroll_menu < 500) {
      $("#menu-top").removeClass("fixed");
    }
    else {
      $("#menu-top").removeClass("active");      
    }
    
    if (scroll_menu > 1200) {
      $(".back-to-top").addClass("show-menu");
    } else {
      $(".back-to-top").removeClass("show-menu");
    }
  });
 
  // BACK TO TOP
  $(".back-to-top").on("click",function () {
    $("html,body").animate({ scrollTop: 0 }, 1500);
  });

  //EFFECT IMAGE SLIDER
  if ($(".transition-thumb").length > 0) {
    $(".transition-thumb").mousemove(function (e) {
      var moveForce = 50;
      var docX = $(this).width();
      var docY = $(this).height();
      var moveX = ((e.pageX - docX / 2) / (docX / 2)) * -moveForce;
      var moveY = ((e.pageY - docY / 2) / (docY / 2)) * -moveForce;

      $(".transition-thumb .swiper-product").css(
        "transform",
        "translate(" + moveX * 2 + "px, " + moveY * 2 + "px)"
      );
    });
  }

  // 3D IMAGE SECTION
  VanillaTilt.init(document.querySelector(".headphone-img-section"), {
    max: -15,
    speed: 200,
    scale: 1.1,
  });


});

// COUNT DOWN
var countDownDate = new Date("Jan 5, 2021 24:00:00").getTime();

var x = setInterval(function () {
  var now = new Date().getTime();

  var distance = countDownDate - now;

  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // document.getElementById("countdown").innerHTML = hours + " "
  // + minutes + " " + seconds;
  document.getElementById("text-hours").innerHTML = hours;
  document.getElementById("text-minutes").innerHTML = minutes;
  document.getElementById("text-second").innerHTML = seconds;
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("text-hours").innerHTML = "EXPIRED";
    document.getElementById("text-minutes").innerHTML = "EXPIRED";
    document.getElementById("text-second").innerHTML = "EXPIRED";
    // document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);

//TABS MENU
// function openTab(evt, tabName) {
//   var i, tab, tablink;
//   tab = document.getElementsByClassName("tab");
//   for (i = 0; i < tab.length; i++) {
//     tab[i].style.display = "none";
//   }
//   tablink = document.getElementsByClassName("tablink");
//   for (i = 0; i < tablink.length; i++) {
//     tablink[i].className = tablink[i].className.replace(" active", "");
//   }
//   document.getElementById(tabName).style.display = "block";
//   evt.currentTarget.className += " active";
// }
// document.getElementById("defaultOpen").click();

