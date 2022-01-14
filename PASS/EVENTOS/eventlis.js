var texto = document.getElementById('info');
var boton1 = document.getElementById('boton');
boton1.addEventListener("click", comeon1);
var d = document.getElementById("ppp");
var lienzo1 = d.getContext("2d");


function   comeon1 () {
  var xxx = parseInt(texto.value);
  var linea = xxx ;
  var l = 1 ;
  var xf = 500;
  var yi = 500;
  var xi = 500;
  var yf = 0;
  var yi2 = 0;
  while (l < linea)
  {
    Drawingline("blue",xi, yi, xf, yf);
    l = l + 1 ;
    yi = yi - 500 / xxx;
    xf = xf - 500 / xxx;
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


}
