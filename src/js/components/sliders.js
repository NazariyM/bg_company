import slick from 'slick-carousel';
import { svgIcon } from '../modules/dev/helpers';

export function initSliders() {
  const iconLeft = svgIcon('arr-l');
  const iconRight = svgIcon('arr-r');

  let defaultOptions = {
    slidesToShow: 2,
    slidesToScroll: 2,
    speed: 400,
    prevArrow: `<button type="button" class="slider-btn slider-btn_prev">${iconLeft}</button>`,
    nextArrow: `<button type="button" class="slider-btn slider-btn_next">${iconRight}</button>`,
    dots: false,
    cssEase: 'ease',
    useTransform: true,
    infinite: true,
  };

  const $awardsSlider = $('.js-awards-slider');
  $awardsSlider.slick($.extend({}, defaultOptions, {
    dots: true
  }));

  const $goalSlider = $('.js-goal-slider');
  $goalSlider.slick($.extend({}, defaultOptions, {
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000
  }));

  const $favsSlider = $('.js-favs-slider');
  $favsSlider.slick($.extend({}, defaultOptions, {
    slidesToShow: 5,
    slidesToScroll: 5
  }));

  const $mobileSlider = $('.js-mobile-slider');
  $mobileSlider.slick($.extend({}, defaultOptions, {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    adaptiveHeight: true,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 767,
        settings: 'unslick'
      }
    ]
  }));
}