var oBtn=document.getElementById('go2top');
oBtn.onclick=function(){
    var target=utils.win('scrollTop');
    var duration=500;
    var interval=10;
    var step=(target/duration)*interval;
    var timer=setInterval(function(){
        var curT=utils.win('scrollTop');
        if(curT<=0){
            clearInterval(timer);
            return;
        }
        curT-=step;
        utils.win('scrollTop',curT);
    },interval)
}
