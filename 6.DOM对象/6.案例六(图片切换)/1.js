var btn = document.querySelectorAll("button");
var img = document.getElementById("image");

var arr = ["ju.jpg", "ying.jpg", "hu.jpg", "bu.jpg"];

// 遍历所有按钮并添加事件监听器
btn.forEach((item, index) => {
  item.addEventListener("mousemove", () => {
    img.setAttribute("src", "img/" + arr[index]);
    // 鼠标移入时设置按钮背景为绿色
    item.style.backgroundColor = "green";
  });

  item.addEventListener("mouseout", () => {
    // 鼠标移出时恢复按钮背景颜色
    item.style.backgroundColor = "";
  });
});
