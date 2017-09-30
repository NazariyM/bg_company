import './noTouch';
import CTabs from './c-tabs';
import { initTimeline } from './timeline';
import { Timer } from './initTimer';
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
  }
}

/** tabs init */
const $tabs = $('.c-tabs');
$tabs.each((index, el) => {
  const tab = new CTabs($(el));
  tab.init();
});

/** Export initialized common scripts by default */
export default Common.init();