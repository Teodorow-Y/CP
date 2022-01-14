var d = document.getElementById("ppp");
var lienzo1 = d.getContext("2d");
var linea = 500;
var l = 0;
var xf = 500;
var yi = 500;
var xi = 500;
var yf = 0;
var yi2 = 0;


while (l < linea)
{
  Drawingline("blue",xi, yi, xf, yf);
  l = l + 2;
  yi = yi - 10;
  xf = xf - 10;
  console.log(l);
}
Drawingline("black",1, 1,500, 1);
Drawingline("black",1, 499,500, 500);
Drawingline("black",499, 1,500, 500);

function  Drawingline(color, xi, yi, xf, yf)
{
  lienzo1.beginPath();
  lienzo1.strokeStyle = color;
  lienzo1.moveTo(xi, yi);
  lienzo1.lineTo(xf, yf);
  lienzo1.stroke();
  lienzo1.closePath();
}
