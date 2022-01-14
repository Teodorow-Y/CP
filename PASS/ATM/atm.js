class Billete
{
  constructor (v, c) {

    this.imagen = new Image ();
    this.valor = v;
    this.cantidad = c;
    this.imagen.src = imagenes[this.valor];

  }
}



var imagenes = [];
imagenes ["100"] = "100.jpg";
imagenes ["50"] = "50.jpg";
imagenes ["20"] = "20.jpg";
imagenes ["10"] = "10.jpg";




var caja = [];
var entregado = [];

caja.push (new Billete (100,3));
caja.push (new Billete (50,3));
caja.push (new Billete (20,2));
caja.push (new Billete (10,1));

var dinero = 0;

var div = 0;
var papeles = 0;
var b = document.getElementById("extraer");
b.addEventListener("click", entregarD);


function entregarD()
{

  var t = document.getElementById("dinero");
  dinero = parseInt(t.value);

    for (var bi of caja)
   {

     if (dinero > 0)
       {
         div = Math.floor(dinero / bi.valor);

           if (div > bi.cantidad)
           {
             papeles = bi.cantidad;
           }  

           else
           {
             papeles = div;
           }

           entregado.push( new Billete (bi.valor, papeles));
           dinero = dinero - (bi.valor * papeles);
          }
   }
   if (dinero > 0)
   {

     alert("This ATM have not found");
   }
   else {
     console.log(entregado);
     for (var e of entregado)
     {
       if (e.cantidad > 0)
         {

           resultado.innerHTML = resultado.innerHTML +  document.body.appendChild(e.imagen)  + "<br>" ;


         }
     }
   }
 }
var resultado = document.getElementById("Resultado");
