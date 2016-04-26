jQuery(document).ready(function() {
	var bxPause = function() {
		$('#featuresGrid .bx-progress').stop().animate({ width: '0%' }, {
			duration: 500,
			easing: 'linear'
		});
	}
	var bxStart = function() {
		$('#featuresGrid .bx-progress').stop().css({ width: '0%' }).animate({ width: '100%' }, {
			duration: 4500,
			easing: 'linear'
		});
	}
	
	$('#featuresGrid ul').hover(bxPause, bxStart);
	$('#featuresGrid .bx-stop').ready( function() {
		$('#featuresGrid .bx-pager-link, #featuresGrid .bx-controls-direction a, #featuresGrid .bx-stop').click(function() {
			$('#featuresGrid .bx-progress').hide();
		});
		$('#featuresGrid .bx-start').click(function() { $('.bx-progress').show(); bxStart(); });
	});

	$('#featuresGrid ul').bxSlider({
		adaptiveHeight: true,
		
		speed: 1000,
		autoHover: true,
		autoDelay: 2000,
		auto: 500,
		pause: 5000,
		
			onSliderLoad: function() { setTimeout(bxStart, 2000); },
			onSlideBefore: function() { bxStart(); },
		
		pager: true,
		controls: true,
		autoControls: true,
	});
});
