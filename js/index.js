$(function () {
    $(".nav_r .nav_show").click(function () {
        $(".main").toggle()
    })
    $(".main_kj").click(function () {
        $("nav").toggle();
    })
    var obj="nav"
    $(window).on("scroll",function(){
        var tops=$(window).scrollTop();
        if(tops>=200){
            $(obj).fadeIn(500)
        }else{
            $(obj).fadeOut(500)
        }
    })
})
$(function(){
    var number=0;
    $(window).on("scroll",function(){
        for(var i=0;i<$(".aa").length;i++){
            if(($(window).scrollTop()+20)>=$(".aa").eq(i).offset().top){
                number=i;
                for(var j=0;j<$(".nav_r .nav_hide").length;j++){
                    $(".nav_r .nav_hide").eq(j).removeClass("current");
                    $(".aa").eq(j).removeClass("floor-current");
                }
                $(".nav_r .nav_hide").eq(i).addClass("current");
                $(".aa").eq(i).addClass("floor-current");
            }
            if($(window).scrollTop()<$(".aa").eq(i).offset().top){
                $(".nav_r .nav_hide").eq(i).removeClass("current");
                $(".aa").eq(i).removeClass("floor-current");
            }
        }
        var tops=$(window).scrollTop();
        $(".nav_r .nav_hide").click(function(){
            var index=$(this).index();
            var newObj={st:tops};
            $(newObj).animate({st:(($(".aa").eq(index).offset().top))},{duration:1000,
                step:function(){
                    $(window).scrollTop(newObj.st);
                }})
        })
    })
    $(".nav_r .nav_hide").mouseover(function(){
        var index=$(this).index();
        $(".nav_r .nav_hide").eq(index).addClass("current");
    }).mouseout(function(){
        var index=$(this).index();
        if(index!=number){
            $(".nav_r .nav_hide").eq(index).removeClass("current");
        }
    })
})