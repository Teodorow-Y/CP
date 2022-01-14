var vp = document.getElementById('villad');
var papel = villad.getContext("2d");
var fondo = {
  url: "tile.png",
  cargaOK: false
};

var cantidad = aleatorio(0,12);
var vaca = {
  url: "vaca.png",
  cargaOK: false
};

var cerdo = {
  url: "cerdo.png",
  cargaOK: false
};

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarF);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarV);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarC);
/*
var cerdo = new Image();
cerdo.src = "cerdo.png";
cerdo.addEventListener("load", dibujarc);

var pollo = new Image();
pollo.src = "pollo.png";var
pollo.addEventListener("load", dibujarp);
*/

function cargarF() {
  fondo.cargaOK = true;
  dibujarv();
}
function cargarV() {
  vaca.cargaOK = true;
  dibujarv();
}

function cargarC() {
  cerdo.cargaOK = true;
  dibujarv();
}


function dibujarv ()
{
  if(fondo.cargaOK == true)
  {
    papel.drawImage(fondo.imagen,0,0);
  }
  if(vaca.cargaOK == true)
  {
    for (var v=0; v<cantidad; v++)
    {
    console.log(cantidad);
    var x = aleatorio (0,420);
    var y = aleatorio (0,420);
    papel.drawImage(vaca.imagen,x,y);
    }
  }
}

var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39,
  SPACE: 32,
};
var chan;
var xcer = 250;
var ycer = 250;
document.addEventListener("keydown", dibujar);

function aleatorio(min, maxi)
{
  var resultado;
  resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
  return resultado;
}

function dibujar (evento)
{
  var mov = 10;
  console.log(evento);
 switch (evento.keyCode)
 {
      case teclas.SPACE:
        console.log("Espacio");
          if(cerdo.cargaOK == true)
          {
          dibujarC();
          }
          break;
      case teclas.UP:
        console.log("Arriba");
          {
          ycer = ycer - 10;
          moverC();
          }
          break;
 }
}

function dibujarC (){
  papel.drawImage(cerdo.imagen,xcer,ycer);
  return  chan = cerdo.imagen;
}
function moverC (){
 chan.moveTo(xcer,ycer);
}
