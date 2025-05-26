var a = document.getElementById("change");
var span = document.getElementById("code");

span.innerHTML = getcode();

a.addEventListener("click",()=>{
	//1.通过调用函数触发改变
	span.innerHTML = getcode();
	//2.通过页面刷新去触发改变
	// window.location.href = "1.html";
	//3.真正的页面刷新
	//location.reload();
});

function getcode(){
	var arr = [1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f","g"]
	var str = "";
	for(var i = 0 ; i < 6 ; i++){
		var rand = Math.round(Math.random()*15);
		str += arr[rand];
	}
	return str;
}