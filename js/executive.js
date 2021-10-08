$(document).ready(function(){




	//IMAGE FADE PRELOAD
	$.fn.preload=function (fn){
	var len=this.length, i=0;
	return this.each(function(){
		var tmp=new Image,self=this;
		if (fn) tmp.onload = function (){
			fn.call(self, 100 * ++i / len, i === len);
		};
		tmp.src = this.src;
		$(this).addClass("item-visible");
	});
	};
	$('img').preload(function(perc,done){});
	//IMAGE FADE PRELOAD


	$("body").on("click",".sidebar-btn",function(){
		$(".short-about-pad").stop().animate({left:40,opacity:0},300,function(){
			$(".DARK-GRAY #LEFT-BAR").stop().animate({width:"65%"},800,"easeOutQuart",function(){});
			$(".close-btn").css({display:"block",right:10}).stop().animate({opacity:1,right:53},400);
			$(".long-about-pad").css({display:"block"});
			$(".long-about-pad").stop().animate({opacity:1},700);
		});
		return false;
	});

	$("body").on("click",".close-btn",function(){
			$(".long-about-pad").stop().animate({opacity:0},700,function(){
				$(".long-about-pad").css({display:"none"});
			});
			$(".close-btn").stop().animate({opacity:0,right:10},400,function(){
				$(this).css({display:"none"});
				$(".DARK-GRAY #LEFT-BAR").stop().animate({width:"321"},800,"easeOutQuart",function(){
					$(".short-about-pad").stop().animate({left:0,opacity:1},300,function(){});
				});
			});
		return false;
	});

	$('a[href*=#]:not([href=#])').click(function(){
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		  var target = $(this.hash);
		  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		  if (target.length) {
			$('html,body').animate({
			  scrollTop: target.offset().top
			}, 1200);
			return false;
		  }
		}
	});

	$(".tb").each(function(){
		$(this).attr("target","_blank");
	});

	var getAlt="",getTitle="";
	$("body").on("mouseenter",".hta",function(){
		tag=$(this);
		getAlt=tag.attr("alt");
		getTitle=tag.attr("title");
		tag.attr("alt","");
		tag.attr("title","");
	});

	$("body").on("mouseleave",".hta",function(){
		tag=$(this);
		tag.attr("alt",getAlt);
		tag.attr("title",getTitle);
	});


	/*=======================*/
	var peopleCarousel=$(".stuff-list-carousel").owlCarousel({
		items:3,
		navigation:true,
		slideSpeed:800,
		transitionStyle:"fadeUp",
		responsive:true,
		afterAction:function(elem){}
	});

	$(".arrow-prev-place").click(function(){
		peopleCarousel.trigger('owl.prev');
		return false;
	});
	$(".arrow-next-place").click(function(){
		peopleCarousel.trigger('owl.next');
		return false;
	});

	/*=======================*/


	/*=======================*/
	var mainSlider=$(".main-carousel").owlCarousel({
		items:1,
		navigation:true,
		slideSpeed:800,
		transitionStyle:"fadeUp",
		responsive:true,
		singleItem:true,
		afterAction:function(elem){}
	});
	$(".main-prev-js").click(function(){
		mainSlider.trigger('owl.prev');
		return false;
	});
	$(".main-next-js").click(function(){
		mainSlider.trigger('owl.next');
		return false;
	});
	/*=======================*/





	/*=======================*/
	var ddTeacher1=$(".home-slide").owlCarousel({
		items:1,
		navigation:true,
		slideSpeed:800,
		singleItem:true,
		transitionStyle:"fadeUp",
		responsive:true,
		afterAction:function(elem){}
	});
	$(".main-home-slide-prev").click(function(){
		ddTeacher1.trigger('owl.prev');
		return false;
	});
	$(".main-home-slide-next").click(function(){
		ddTeacher1.trigger('owl.next');
		return false;
	});
	/*=======================*/


	/*SEARCH FUNCTIONALITY*/
	$("body").on("click",".search-symb",function(e){
		showSearch();
		e.preventDefault();
		e.stopPropagation();
		return false;
	});

	$("body").on("click",".search-bar",function(e){
		e.preventDefault();
		e.stopPropagation();
		return false;
	});

	$("body").click(function(){
		hideShearch();
	});

	function showSearch(){
		$(".search-bar").css({display:"block"}).stop().animate({opacity:1},300);
	}

	function hideShearch(){
		$(".search-bar").stop().animate({opacity:0},300,function(){
			$(this).css({display:"none"});
		});
	}

	$("body").on("click",".search-btn-cell",function(){
		getInputVal=$(this).closest(".search-bar").find(".default-search-inp").val();
	});

	$(".default-search-inp").keyup(function(e){
		if(e.keyCode == 13){
			if ($(this).val()!=""){
				getVal=$(this).val();
			}
			else{

			}
		}
		return false;
	});
	/*END SEARCH FUNCTIONALITY*/


	// DROP DOWN
	$("body").on("mouseenter",".top-right-two-col-left",function(){
		dropDownShow();
	});

	$("body").on("mouseleave",".top-right-two-col-left",function(){
		dropDownHide();
	});

	function dropDownShow(){
		$(".dd").css({display:"block"}).stop().animate({opacity:1},300);
	}

	function dropDownHide(){
		$(".dd").stop().animate({opacity:0},300,function(){
			$(this).css({display:"none"});
		});
	}
	// END DROP DOWN


	//MENU ACCORD
	$("body").on("click",".accord-cat-link",function(event){
 		if ($(this).find(".menu-arrow").attr("class")!="menu-arrow openArrow"){
			$(".accord-menu-item").each(function(){
				$(this).find(".sub-cat-list-cell").stop().animate({height:0},300);
				$(this).find(".menu-arrow").removeClass("openArrow");
			});
			$(".sub-cat-list-cell-height-detect-SCROLL").mCustomScrollbar("update");
			$(".sub-cat-list-cell-height-detect-SCROLL").mCustomScrollbar("scrollTo","top");
			$(this).closest(".accord-menu-item").find(".sub-cat-list-cell").stop().animate({height:300},300);
			$(this).closest(".accord-menu-item").find(".menu-arrow").addClass("openArrow");
		}else{
			$(".accord-menu-item").each(function(){
				$(this).find(".sub-cat-list-cell").stop().animate({height:0},300);			
			});
			$(this).closest(".accord-menu-item").find(".menu-arrow").removeClass("openArrow");
		}
		return false;
	});
	//END MENU ACCORD



	$(".sub-cat-list-cell-height-detect-SCROLL").mCustomScrollbar({
		autoHideScrollbar:true,
		theme:"light-thin",
		advanced:{updateOnContentResize: true},
		mouseWheelPixels:600,
		scrollSpeed: 1
	});

	$(".LEFT-BAR-SCROLL-PLACE").mCustomScrollbar({
		autoHideScrollbar:true,
		theme:"light-thin",
		advanced:{updateOnContentResize: true},
		mouseWheelPixels:300,
		scrollSpeed: 1
	});



	function resizeRightSidebar(){
		$(".RIGHT-SIDEBAR-SCROLL").css({height:$(window).height()-93});
	}

	resizeRightSidebar();

	$(window).resize(function(){
		resizeRightSidebar();
	});

	$(".RIGHT-SIDEBAR-SCROLL").mCustomScrollbar({
		autoHideScrollbar:true,
		theme:"light-thin",
		advanced:{updateOnContentResize: true},
		mouseWheelPixels:600,
		scrollSpeed: 1
	});

	$(".def-check").each(function(){
		if ($(this).prop('checked')==true){
			$(this).closest(".check-row").addClass("for-check");
		}else{
			$(this).closest(".check-row").removeClass("for-check");
		}
	});

	$("body").on("click",".check-row",function(){
		if ($(this).find(".def-check").prop("checked")==true){
			$(this).addClass("for-check");
		}else{
			$(this).removeClass("for-check");
		}
	});




	setTimeout(function(){
		$('.all-news-list').masonry({
		  itemSelector:'.all-news-item',
		  singleMode:false,
		  isResizable:true,
		  isAnimated:true,
			  animationOptions:{ 
			  queue: false, 
			  duration: 500
		  }
		});
	},300);




 


});