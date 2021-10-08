jQuery(function($){
	'use strict';

	// -------------------------------------------------------------
	//   Basic Navigation
	// -------------------------------------------------------------
	(function () {
		var $frame1  =$('.item-carousel-pad-2');
		var $slidee = $frame1.children('ul').eq(0);
		var $wrap   = $frame1.parent();
		$frame1.sly({
			horizontal:1,
			itemNav:'basic',
			smart:1,
			activateOn:'click',
			mouseDragging:1,
			touchDragging:1,
			releaseSwing:0,
			startAt:0,
			scrollBar:$wrap.find('.scrollBarSelector-2'),
			scrollBy:1,
			pagesBar:$wrap.find('.pages'),
			activatePageOn:'click',
			speed:1600,
			elasticBounds:1,
			easing:'easeOutExpo',
			dragHandle:1,
			dynamicHandle:1,
			clickBar:1,
			prevPage:$wrap.find('.main-prev-js-2'),
			nextPage:$wrap.find('.main-next-js-2')

		});

		$(window).resize(function(){
			$frame1.sly("reload");
			$frame2.sly("reload");
		});



		var $frame2  =$('.item-carousel-pad-3');
		var $slidee = $frame2.children('ul').eq(0);
		var $wrap   = $frame2.parent();
		$frame2.sly({
			horizontal:1,
			itemNav:'basic',
			smart:1,
			activateOn:'click',
			mouseDragging:1,
			touchDragging:1,
			releaseSwing:0,
			startAt:0,
			scrollBar:$wrap.find('.scrollBarSelector-3'),
			scrollBy:1,
			pagesBar:$wrap.find('.pages'),
			activatePageOn:'click',
			speed:1600,
			elasticBounds:1,
			easing:'easeOutExpo',
			dragHandle:1,
			dynamicHandle:1,
			clickBar:1,
			prevPage:$wrap.find('.main-prev-js-3'),
			nextPage:$wrap.find('.main-next-js-3')
		});







	}());





});