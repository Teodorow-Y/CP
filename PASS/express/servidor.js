var express = require("express");
var aplication =  express ();

aplication.get("/", inicio);
aplication.get("/cursos", cursos);

function inicio(peticion, resultado) {

  resultado.send("Este es el home");

}

function cursos(peticion, resultado) {

  resultado.send("Estos son los cursos");

}

aplication.listen(8989);
