/*!
* Start Bootstrap - Shop Homepage v5.0.5 (https://startbootstrap.com/template/shop-homepage)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

let Nombre= prompt("decime tu nombre");

let Apellido= prompt ("decime tu apellido");

let NumeroDeCompetidor= parseInt(prompt("Ingrese su numero de competidor"));

alert ("Bienvenido " + " " + Nombre + " " + Apellido + " al ingreso" );

let camiseta = 0;

let grupoA = "";

let grupoB= "";





if (NumeroDeCompetidor <= 50) {
   alert ("sos del grupo A")

   

  } else {
    alert ( " sos del Grupo B")

   

}


for (camiseta = 1; camiseta <= 50; camiseta++) {
  console.log(camiseta);
  
}


for (camiseta = 1; camiseta >= 50; camiseta++) {
  console.log(camiseta);
  
}


const arregloEquipos = [["Equipo A", "1 a 50"],
                ["Equipo B", "51 a 100"]];

    function equipos(a,b) {
        const resultado1 = "Ganó equipo A";
        const resultado2 = "Ganó equipo B";
        if (a > b) {
            return resultado1
        } else {
            return resultado2
        }

    }

console.log (Nombre);
console.log (Apellido);
console.log ( NumeroDeCompetidor)