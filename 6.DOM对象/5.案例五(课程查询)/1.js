//键盘按下松开事件
var input= document.getElementById("input");
var show=document.getElementById("show");

var arr=["html入门到放弃199元","CSS精通155元","CSS入门58元","JavaScript进阶55元"];


show.style.display= "none";

input.addEventListener("keyup",(e)=>{
	//当键盘按下松开时显示提示框
	show.style.display = "block"
	
	
	var str ="";
	arr.forEach((item)=>{
		//数组中的每一个与输入框输入的值去进行检验，如果找不到就返回-1
		var res = item.indexOf(input.value);
		if(res != -1){
			str +="<p>"+item+"</p>"
		}
	})
	
	if(input.value == null || str == ""){
		show.innerHTML="<p>暂无结果</p>";
	}else{
		show.innerHTML = str;
	}
	
})