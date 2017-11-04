import moment from 'moment';

export function infoCounter() {

  const $counter = $('.js-info-counter');

  if (!$counter.length) return;

  const initYear = $counter.data('init-year');
  const initMonth = $counter.data('init-month');
  const initDay = $counter.data('init-day');

  const $yearContainer = $counter.find('.js-info-counter-year');
  const $monthContainer = $counter.find('.js-info-counter-month');
  const $dayContainer = $counter.find('.js-info-counter-day');

  const now = moment();
  const initDate = moment([initYear, initMonth, initDay]);

  const diffDuration = moment.duration(now.diff(initDate));

  const year = diffDuration.years();
  const month = diffDuration.months();
  const day = diffDuration.days();

  const checkMonth = getLength(month);
  const checkDay = getLength(day);

  const yearDigitOne = $yearContainer.children().first();
  const yearDigitTwo = $yearContainer.children().last();
  const monthDigitOne = $monthContainer.children().first();
  const monthDigitTwo = $monthContainer.children().last();
  const dayDigitOne = $dayContainer.children().first();
  const dayDigitTwo = $dayContainer.children().last();

  let splittedDigit = splitNumb(year);

  yearDigitOne.text(splittedDigit[0]);
  yearDigitTwo.text(splittedDigit[1]);

  if (checkDay <= 1) {

    dayDigitOne.text('0');
    dayDigitTwo.text(`${day}`);

  } else {

    let splittedDigit = splitNumb(day);

    dayDigitOne.text(splittedDigit[0]);
    dayDigitTwo.text(splittedDigit[1]);

  }

  if (checkMonth <= 1) {

    monthDigitOne.text('0');
    monthDigitTwo.text(`${month}`);

  } else {

    let splittedDigit = splitNumb(month);

    monthDigitOne.text(splittedDigit[0]);
    monthDigitTwo.text(splittedDigit[1]);

  }

  function splitNumb(numb) {
    return numb.toString().split('');
  }

  function getLength(number) {
    return number.toString().length;
  }
}