$(function(){
	$(".container .sideBar").find("ul").on("click",function(){
		switch($(this).index()){
			case 0:
					$(".content").empty();
					var html = '<div class="content_left"></div><div class="content_middle"></div><div class="content_right"></div>';
					$(".content").html(html)
			break;
			case 1:
				$(".content").empty();
				window.location.href = "personalResume.html";
			break;
			case 2:
				$(".content").empty();
				$(".content").html("<h1>sorry,敬请期待</h1>");
			;break;
			case 3:
				$(".content").empty();
				$(".content").html("<h1>sorry,敬请期待</h1>");
			break;
		};
	})
	var num = 0;
	setInterval(function(){
		if(num>6){
			num = 0;
		}
		$('.b_con img').eq(num).fadeIn(400).siblings().fadeOut(400);
		$('.b_btn li').eq(num).css("background","blue").siblings().css("background","#fff");
		num++
	},3000);
	$('.b_btn ul li').click(function(){
			var i = 0;
			i = $(this).index();
			$(this).css("background","blue").siblings().css("background","#fff");
			$('.b_con img').eq(i).fadeIn(400).siblings().fadeOut(400);
		})
})