$(function () {
    "use strict";
    var fontsize = 16 * $(window).width() / 320;
    if (fontsize > 67.5) {
        fontsize = 67.5;
    }
    $('html').css('font-size', fontsize);
		//三大菜单
    $(".left").click(function(){
    		$(".left").addClass("cur2");
    		$(".middle").removeClass("cur3");
    		$(".right").removeClass("cur4");
		    $("p:eq(0)").addClass("fivefivefive");
				$("p:eq(1)").removeClass("fivefivefive");
				$("p:eq(2)").removeClass("fivefivefive");
    });
    $(".middle").click(function(){
    		$(".middle").addClass("cur3");
    		$(".left").removeClass("cur2");
    		$(".right").removeClass("cur4");
				$("p:eq(1)").addClass("fivefivefive");
				$("p:eq(0)").removeClass("fivefivefive");
				$("p:eq(2)").removeClass("fivefivefive");
    });
    $(".right").click(function(){
    		$(".right").addClass("cur4");
    		$(".left").removeClass("cur2");
    		$(".middle").removeClass("cur3");
				$("p:eq(2)").addClass("fivefivefive");
				$("p:eq(1)").removeClass("fivefivefive");
				$("p:eq(0)").removeClass("fivefivefive");
    });
		//滑块按钮
    $('.list').on('click','li',function(){
    		$(this).addClass("watch").siblings().removeClass("watch");
    });
		//点击数字改变背景色
// 		var num=[1,2,3,4,5,6,7,8];
// 		for(var i=1;i<num.length;i++){
// 			$(".number"+num[i]).click(function(){
// 				$(".scale"+num[i]).addClass("watch").siblings().removeClass("watch");
// 			});
// 		};
		var num=[1,2,3,4,5,6,7,8];
		for(var i=0;i<num.length;i++){
			$(".number"+num[i]).click(function(){
				var thisIndex=parseInt($(this).attr('class').replace(/[^0-9]/ig,""));
				$(".scale"+thisIndex).addClass("watch").siblings().removeClass("watch");
			});
		};
// 		$(".number1").click(function(){
// 			$('.scale1').addClass("watch").siblings().removeClass("watch");
// 		});
// 		$(".number2").click(function(){
// 			$('.scale2').addClass("watch").siblings().removeClass("watch");
// 		});
// 		$(".number3").click(function(){
// 			$('.scale3').addClass("watch").siblings().removeClass("watch");
// 		});
// 		$(".number4").click(function(){
// 			$('.scale4').addClass("watch").siblings().removeClass("watch");
// 		});
// 		$(".number5").click(function(){
// 			$('.scale5').addClass("watch").siblings().removeClass("watch");
// 		});
// 		$(".number6").click(function(){
// 			$('.scale6').addClass("watch").siblings().removeClass("watch");
// 		});
// 		$(".number7").click(function(){
// 			$('.scale7').addClass("watch").siblings().removeClass("watch");
// 		});
// 		$(".number8").click(function(){
// 			$('.scale8').addClass("watch").siblings().removeClass("watch");
// 		});
		//点击改变背景色
			$(".scale1,.scale2,.scale3,.number1,.number2,.number3").click(function(){
				$(".bgcolor").addClass("green");
				$(".bgcolor").removeClass("yellow");
				$(".bgcolor").removeClass("red");
			});
			$(".scale4,.scale5,.number4,.number5").click(function(){
				$(".bgcolor").addClass("yellow");
				$(".bgcolor").removeClass("green");
				$(".bgcolor").removeClass("red");
			});
			$(".scale7,.scale6,.scale8,.number6,.number7,.number8").click(function(){
				$(".bgcolor").addClass("red");
				$(".bgcolor").removeClass("yellow");
				$(".bgcolor").removeClass("green");
			});
 });
 //开机
 	function powerOn() {
		"use strict";
			$("button").attr("disabled",false);
			$(".bg_down").removeClass("ban");
   		$(".switch").removeClass("cur");
   		$(".list").removeClass("notclick");
			$("section").eq(0).removeClass("offpower");
			$("section").eq(0).removeClass("onlineoff");
	}
	//关机
 	function powerOff() {
		"use strict";
	    $("section").eq(0).addClass("offpower");
			$("button").attr("disabled",true);
			$(".bg_down").addClass("ban");
   		$(".switch").addClass("cur");
   		$(".switch").attr("disabled",false);
   		$(".list").addClass("notclick");
			$("section").eq(0).removeClass("onlineoff");
	}
	//离线
 	function offonline(){
		"use strict";
		$(".list").addClass("notclick");
 		$("section").eq(0).addClass("onlineoff");
 		$("section:last-child").addClass("ban");
   	$("button").attr("disabled",true);
 	}
	//判断开关机
    window.onload=function(){
		"use strict";
		var i=0;
 	document.getElementById("put").onclick=function(){
		
		if(i++%2===0){
				powerOff();
		}else{
				powerOn();
		}
	};
// 	function changecolor(color){
// 			document.bgColor=color;
// 			
// 	}
	
	
	};
