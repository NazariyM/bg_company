const Draggable = require('Draggable');
import { css } from '../modules/dev/helpers';

export function initTimeline() {
  const $timeline = $('.js-timeline');

  if (!$timeline.length) return;

  const $timelineTrack = $timeline.find('.timeline__track');
  const $timelineItem = $timelineTrack.children();

  let trackWidth = 0;
  const timelineWidth = $timeline.outerWidth();

  $timelineItem.each(function () {
    trackWidth += $(this).outerWidth();
  });

  $timelineTrack.css('width', `${trackWidth - timelineWidth - 10 + 'px'}`);

  const $timelineBtn = $timeline.find('.timeline__range-btn');
  const element = document.getElementById('timeline-range-btn');
  const rangeWidth = $('.timeline__range').outerWidth();
  const btnWidth = $('.timeline__range-btn').outerWidth();
  new Draggable(element, {
    limit: {
      y: 0,
      x: [0, rangeWidth - btnWidth],
    },
    onDrag: function () {
      let btnPos = $timelineBtn.css('left');
      btnPos = btnPos.slice(0, -2);
      btnPos = (btnPos / (rangeWidth - 40)) * 100;
      $timelineTrack.css('transform', `translate3d(-${btnPos + '%'}, 0px, 0px)`);
    },
    onDragStart: () => {
      $timelineBtn.addClass(css.active);
    },
    onDragEnd: () => {
      $timelineBtn.removeClass(css.active);
    }
  });
}