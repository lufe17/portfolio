// STICKY HEADER
document.addEventListener("scroll", function () {
   const navbar = document.querySelector(".navbar");

   if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
   } else {
      navbar.classList.remove("scrolled");
   }
});

//PORTFOLIO SLIDER
jQuery(function ($) {
   $(document).ready(function () {
      $('.project-slider').slick({
         infinite: false,
         slidesToShow: 4,
         slidesToScroll: 4,
         arrows: true,
         rows: 2,
         nextArrow: '<div class="next-arrow"><img src="../../portfolio/assets/img/next-arrow.svg" alt="Next Arrow"></div>',
         prevArrow: '<div class="prev-arrow"><img src="../../portfolio/assets/img/prev-arrow.svg" alt="Prev Arrow"></div>',
         responsive: [{
               breakpoint: 991,
               settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3
               }
            },
            {
               breakpoint: 767,
               settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  rows: 1
               }
            }
         ]
      });
   });
});