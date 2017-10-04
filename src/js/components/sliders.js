import slick from 'slick-carousel';
import { svgIcon } from '../modules/dev/helpers';

export function initSliders() {
  const iconLeft = svgIcon('arr-l');
  const iconRight = svgIcon('arr-r');

  let defaultOptions = {
    slidesToShow: 2,
    slidesToScroll: 2,
    speed: 800,
    prevArrow: `<button type="button" class="slider-btn slider-btn_prev">${iconLeft}</button>`,
    nextArrow: `<button type="button" class="slider-btn slider-btn_next">${iconRight}</button>`,
    dots: false,
    cssEase: 'ease',
    useTransform: true,
    infinite: true,
    accessibility: false,
    dotsClass: 'slider-dots'
  };

  const $awardsSlider = $('.js-awards-slider');
  $awardsSlider.slick($.extend({}, defaultOptions, {
    dots: true
  }));

  const $goalSlider = $('.js-goal-slider');
  $goalSlider.slick($.extend({}, defaultOptions, {
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    fade: true
  }));

  const $favsSlider = $('.js-favs-slider');
  $favsSlider.slick($.extend({}, defaultOptions, {
    slidesToShow: 5,
    slidesToScroll: 5
  }));

  const $historySlider = $('.js-history-slider');
  $historySlider.slick($.extend({}, defaultOptions, {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true
  }));

  const $formerFeedsSlider = $('.js-former-feeds-slider');
  $formerFeedsSlider.slick($.extend({}, defaultOptions, {
    dots: true
  }));

  const $newSlider = $('.js-new-slider');
  $newSlider.slick($.extend({}, defaultOptions, {
    slidesToShow: 4,
    slidesToScroll: 4
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