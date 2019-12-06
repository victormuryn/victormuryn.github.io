// jQuery
window.$ = window.jQuery = require('jquery');

// Slick Slider
window.slick = require(`slick-carousel`);

// Slider
$(`.new__slider`).slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  dots: true,

  responsive: [{
    breakpoint: 768,
    settings: {
      slidesToShow: 2,
    }
  }, {
    breakpoint: 500,
    settings: {
      slidesToShow: 1,
    }
  }]
});
