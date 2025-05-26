$(document).mousemove(function(e){
	var x = e.pageX;
	var y = e.pageY;
	$("div").css("left",x-50).css("top",y-50);
})