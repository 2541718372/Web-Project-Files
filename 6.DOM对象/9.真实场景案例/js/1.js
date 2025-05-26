setInterval(()=>{
	$.ajax({
		url:"http://127.0.0.1:5000",
		type:"post",
		dataType: "json",
		success:function(e){
			$("#s1").html(Math.round(e.temperature,2))
			$("#s2").html(e.humidity)
			$("#s3").html(e.light_intensity)
		}
	})
})

