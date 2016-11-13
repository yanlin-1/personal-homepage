jQuery.extend({
	backTop:function(obj,time){
		$(window).on("scroll",function(){
	    	var tops=$(window).scrollTop();
			if(tops>=time){
				$(obj).fadeIn(500)
			}else{
				$(obj).fadeOut(500)
			}
	    })
	    $(obj).click(function(){
	    	var newObj=({tr:$(window).scrollTop()});
	    	$(newObj).animate({tr:0},{
	    		duration:time,
	    		step:function(){
	    			$(window).scrollTop(newObj.tr)
	    		}
	    	})
	    		
	    })
	}
})