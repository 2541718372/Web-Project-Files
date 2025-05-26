var buttton = document.querySelector("button");
var nav = document.querySelector("nav");
var p = document.querySelector("p");


buttton.addEventListener('click',()=>{
	nav.classList.toggle('nav-slide');
	p.classList.toggle('fade');
})