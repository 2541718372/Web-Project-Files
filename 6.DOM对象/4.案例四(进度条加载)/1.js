var btn = document.getElementById("btn");
var div = document.getElementById("div2");
var span = document.getElementById("span");

var num = 0,Timer = null;
btn.addEventListener("click",()=>{
	
	Timer = setInterval(()=>{
		num++;
		span.innerHTML = Math.round(num/4) + "%";
		span.style.marginLeft = Math.round(num/2.5) + "px"
		div.style.width = num+"px";
		div.style.background = "#3399FF";
		
		if(num===400){
			clearInterval(Timer);
		}
	},7)
})