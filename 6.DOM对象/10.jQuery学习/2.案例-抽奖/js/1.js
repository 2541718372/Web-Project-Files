var liArr = ["代金券1", "代金券2", "代金券3", "代金券4", "代金券5", "代金券6", "代金券7", "代金券8"];
var speed = 100;
var liIndex = -1;

// 创建映射数组，根据指定的顺序来存储索引
var liArrIndex = [0, 1, 2, 4, 7, 6, 5, 3];

$("#list").on("click", function () {
    var liNumber =  Math.floor(Math.random() * 8 + 16);
    var intervalId = setInterval(function () {
        // 移除当前高亮
        if (liIndex >= 0) {
            $(".li").eq(liArrIndex[liIndex]).css('background-color', '#ccc');
        }

        // 计算下一个高亮的代金券的索引
        liIndex = (liIndex + 1) % liArrIndex.length;

        // 高亮新的代金券
        $(".li").eq(liArrIndex[liIndex]).css('background-color', '#8c8885');

        // 检查是否停止
        if (liNumber-- <= 0) {
            clearInterval(intervalId);
            setTimeout(function () {
                // 使用映射数组中的索引来获取正确的代金券名称
                alert("恭喜您获得：" + liArr[liArrIndex[liIndex]]);
            }, 0);
        }
    }, speed);
});
