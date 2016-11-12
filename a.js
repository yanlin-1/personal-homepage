var mu=require("mumuge");
/*如果在less中出现了  类名的符合
* 1.正常的 类名
* 2.方法    +括号  不执行
* .radius(@r1:50%,@r2:50%,@r3:50%,@r4:50%){
*    -webkit-border-radius:@r1,@r2,@r3,@r4;或者@arguments  左上  右上  左下  右下
*    -o-border-radius:@r;
*    -moz-border-radius:@r;
*    -ms-border-radius:@r;
*    border-radius:@r;
*  
* }
* 当是内阴影的时候用inset，when 判断等号只用一个
* .shadow(@type:0) when (@type=1){
*   -webkit-box-show:0 0 10px red inset;
*   -o-box-show:0 0 10px red inset;
*   -moz-box-show:0 0 10px red inset;
*   -ms-box-show:0 0 10px red inset;
*   box-show:0 0 10px red inset;
* }
* .col-@{type}-@{i}
* 加变量名需要用大括号包起来
* .clear(){
*    &:before,&:after{
*    content:"";
*    display:block;
*   }
*   &:after{
*    clear:both;
*   }
* }
* div{
*   .clear;
* }
* --------
* 小屏时
* 
* */