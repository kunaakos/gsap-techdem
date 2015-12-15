'use strict';

var cat = $('.cat');
var cloud = $('.cloud');
var hl1 = $('#hl-1');
var hl2 = $('#hl-2');

var t1 = new TimelineMax({
  onUpdate: updateSlider,
  delay: 1
});

t1.to(cloud, 25, { left: "-100%" }, 0 );
t1.to(cat, 5, { left: "110%", ease: Power0.easeNone }, 0)
  .to(cat, 5, { rotation: 1080, ease: Power1.easeOut }, 0)
  .to(cat, 2.5, { bottom: "60%", ease: Power1.easeOut }, 0)
  .to(cat, 2.5, { bottom: "0%", ease: Power1.easeIn }, 2.5)
  .to(cat, 5, { left: "-30%", rotation: 0, ease: Power1.easeOut }, 5)
  .to(hl1, 1.5, { opacity: 1 }, 6)
  .to(cat, 2.5, { bottom: "60%", ease: Power1.easeOut }, 5)
  .to(cat, 2.5, { bottom: "0%", ease: Power1.easeIn }, 7.5)
  .to(hl1, 1.5, { opacity: 0 }, 9)
  .to(cat, 5, { left: "110%", ease: Power0.easeNone }, 10)
  .to(cat, 5, { rotation: 1080, ease: Power1.easeOut }, 10)
  .to(cat, 2.5, { bottom: "60%", ease: Power1.easeOut }, 10)
  .to(cat, 2.5, { bottom: "0%", ease: Power1.easeIn }, 12.5)
  .to(cat, 5, { left: "-30%", rotation: 0, ease: Power1.easeOut }, 15)
  .to(cat, 2.5, { bottom: "60%", ease: Power1.easeOut }, 15)
  .to(hl2, 1.5, { opacity: 1 }, 16)
  .to(cat, 2.5, { bottom: "0%", ease: Power1.easeIn }, 17.5)
  .to(hl2, 1.5, { opacity: 0 }, 22);

function updateSlider() {
	$('.range-slider').foundation('slider', 'set_value', t1.progress()*100);
}

function gotoSliderPos() {
	t1.progress($('.range-slider').attr('data-slider'));
}

$(document).foundation({
  slider: {
    on_change: function() {
			t1.progress($('.range-slider').attr('data-slider')/100);
		}
  }
});

$('.btn-play').click(function() {
  t1.play();
});
$('.btn-pause').click(function() {
  t1.pause();
});
