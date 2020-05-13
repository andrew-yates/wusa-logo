var file = document.getElementById("file");
var canvas = document.getElementById("display");
var ctx = canvas.getContext('2d');
canvas.height = 1080;
canvas.width = 1080;

var img = new Image();
img.onload = function(){
  ctx.drawImage(img, 0, 0);
}
img.src = "base_logo.png";

var cimg = new Image();
cimg.onload = function(){
  ctx.drawImage(cimg, 200, 500, 100, 100);
}

file.onchange = function(event){
  console.log(event.target.files[0]);
  //cimg.src = event.target.files[0].name;
  cimg.src = URL.createObjectURL(event.target.files[0]);
}





