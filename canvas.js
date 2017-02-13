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

var clr = document.getElementById("clr");
clr.addEventListener("click",clearCanvas);

c.addEventListener("click",drawSquare);
