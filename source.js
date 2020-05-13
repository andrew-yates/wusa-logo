var file = document.getElementById("file");
var canvas = document.getElementById("display");
var ctx = canvas.getContext('2d');
canvas.height = 1080;
canvas.width = 1080;

var img = new Image();
img.onload = function(){
  //img.setAttribute('crossorigin', 'anonymous');
  ctx.drawImage(img, 0, 0);
}
img.src = "base_logo_with_cutout.png";

var scale = 1;
var xPos = 200;
var yPos = 500;
var scaler = document.getElementById("scale");
var columner = document.getElementById("xPos");
var rower = document.getElementById("yPos");
scaler.oninput = function(){
  scale = (101-scaler.value)/50;
  console.log(scale);
  draw();
}
columner.oninput = function(){
  xPos = columner.value;
  console.log(xPos);
  draw();
}
rower.oninput = function(){
  yPos = rower.value;
  console.log(yPos);
  draw();
}


var cimg = new Image();
cimg.onload = function(){
  //cimg.setAttribute('crossorigin', 'anonymous');
  draw();
  //ctx.drawImage(cimg, 200, 500, cimg.width/scale, cimg.height/scale);
  //ctx.drawImage(img, 0, 0);
}

file.onchange = function(event){
  console.log(event.target.files[0]);
  //cimg.src = event.target.files[0].name;
  cimg.src = URL.createObjectURL(event.target.files[0]);
}

var download = document.getElementById("download");
download.onclick = function(){
  console.log("download");
  var capture = canvas.toDataURL("capture.png");
  capture.download = "image.png";
}


var capture = canvas.toDataURL("capture.png");
//document.write('<img src="'+img+'"/>');


function draw(){
  ctx.clearRect(0,0,canvas.width, canvas.height);
  ctx.drawImage(cimg, xPos, yPos, cimg.width/scale, cimg.height/scale);
  ctx.drawImage(img, 0, 0);
}



