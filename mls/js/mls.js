var banner = document.getElementById("outer");
var oIanner = document.getElementById("outer").getElementsByTagName("ul")[0];
var first = document.getElementsByTagName("ul")[0].getElementsByTagName("li")[0];
var btn = document.getElementById("outer").getElementsByTagName("a");
var oDiv = first.cloneNode(true);
var oSpan = document.getElementById("outer").getElementsByTagName("span");
var step = 0, autoTime = null;
~function () {
    for (var i = 0; i < oSpan.length; i++){
        var curSpan = oSpan[i];
        curSpan.index = i;
        curSpan.onclick = function () {
            step = this.index;
            changeTip();
            animate(oIanner, {left: -step * 960}, 900);
        }
    }
}();
function changeTip() {
    var tempStep = step >= oSpan.length ? 0 : step;
    for (var i = 0; i < oSpan.length; i++) {
        i === tempStep ? oSpan[i].className = "bg" : oSpan[i].className = "";
    }
}
autoTime = window.setInterval(left, 3000);
function left() {
    if (step == 4) {
        step = 0;
        oIanner.style.left = 0;
    }
    step++;
    animate(oIanner, {left: -step * 960}, 900);
    changeTip()
}
function right() {
    if (step == 0) {
        step = 4;
        oIanner.style.left = "-" + step * 960 + "px";
    }
    step--;
    animate(oIanner, {left: -step * 960}, 900);
    changeTip()
}
btn[0].onclick = right;
btn[1].onclick = left;
banner.onmousemove = function () {
    window.clearInterval(autoTime)
}
banner.onmouseout = function () {
    autoTime = window.setInterval(left, 3000);
}
