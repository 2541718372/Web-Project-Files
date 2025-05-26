$('button').click(function(){
	// 如果按钮已经有“座位已选”文字，则还原为“选座”
	if ($(this).text() === '座位已选') {
		$(this).text(' ').css("background-color", "");
	} else {
		// 否则，设置为“座位已选”并改变样式
		$(this).text('座位已选').css("background-color", "orange").css("color", "black");
	}
});

