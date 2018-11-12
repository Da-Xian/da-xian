$(function(){
	"use strict";
    var fontsize = 16 * $(window).width() / 320;
    if (fontsize > 67.5) {
        fontsize = 67.5;
    }
    $('html').css('font-size', fontsize);
    //tab导航栏
	$(".bg_middle").find('button').click(function(){
		$(".bg_middle").find('button').attr('class','');
		$(".bg_down").find('div[title=1]').css('display','none');
		$(this).attr('class','active');
		$(".bg_down").find('div[title=1]').eq($(this).index()).css('display','block');
	});
	$(".hwj").click(function(){
		$(".choose hr").show();
		$(".chose hr").hide();
	});
	$(".zml").click(function(){
		$(".choose hr").hide();
		$(".chose hr").show();
	});
	$(".menu_left").click(function(){
		$(".menu_left").addClass("replace_left");
		clear_middle();
		clear_right();
	});
	$(".menu_middle").click(function(){
		$(".menu_middle").addClass("replace_middle");
		clear_left();
		clear_right();
	});
	$(".menu_right").click(function(){
		$(".menu_right").addClass("replace_right");
		clear_left();
		clear_middle();
	});
	$(".photo_first").click(function(){
		$(".photo_first").addClass("replace_first");
		clear_second();
		clear_third();
		clear_fourth();
	});
	$(".photo_second").click(function(){
		$(".photo_second").addClass("replace_second");
		clear_third();
		clear_fourth();
		clear_first();
	});
	$(".photo_third").click(function(){
		$(".photo_third").addClass("replace_third");
		clear_first();
		clear_second();
		clear_fourth();
	});
	$(".photo_fourth").click(function(){
		$(".photo_fourth").addClass("replace_fourth");
		clear_first();
		clear_second();
		clear_third();
	});
	$(".photo_left").click(function(){
		$(".photo_left").addClass("lightswitch");
		$(".photo_right").removeClass("auto");
	});
	$(".photo_right").click(function(){
		$(".photo_right").addClass("auto");
		$(".photo_left").removeClass("lightswitch");
	});
 	$('.bg_down').on('click','div[title=2]',function(){
     	$(this).addClass("active_color").siblings().removeClass("active_color");
     });
//	if(){
//	   
//	   }
	
});


function clear_left(){
	"use strict";
	$(".menu_left").removeClass("replace_left");
}
function clear_middle(){
	"use strict";
	$(".menu_middle").removeClass("replace_middle");
}
function clear_right(){
	"use strict";
	$(".menu_right").removeClass("replace_right");
}
function clear_first(){
	"use strict";
	$(".photo_first").removeClass("replace_first");
}
function clear_second(){
	"use strict";
	$(".photo_second").removeClass("replace_second");
}
function clear_third(){
	"use strict";
	$(".photo_third").removeClass("replace_third");
}
function clear_fourth(){
	"use strict";
	$(".photo_fourth").removeClass("replace_fourth");
}




//开机
function powerOn(){
	"use strict";
	$(".bgcolor").removeClass("offPower");
	$(".picture").removeClass("off");
	$(".bgcolor").removeClass("offOnLine");
	$("button").attr("disabled",false);
	$(".curture p").html("设备在线,点击关闭");
	$(".photo_left").removeClass("lightswitch");
	$(".photo_right").removeClass("auto");
	$(".switch").show();
}
//关机
function powerOff(){
	"use strict";
	$(".bgcolor").removeClass("offOnLine");
	$(".picture").removeClass("off");
	$(".bgcolor").addClass("offPower");
	$(".switch").show();
//	$(".picture").addClass("off");
	$(".curture p").html("设备已关闭，点击开启");
	off_same();
	$('div[title=2]').siblings().removeClass("active_color");
	
}
//离线
function offonline(){
	"use strict";
	$(".bgcolor").addClass("offOnLine");
	$(".picture").addClass("off");
	$(".switch").hide();
	$(".picture").addClass("off");
	$(".curture p").html("设备离线");
	off_same();
	$('div[title=2]').siblings().removeClass("active_color");
}

function off_same(){
	"use strict";
	$(".photo_left").removeClass("lightswitch");
	$(".photo_right").removeClass("auto");
	$("button").attr("disabled",true);
	clear_second();
	clear_third();
	clear_fourth();
	clear_first();
	clear_middle();
	clear_right();
	clear_left();
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
};