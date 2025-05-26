$(".div2").click(function() {
    if ($(".div1").hasClass("change")) {
      
        $(".div1").animate({ marginRight: "0" }, 500).removeClass("change").show();
        $(".div2").animate({ marginRight: "0" }, 500);
    } else {
       
        $(".div1").animate({ marginRight: "-200px" }, 500).addClass("change").hide(500);
        $(".div2").animate({ marginRight: "-198px" }, 500);
    }
});
