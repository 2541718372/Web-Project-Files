var btn = document.querySelectorAll("div img");
var img = document.getElementById("image");

var arr = ["ju.jpg", "ying.jpg", "hu.jpg", "bu.jpg"];

// 遍历所有按钮并添加事件监听器
btn.forEach((item, index) => {
  item.addEventListener("mousemove", () => {
    img.setAttribute("src", "img/" + arr[index]);
    
  });
});
