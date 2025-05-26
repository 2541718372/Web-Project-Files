var smallImgs = document.querySelectorAll('.smal');
var li = document.querySelectorAll('li');
var imgList = ["img/孙尚香.png", "img/孙膑.png", "img/典韦.png", "img/露娜.png", "img/诸葛亮.png", "img/杨玉环.png", "img/姬小满.png"];
var imgList1 = ["img/孙尚香_1.png", "img/孙膑_1.png", "img/典韦_1.png", "img/露娜_1.png", "img/诸葛亮_1.png", "img/杨玉环_1.png", "img/姬小满_1.png"];
var currentImg = smallImgs[0]; // 初始化currentImg为第一个图片元素

// 设置第一个图片元素默认显示为大图
currentImg.src = imgList1[0];
currentImg.style.width = "224px";
currentImg.index = 0; // 设置索引值

smallImgs.forEach(function (e, i) {
    e.addEventListener("mouseover", function () {
        if (currentImg) {
            currentImg.src = imgList[currentImg.index];
            currentImg.style.width = "69px";
        }
        this.src = imgList1[i];
        this.style.width = "224px";
        currentImg = this;
        currentImg.index = i;
    });
});

// 鼠标离开任意一个li控件时，保持显示长图状态
li.forEach(function (li) {
    li.addEventListener('mouseout', function () {
        if (currentImg) {
            currentImg.src = imgList1[currentImg.index];
            currentImg.style.width = "224px";
        }
    });
});
