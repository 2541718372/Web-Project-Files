var btn = document.getElementById("btn2");

btn.addEventListener("click",()=>{
	var r = confirm("你确定要支付吗?");
	if(r){
		window.location.href = "2.html";
	}
})