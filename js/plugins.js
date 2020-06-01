/*========== NAVBAR TRANSPARENT TO SOLID ==========*/
$(document).ready(function () {
  checkScroll();
  $(window).scroll(checkScroll);
});

function checkScroll() {
  if ($(window).scrollTop() >= 300) {
    $(".navbar").addClass("solid");
  } else {
    $(".navbar").removeClass("solid");
  }
}

/*========== ADD SOLID CLASS TO NAVBAR WHEN TOGGLED ==========*/
$(document).ready(function () {
  checkScroll();
  $(window).scroll(checkScroll);
  $(".navbar-toggler").click(function () {
    if ($(window).scrollTop() <= 300) {
      $("nav.navbar").toggleClass("solid-toggle");
    }
  });
});
/*========== CLOSE MOBILE MENU ON CLICK & SMOOTH SCROLL TO LINK ==========*/
$(document).on("click", 'a[href^="#"]', function (event) {
  event.preventDefault();
  $(".navbar-toggler").addClass("collapsed");
  $("#navbarResponsive").removeClass("show");
  setTimeout(function () {
    $("nav.navbar").removeClass("solid-toggle");
  }, 300);
  $("html, body").animate(
    {
      scrollTop: $($.attr(this, "href")).offset().top,
    },
    1000
  );
});
/*========== BOUNCING DOWN ARROW ==========*/
$(document).ready(function () {
  $(window).scroll(function () {
    $(".arrow").css("opacity", 1 - $(window).scrollTop() / 250);
  });
});
/*========== LIGHTBOX IMAGE GALLERY ==========*/
$(document).ready(function () {
  lightbox.option({
    resizeDuration: 600,
    wrapAround: true,
    imageFadeDuration: 500,
  });
});
/*========== MEET THE TEAM CAROUSEL ==========*/
$(document).ready(function () {
  $("#team-carousel").owlCarousel({
    autoplay: true,
    autoplayHoverPause: true,
    loop: true,
    autoplayTimeout: 8000,
    smartSpeed: 1200,
    dotsSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  });
});
/*========== SKILLS COUNTER ==========*/

/*========== CLIENTS CAROUSEL ==========*/

/*========== TOP SCROLL BUTTON ==========*/

/*========== MAKE ALL ANIMATION "FADEINUP" ON MOBILE ==========*/

/*========== WAYPOINTS ANIMATION DELAY ==========*/
//Original Resource: https://www.oxygenna.com/tutorials/scroll-animations-using-waypoints-js-animate-css
$(function () {
  function onScrollInit(items, trigger) {
    items.each(function () {
      var osElement = $(this),
        osAnimationClass = osElement.attr("data-animation"),
        osAnimationDelay = osElement.attr("data-delay");
      osElement.css({
        "-webkit-animation-delay": osAnimationDelay,
        "-moz-animation-delay": osAnimationDelay,
        "animation-delay": osAnimationDelay,
      });
      var osTrigger = trigger ? trigger : osElement;
      osTrigger.waypoint(
        function () {
          osElement.addClass("animated").addClass(osAnimationClass);
        },
        {
          triggerOnce: true,
          offset: "70%",
        }
      );
    });
  }
  onScrollInit($(".os-animation"));
  onScrollInit($(".staggered-animation"), $(".staggered-animation-container"));
});

/*========== CONTACT FORM INPUT VALIDATION ==========*/
//Original Resource: https://bootstrapious.com/p/how-to-build-a-working-bootstrap-contact-form
$(function () {
  $("#contact-form").validator();
  $("#contact-form").on("submit", function (e) {
    if (!e.isDefaultPrevented()) {
      var url = "contact/contact.php";
      $.ajax({
        type: "POST",
        url: url,
        data: $(this).serialize(),
        success: function (data) {
          var messageAlert = "alert-" + data.type;
          var messageText = data.message;
          var alertBox =
            '<div class="alert ' +
            messageAlert +
            ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' +
            messageText +
            "</div>";
          if (messageAlert && messageText) {
            $("#contact-form").find(".messages").html(alertBox);
            $("#contact-form")[0].reset();
          }
        },
      });
      return false;
    }
  });
});
