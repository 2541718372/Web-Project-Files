let smallImg = document.getElementById("smallImg");
let smallDiv = document.getElementById("smallDiv");
let bigDiv = document.getElementById("bigDiv");
let bigImg = document.getElementById("bigImg");

smallImg.onmouseover = function(){
	smallDiv.style.display = 'block';
	bigDiv.style.display = 'block';
}

smallImg.onmouseout = function(){
	smallDiv.style.display = 'block';
	bigDiv.style.display = 'block';
}
smallImg.onmousemove = function(e){
	var e = e || window.event;
	var x = e.clientX-50;
	var y = e.clientY-50;
	
	if(x>=200){
		x = 200;
	}
	if(x<=0){
		x = 0;
	}
	
	if(y>=200){
		x = 200;
	}
	if(y<=0){
		x = 0;
	}
	smallDiv.style.left = x+"px";
	smallDiv.style.top = y+"px";
	
	bigImg.style.left = -3*x + "px";
	bigImg.style.top = -3*y + "px";
}