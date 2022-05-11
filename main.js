canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var mouseEvent = "empty";
var x, y; 
var color = "black";
var  width = 1;
var screenWidth = screen.width;
var screenHeight = screen.height;
var newCanvasWidth = screenWidth - 70;
var newCanvasHeight = screenHeight - 300;

if(screenWidth < 992){
    document.getElementById("myCanvas").width = newCanvasWidth;
    document.getElementById("myCanvas").height = newCanvasHeight;
    document.body.style.overflow = "hidden";
}

canvas.addEventListener("mousedown", mymouseDown);
canvas.addEventListener("mousemove", mymouseMove);
canvas.addEventListener("mouseup", mymouseUp);
canvas.addEventListener("mouseleave", mymouseLeave);
canvas.addEventListener("touchstart", mytouchStart);
canvas.addEventListener("touchmove", mytouchMove);

function mymouseUp(){
    mouseEvent = "mouseUp";
}

function mymouseLeave(){
    mouseEvent = "mouseleave";
}

function mymouseDown() {
    color = document.getElementById("Color").value;
    width = document.getElementById("linewidth").value;
    mouseEvent = "mousedown";
}

function mymouseMove(e){
var currentX = e.clientX - canvas.offsetLeft;
var currentY = e.clientY - canvas.offsetTop;
if(mouseEvent == "mousedown")
{
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    console.log("last x position = " + x);
    console.log("last y position = " + y);
    ctx.moveTo(x, y);
    console.log("current x position = " + currentX);
    console.log("current y position = " + currentY);
    ctx.lineTo(currentX, currentY);
    // ctx.arc(currentX, currentY, 20, 0, 360);
    // ctx.rect(currentX, currentY, 25, 50);
    ctx.stroke();
}
x = currentX;
y = currentY;
}

function mytouchStart(e){
    console.log(e);

    color = document.getElementById("Color").value;
    width = document.getElementById("linewidth").value;
    x = e.touches[0].clientX - canvas.offsetLeft;
    y = e.touches[0].clientY - canvas.offsetTop;
}

function mytouchMove(e){

var currentTouchX = e.touches[0].clientX - canvas.offsetLeft;
var currentTouchY = e.touches[0].clientY - canvas.offsetTop;
    
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    console.log("last x position = " + x);
    console.log("last y position = " + y);
    ctx.moveTo(x, y);
    console.log("current x touch position = " + currentTouchX);
    console.log("current y touch position = " + currentTouchY);
    ctx.lineTo(currentTouchX, currentTouchY);
    // ctx.arc(currentTouchX, currentTouchY, 20, 0, 360);
    // ctx.rect(currentTouchX, currentTouchY, 25, 50);
    ctx.stroke();
x = currentTouchX;
y = currentTouchY;
}

function clear() {
    ctx.clearRect(0, 0, 800, 600);
}


