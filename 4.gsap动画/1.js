// gsap.to(".cookie",{x:200})
/* gsap.fromTo(".cookie",{x:-50,opacity:0},{x:0,opacity:1})
gsap.fromTo(".cookie-container",{scale:0},{scale:1,ease:"elastic.out(1,0.4)"})
gsap.fromTo(".text",{x:50,opacity:0},{x:0,opacity:1}) */

var t1 = gsap.timeline({default:{duration:0.75,ease:"power1.out"}})
t1.fromTo(".cookie-container",{scale:0},{scale:1,ease:"elastic.out(1,0.4)",duration:0.75})
t1.fromTo(".cookie",{x:-50,opacity:0,rotate:'45deg'},{x:0,opacity:1,rotate:'0deg'})
t1.fromTo(".text",{x:50,opacity:0},{x:0,opacity:1},"<")