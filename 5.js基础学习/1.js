//1.弹出框和输出
/* alert("程序运行正常");
console.log(1+2+3+"尝试继续运行!"); */

//2.输入=================================================================
/* var a=prompt("请输入你的姓名:");
alert(a);
console.log(a); */

//3.变量=================================================================
/* var    //全局变量
let   //局部变量   /于for循环和函数中使用 */

// 4.数据类型============================================================
/* var a1 = 10;
var a2 = 0.5;
var a3 = true;
var a4 = "asdf"; */

//isNan();  检测是否为数字  是则返回false  否则返回true
/* 
alert(isNaN(a1));

//获取字符串类型
alert(a4.length);

//访问字符串,从下标0开始
alert(a4[2]); */

//5.类型转换  ========================================================
//字符串 + 数字  ==> 字符串
//将数字转为字符串 + ""

/* a1 = a1 + "";
a2 = parseInt(a2);  //将小数转换为整数
a1 = parseFloat(a1); //将整数转小数 */

//6.运算符于C语言相同
//7.三目运算符
/* alert(3<5?"正确":"错误"); */


//题目
//交换两个变量的值
//1.使用临时变量
/* let x1 = 1,x2 = 2,temp=0; */

/* temp=x1;
x1=x2;
x2=temp;

console.log(x1,x2); */

//2.不使用临时变量
/* x1 = x1 + x2;  //3
x2 = x1 - x2;  //2
x1 = x1 - x2;  // 1

console.log(x1,x2); */

/* x1 = x1^x2;
x2 = x1^x2;
x1 = x1^x2;
console.log(x1,x2);
 */

//8.判断闰年 ==================================================================================================================
/* var year =2024;

if(year%4 == 0 && year%100!=0 || year/400==0){
	alert("闰年!");
}else{
	alert("不是闰年!");
}
 */


// 9.判断
// var year = prompt("请输入一个年份:");
// if ( year%4==0 && year%100!=0 || year%400==0 ) {
// 	alert("你输入的年份是闰年!");
// } else{
// 	alert("你输入的年份是平年!");
// }

// 10.switch
// 输入一个成绩,如果成功在60-70之间就输出'D',70-80之间就输出'C',80-90之间就输出'B',90-100之间就输出'A',60以下输出"E"

// var grade = prompt("请输入你的成绩:");
// switch (parseInt(grade/10)){
// 	case 6:
// 		alert("D");
// 		break;
// 	case 7:
// 		alert("C");
// 		break;
// 	case 8:
// 		alert("B");
// 		break;
// 	case 9:
// 		alert("A");
// 		break;
// 	default:
// 		alert("E");
// 		break;
// }

// 11.for循环
// 通过循环打印出九九乘法表
// var s = "";
// for (var i = 1; i <= 9; i++) {
// 	for (var j = 1; j <=i; j++) {
// 		s += i + "x" + j + "=" + i*j + " ";
// 	}
// 	console.log(s);
// 	s = "";
// }

//12.数组

//创建数组
// var arr1 = [];
// var arr2 = ["1","2","3"];

//数组的循环
// for(let i in arr2){
// 	alert(arr2[i]);
// }
//等同于以下内容
// for (var i = 0;i<arr2.length;i++) {
// 	alert(arr1[i]);
// }

//数组的访问
// alert(arr2[1]);

//数组的删除:splice(从哪个位置开始,个数)
// arr2.splice(3.1)
// console.log(arr2)

//数组的修改
// arr2[3] = "1234";

//数组的添加:push()

// for(let i in arr2){
// 	arr1.push(arr2[i])
// }
// console.log(arr1);

//13.函数

//函数的定义
//基本语法
//function 函数名()参数{
	//return  返回值
//}

//有一个岛，第一个月放1只兔，第二个月放1只兔子，第三个月发现新增了2只兔子，第四个月发现有新增了3只兔子，问第九个月新增了？只兔子？

// function f1(m) {
//     if (m == 1 || m == 2) {
//         return 1;
//     } else {
//         return f1(m - 1) + f1(m - 2);
//     }
// }

// let num = f1(9);
// alert("第九个月新增了 " + num + " 只兔子。");


//计算出1-10之前数的和用函数嵌套编写

// function js (j){
// 	var sum = 0;
// 	for(let n=1;n<=j;n++){
// 		if(n%2!=0){
// 			 sum+=n;
// 		}
// 	}
// 	return sum;
// }
// alert(js(10));

//14.对象
// var obj1 = {} //空对象
// var obj2 = {name:"张青山",age:19,sex:"男"}

//如果在对象中定义函数 需要将函数名提到冒号前
// var obj3 = {
// 	name:"张青山",
// 	age:20,
// 	sex:"男",
// 	abc:function (){
// 		alert("我是对象中的abc函数！");
// 	}
// }

//如果需要适用对象，需要调用这个对象
// obj3.name;
// obj3.abc();


//15.Math对象
// let a = 5, b = -6 , c = 3.68;
// let a1 = Math.PI;  //圆周率
// let a2 = Math.abs(b);  //绝对值
// let a3 = Math.ceil(c);  //向上取整，最接近这个小数且大于这个小数的整数
// let a4 = Math.floor(c); //向下取整，最接近这个小数且小于这个小数的整数
// let a5 = Math.round(c); //四舍五入
// let a6 = parseInt(Math.random()*10)//随机数 默认是随机0-1的小数
// let a7 = Math.max(a,b,c);   // 最大值
// let a8 = Math.min(a,b,c);  // 最小值

// alert(a1);

//16.Data对象 时间
// function Time(){
//     var date = new Date;  //Tue Apr 09 2024 14:35:43 GMT+0800 (中国标准时间)
//     let year = date.getFullYear();
//     let month = date.getMonth() + 1;
//     let day = date.getDate();
//     let hour = date.getHours();
//     let minute = date.getMinutes();
//     let second = date.getSeconds();
//     let res = year+"-"+month+"-"+day+"-"+hour+":"+minute+":"+second;
//     return res;
// }
// var a = Time();
// alert(a);

