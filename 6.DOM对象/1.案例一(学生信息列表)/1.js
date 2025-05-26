//获取到所有的输入框,且结果为数组·[input,pint,input...]
//姓名 input[0] = 年龄 inpt[1] 手机号 input[2]
var input = document.getElementsByTagName("input");

//如果是通过id获取的话,可以使用$$快速提示代码
var sex = document.getElementById("sex");
var btn = document.getElementById("btn");
//点击事件

var tbody = document.querySelector("tbody");

// 考虑如何将用户输入的内容存放起来，多个对象存放在一个数组当中
let  a = [];
// a = [lname:"张=",age:18,sex:"男"},[name:"李四",age:18,sex:"男”}]

btn.addEventListener("click",()=>{
	let obj = {name:input[0].value,age:input[1].value,sex:sex.value,phone:input[2].value};
	a.push(obj);
	console.log(a);
	
	let tr = "";
	a.forEach((data,index)=>{
		tr += "<tr>" +
					"<td>"+ data.name + "</td>"+
					"<td>"+ data.age + "</td>"+
					"<td>"+ data.sex + "</td>" +
					"<td>"+ data.phone+"</td>"+
					"<td>删除</td>"+
		"</tr>"
		tbody.innerHTML = tr;
	})
	
})