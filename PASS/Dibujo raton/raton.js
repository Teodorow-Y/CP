document.addEventListener("onmousedown", dibujar);
var cuadro = document.getElementById("ppp");
var papel = cuadro.getContext("2d");
var psx;
var psy;
var psxf;
var psyf;

function dibujar (evento)
{



    var color = "blue";
    if (evento.type == "onmousedown") {
      var evx = evento.layerX;
      var evy = evento.layerY;


    psx = evx;
    psxf = psx + 1 ;
    psy = evy;
    psyf = psy+1;

    Drawingline(color, psx, psy, psxf, psyf, papel);
    console.log(evento);
    console.log("position" + evx);
    console.log("position" + evy);
    console.log("position" + psxf);
    console.log("position" + psyf);

  }
}


function  Drawingline(color, psx, psy, psxf, psyf, lienzo1)
{
  lienzo1.beginPath();
  lienzo1.strokeStyle = color;
  lienzo1.lineWidth = 3;
  lienzo1.moveTo(psx, psy);
  lienzo1.lineTo(psyf,psyf);
  lienzo1.stroke();
  lienzo1.closePath();
}
