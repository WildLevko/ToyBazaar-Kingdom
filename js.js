document.addEventListener("DOMContentLoaded", function () {
    var res = '';
    width= window.innerWidth,
    height = window.innerHeight;
    for (var i = 0; i < 100; i++) {
        var star = document.createElement("div");
        star.className = "star";
        star.style.top = Math.random() * height + "px";
        star.style.left = Math.random() * width + "px";
    res += star.outerHTML;
    }
    document.getElementById('stars').innerHTML = res; });
    var car = document.getElementById('car');
var startBtn = document.getElementById('startBtn');
var stopBtn = document.getElementById('stopBtn');
var animation;
var position = 0;
var speed = 30;
function moveCar() {
    position += speed;
    if (position > window.innerWidth) {
    position = -365;
    }
    car.style.left = position + 'px'; }
function startMoving(){
    animation = setInterval(function() { moveCar();
    }, 50);}

function stopMoving() {
    clearInterval(animation); }
startBtn.addEventListener('click', function () { startMoving(); });
stopBtn.addEventListener('click', function () { stopMoving(); });
