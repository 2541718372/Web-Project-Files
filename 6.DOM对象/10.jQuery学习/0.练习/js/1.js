//1.当页面加载完成之后,触发一些事情
// JavaScript写法
// window.onload=function(){
// 	alert("NewWindows for JavaScript");
// }

//jQuery写法
// $(function(){
// 	alert("NewWindows for jQuery");
// })


//2.jquery基础选择器
// Javascript写法
 
// var div = document.getElementById("div");
// var p = document.getElementsByClassName("p");
// var span = document.getElementsByTagName("span");

//修改标签文本内容
// div.innerHTML = "789";
//修改标签属性
// div.style.color = "red";

//jQuery写法
$("#div").html("888").css("color","blueviolet");
$(".p");
$("span");
 