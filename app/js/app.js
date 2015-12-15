'use strict';

var cat = $('.cat');
var cloud = $('.cloud');
var hl1 = $('#hl-1');
var hl2 = $('#hl-2');

// cat animation
var catKick = new TimelineMax({ autoRemoveChildren: false });
catKick.to(cat, 5, { left: "110%", ease: Power0.easeNone }, 'kickStart')
       .to(cat, 5, { rotation: 1080, ease: Power1.easeOut }, 'kickStart')
       .to(cat, 2.5, { bottom: "60%", ease: Power1.easeOut }, 'kickStart')
       .to(cat, 2.5, { bottom: "-20%", ease: Power1.easeIn }, 'kickStart+=2.5')
       .to(cat, 5, { left: "-30%", ease: Power1.easeNone }, 'kickBack')
       .to(cat, 5, { rotation: 0, ease: Power1.easeOut }, 'kickBack')
       .to(cat, 2.5, { bottom: "60%", ease: Power1.easeOut }, 'kickBack')
       .to(cat, 2.5, { bottom: "-20%", ease: Power1.easeIn }, 'kickBack+=2.5')
var catKickEnd = catKick.duration();

// main timeline
var t1 = new TimelineMax({
  autoRemoveChildren: false,
  onUpdate: updateSlider,
  delay: 1
});

// add cloud animation
t1.to(cloud, 25, { left: "-40%" }, 'start')

// add catKick twice
t1.add( catKick.tweenFromTo(0, catKickEnd), 'start' )
  .add( catKick.tweenFromTo(0, catKickEnd),'start+=' + catKickEnd );

// add text show/hide
t1.to(hl1, 1.5, { opacity: 1 }, 6)
  .to(hl1, 1.5, { opacity: 0 }, 11)
  .to(hl2, 1.5, { opacity: 1 }, 16)
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
