import Planeta from "./clases/Planeta.js";
var arregloValores;
let arregloDistancia;
let arregloNombrePlanetas = [];
let arregloPlanetas = [];
var enviarEvaluacion = (e) => {
	let inputs = [...document.querySelectorAll(".numeracion_planetas")];
    let inputsD = [...document.querySelectorAll(".distancia_planetas")];
    let inputsN = [...document.querySelectorAll(".nombre_planetas")];
    arregloValores = inputs.map((input) => {
        return parseInt(input.value);
    });
    arregloDistancia = inputsD.map( (distancia) => {
        return distancia.value;
    });
    
    arregloNombrePlanetas = inputsN.map( (nombrePleneta) => {
        return nombrePleneta.value;
    });
    
    alert("Arreglo creado correctamente");
}

let ordernarValores = (e) => {
	let copiArregloValores = arregloValores.map(numero => numero);
    copiArregloValores.sort( (a, b) => {
        return a - b;
    });
    console.log(copiArregloValores);
    copiArregloValores.reverse();
    console.log(copiArregloValores);

}

let filtrarDistancia = (e) => {
    let arregloFiltradoDistancia = arregloDistancia.filter( (distancia) => {
        return distancia.indexOf("33") >= 0;
    });
    console.log(arregloFiltradoDistancia);
}

let buscarPlaneta = (e) => {
    let nombrePlanetaABuscar = prompt("Digite el nombre del planeta a buscar");
    console.log(nombrePlanetaABuscar);
    let r = arregloNombrePlanetas.find((nombre) => nombrePlanetaABuscar == nombre );
    
    if(r == undefined)
        alert("No existe el planeta");
    else
        alert("El planeta si existe");
}
	
document.querySelector("#btn_enviar_evaluacion").addEventListener("click", enviarEvaluacion);
document.querySelector("#btn_ordenar_valores").addEventListener("click", ordernarValores);
document.querySelector("#btn_filtar_distancia").addEventListener("click", filtrarDistancia);
document.querySelector("#btn_buscar_planeta").addEventListener("click", buscarPlaneta);

/*
let matriz = [
    [3,"Marte", 1000], 
    [7,6], 
    [4,3], 
];


let arregloJSON = [
    {nplaneta: 2, nomplaneta: "Marte", distplaneta : 12000}
];

arregloJSON.push({nplaneta: 4, nomplaneta: "Jupiter", distplaneta : 120000})

let marte = new Planeta("marte");
marte.numero_clasificacion = 2;
marte.distancia_tierra = 3000;
//marte.suma(3);
//console.log(marte);

arregloPlanetas.push(marte);
arregloPlanetas.push(new Planeta("Tierra"));
console.log(arregloPlanetas)

function suma(n1 = 0, n2 = 1){
    console.log(n1, n2);
}

suma(2); */
