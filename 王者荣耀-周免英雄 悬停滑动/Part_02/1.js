$("li").mouseenter(function(){
	$(this).animate({width:224},200,"linear").find(".small").fadeOut(10).siblings().fadeIn(10);
	$(this).siblings().animate({width:69},200,"linear").find(".large").fadeOut(10).siblings().fadeIn(10);
})