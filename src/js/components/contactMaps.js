export function initContactMaps() {

  const $mapsBlock = $('.contact-maps');
  if (!$mapsBlock.length) return;

  const samara = [53.18961457121754, 50.11800699999997];
  const togliatti = [53.515948070985026, 49.2798334999999];
  const ijevsk = [56.86817706781662, 53.27362649999997];

  ymaps.ready(init);

  function init() {
    const contactMap1 = new ymaps.Map('contact-map-1', {
      center: samara,
      zoom: 15,
      controls: []
    });
    const samaraBalloon = new ymaps.Placemark(samara, {
      balloonContent: 'Самара, ул. Красноармейская, 72'
    });
    contactMap1.geoObjects.add(samaraBalloon);

    const contactMap2 = new ymaps.Map('contact-map-2', {
      center: togliatti,
      zoom: 16,
      controls: []
    });
    const togliattiBalloon = new ymaps.Placemark(togliatti, {
      balloonContent: 'Тольятти, ул. Юбилейная, 31И оф. 301'
    });
    contactMap2.geoObjects.add(togliattiBalloon);

    const contactMap3 = new ymaps.Map('contact-map-3', {
      center: ijevsk,
      zoom: 16,
      controls: []
    });
    const ijevskBalloon = new ymaps.Placemark(ijevsk, {
      balloonContent: 'г. Ижевск, ул. 10 лет октября, д.60'
    });
    contactMap3.geoObjects.add(ijevskBalloon);
  }
}