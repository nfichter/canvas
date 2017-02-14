var c = document.getElementById("cnvs");
var ctx = c.getContext("2d");

var drawSquare = function(e) {
    var mouseX = e.offsetX;
    var mouseY = e.offsetY;
    ctx.fillStyle = "rgb("+
  		Math.floor(Math.random()*256)+","+
  		Math.floor(Math.random()*256)+","+
  		Math.floor(Math.random()*256)+")";
    ctx.fillRect(mouseX-10,mouseY-10,20,20);
};

var clearCanvas = function() {
    ctx.clearRect(0,0,c.width,c.height);
};

lastX = -1;
lastY = -1;

var drawPath = function(e) {
    var mouseX = e.offsetX;
    var mouseY = e.offsetY;
    if (lastX == -1 && lastY == -1) {
	lastX = mouseX;
	lastY = mouseY;
    } else {
	ctx.strokeStyle = "rgb("+
  		Math.floor(Math.random()*256)+","+
  		Math.floor(Math.random()*256)+","+
  		Math.floor(Math.random()*256)+")";
	ctx.beginPath();
	ctx.moveTo(lastX,lastY);
	ctx.lineTo(mouseX,mouseY);
	ctx.stroke();
	ctx.fillStyle = "rgb("+
  		Math.floor(Math.random()*256)+","+
  		Math.floor(Math.random()*256)+","+
  		Math.floor(Math.random()*256)+")";
	ctx.beginPath();
	ctx.moveTo(lastX,lastY);
	ctx.arc(lastX,lastY,10,0,Math.PI*2);
	ctx.stroke();
	ctx.fill();
	lastX = mouseX;
	lastY = mouseY;
    };
};

var clr = document.getElementById("clr");
clr.addEventListener("click",clearCanvas);

c.addEventListener("click",drawPath);
//c.addEventListener("click",drawSquare);

