//DOM操作:是通过document的一些方法获取HTML中具体标签
//相当于精准定位
//需要搞清楚DOM操作重点：获取的结果是一个还是多个

//1.通过id获取指定标签 结果是一个
var p = document.getElementById("p1");

//innerHTML是改变标签文本内容
p.innerHTML = 123;

//2.通过标签名获取指定标签 结果一般都是多个，且为数组
var input = document.getElementsByName("input");

//3.通过class获取指定标签  结果一般都是多个，且为数组
var a = document.getElementsByClassName("abc");

//4.万能获取标签
//querySelector() 获取标签名称的第一个标签 结果为一个 且为第一个
var b = document.querySelector();
//querySelectorAll() 获取所有你要寻找的标签
var c = document.querySelectorAll("input");