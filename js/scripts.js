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

let premios = {
  primerPuesto : 10000,
  segundoPuesto : 5000,
  tercerPuesto :1000,
  cuartoPuesto : 500
};

Object.filter = function(mainObject, filterFunction){
  return Object.assign(...Object.keys(mainObject)
        .filter( function(ObjectKey){
            return filterFunction(mainObject[ObjectKey])
        } )
        .map( function (ObjectKey){
            return {[ObjectKey]: mainObject[ObjectKey]};
        }) );
}

console.log("Los premios son ",premios);

let targetSubjects = Object.filter(premios, (premio)=> premio>=5000 );

console.log("El pozo grande es ",targetSubjects);



const fullAlgaizer = document.querySelector("#fullAlgaizer")
fullAlgaizer.textContent= "DESDE JS CON TEXTCONTENT"
fullAlgaizer.innerHTML= " DESDE JS CON INNERHTML"
fullAlgaizer.classList.add ("bg-dark" , "text-primary")

const sumJs = document.getElementById("sumJs") 

const segundaDescripcion = document.createElement ("p")
segundaDescripcion.textContent = "SEGUNDA DESCRIPCION JS CON CREATE ELEMENT"

sumJs.appendChild(segundaDescripcion)

const especies = document.getElementById("especies")

const arregloEspecies = ["Suculentas" , "Philodendros" , "Pottus" , "Citricos"]


arregloEspecies.forEach (item => {
  console.log (item)
  const especie1 = document.createElement ("li")
  especie1.textContent = item
  especies.appendChild(especie1)
})
