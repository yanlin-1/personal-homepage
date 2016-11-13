jQuery.extend({
	fuxian:function(obj,time){
		$(window).on("scroll",function(){
	    	var tops=$(window).scrollTop();
			if(tops>=time){
				$(obj).fadeIn(2000)
							}
	    })
	}
})