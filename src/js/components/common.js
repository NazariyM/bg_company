import './noTouch';
import './popupInit';
const Flatpickr = require('flatpickr');
const Russian = require('flatpickr/dist/l10n/ru.js').ru;
import fancyBox from '@fancyapps/fancybox';
import CTabs from './c-tabs';
import { infoCounter } from './initCounter';
import { initTimeline } from './timeline';
import { initSliders } from './sliders';
import { initContactMaps } from './contactMaps';
import Dot from './initDot';
import objectFitImages from 'object-fit-images';
/**
 * Website's common scripts.
 *
 * @module Common
 */

export class Common {
  /**
   * Initialize Main page scripts.
   */
  static init() {
    Dot.init();
    objectFitImages();
    initTimeline();
    initSliders();
    infoCounter();
    // initContactMaps();
  }
}

/** tabs init */
const $tabs = $('.c-tabs');
$tabs.each((index, el) => {
  const tab = new CTabs($(el));
  tab.init();
});

/** calendar */
const dateInput = '.js-calendar';
new Flatpickr(dateInput, {
  inline: true,
  locale: Russian,
  animate: false
});

/** image zoom */
const $zoomImg = $('[data-fancybox]');
$zoomImg.fancybox();

/** Export initialized common scripts by default */
export default Common.init();