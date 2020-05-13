var file = document.getElementById("file");
var canvas = document.getElementById("display");
var ctx = canvas.getContext('2d');
canvas.height = 1080;
canvas.width = 1080;

var img = new Image();
img.onload = function(){
  ctx.drawImage(img, 0, 0);
}
img.src = "base_logo_with_cutout.png";

var scale = 1;
var xPos = 285;
var yPos = 460;
var scaler = document.getElementById("scale");
var columner = document.getElementById("xPos");
var rower = document.getElementById("yPos");
scaler.oninput = function(){
  scale = (119-scaler.value)/50;
  draw();
}
columner.oninput = function(){
  xPos = columner.value;
  draw();
}
rower.oninput = function(){
  yPos = rower.value;
  draw();
}

var cimg = new Image();
cimg.onload = function(){
  xPos = 285;
  yPos = 460;
  draw();
}

file.onchange = function(event){
  cimg.src = URL.createObjectURL(event.target.files[0]);
}

var download = document.getElementById("download");
download.onclick = function(){
  var capture = canvas.toDataURL("capture.png");
  download.href = capture;
}

var swap = document.getElementById("swap");
var order = 1;
swap.onclick = function(){
  order = !order;
  draw();
}

var initx, inity;
function xymouse(event){
  xPos -= initx - event.clientX;
  yPos -= inity - event.clientY;
  initx = event.clientX;
  inity = event.clientY;
  draw();
}
canvas.onmousedown = function(event){
  initx = event.clientX;
  inity = event.clientY;
  canvas.onmousemove = xymouse;
}
canvas.onmouseup = function(event){
  canvas.onmousemove = null;
}

function xytouch(event){
  var tx = event.touches[0].clientX;
  var ty = event.touches[1].clientY;
  xPos -= initx - tx;
  yPos -= inity - ty;
  initx = tx;
  inity = ty;
  draw();
}
canvas.ontouchstart = function(event){
  console.log(event.touches);
  initx = event.touches[0].clientX;
  inity = event.touches[0].clientY;
  canvas.ontouchmove = xytouch;
}
canvas.ontouchend = function(event){
  canvas.ontouchmove = null;
}


function draw(){
  ctx.clearRect(0,0,canvas.width, canvas.height);
  var w = cimg.width/scale;
  var h = cimg.height/scale;
  if(order){
    ctx.drawImage(cimg, xPos, yPos, w, h);
    ctx.drawImage(img, 0, 0);
  }else{
    ctx.drawImage(img, 0, 0);
    ctx.drawImage(cimg, xPos, yPos, w, h);
  }
}








