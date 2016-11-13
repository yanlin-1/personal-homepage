jQuery.fn.extend({
	mousewheel:function(up,down){
	   this.each(function(i,obj){
		   	if(obj.attachEvent){
				obj.attachEvent("onmousewheel",scrollFn);
				//IE  opera
			}else if(obj.addEventListener){
				obj.addEventListener("mousewheel",scrollFn,false);
				//chrome,safari   -webkit-
				obj.addEventListener("DOMMouseScroll",scrollFn,false);
				//firefox -moz-
			}
			function scrollFn(e){
				e=e||window.event;
				var f=e.detail||e.wheelDelta;
				if(f==-3 ||f==120){
					if(up){
						up.call(obj)
					}
				}else if(f==3 ||f==-120){
					if(down){
						down.call(obj);
					}
				}

		    }
	   })

	}
})