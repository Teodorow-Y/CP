var teclas = {
  UP: 40,
  DOWN: 38,
  LEFT: 37,
  RIGHT: 39
};

console.log(teclas);
document.addEventListener("keydown", dibujar);

var cuadro = document.getElementById("ppp");
var papel = cuadro.getContext("2d");
var x = 150;
var y = 150;
Drawingline("red", 150,150,151,151,papel);

function dibujar (evento)
{
  var color = "blue";
  var movimiento = 10;
  console.log(evento);
 switch (evento.keyCode) {
   case teclas.UP:
   Drawingline(color,x,y,x, y + movimiento,papel);
   y= y+movimiento;
     console.log("Arriba");
   break;
   case teclas.DOWN:
   Drawingline(color,x,y,x, y - movimiento,papel);
   y= y-movimiento;
     console.log("Abajo");
   break;
   case teclas.LEFT:
   Drawingline(color,x,y,x - movimiento,y,papel);
   x= x-movimiento;
   console.log("izquierda");
   break;
   case teclas.RIGHT:
   Drawingline(color,x ,y,x + movimiento,y,papel);
   x= x+movimiento;
   console.log("derecha");
   break;

 }
}

function  Drawingline(color, xi, yi, xf, yf, lienzo1)
{
  lienzo1.beginPath();
  lienzo1.strokeStyle = color;
  lienzo1.lineWidth = 3;
  lienzo1.moveTo(xi, yi);
  lienzo1.lineTo(xf, yf);
  lienzo1.stroke();
  lienzo1.closePath();
}
