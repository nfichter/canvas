var c = document.getElementById("cnvs");
var ctx = c.getContext("2d");

var drawSquare = function(e) {
    var mouseX = e.offsetX;
    var mouseY = e.offsetY;
    console.log(mouseX);
    console.log(mouseY);
    var num = (Math.floor(Math.random() * 16777216)).toString;
    ctx.fillStyle = parseInt(num,16);
    ctx.fillRect(mouseX-10,mouseY-10,20,20);
};

var clearCanvas = function() {
    ctx.clearRect(0,0,c.width,c.height);
};

var clr = document.getElementById("clr");
clr.addEventListener("click",clearCanvas);

c.addEventListener("click",drawSquare);
