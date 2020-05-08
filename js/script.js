import Planeta from "./clases/Planeta.js";
var arregloValores;
let arregloDistancia;
let arregloNombrePlanetas = [];
let arregloPlanetas = [];
var enviarEvaluacion = (e) => {
	/**
     * Arreglos unidimensionales de un solo tipo nativo (enteros, relas y cadenas de texto)
     */
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
    
    /**
     * Llenado de arreglo con objetos de la clase Planeta
     */
    for(let x = 1; x <= 5;  x++){
        let planeta = new Planeta();
        planeta.distancia_tierra = document.getElementById(`d_planeta_${x}`).value;
        planeta.nombre = document.getElementById(`np_planeta_${x}`).value;
        planeta.numero_clasificacion = document.getElementById(`n_planeta_${x}`).value;
        
        arregloPlanetas.push(planeta);
    }
    
    console.log(arregloPlanetas);
    alert("Arreglo creado correctamente");
}

let ordernarValores = (e) => {
	/**
     * Generamos copia del arreglo en ambos casos.
     */
	let copiArregloValores = arregloValores.map(numero => numero);
    let copiaArregloPlanetas = arregloPlanetas.map(planeta => planeta);
    
    /**
     * Procedemos a ordenar el arreglo,  en el segundo caso,  emplearemos una propiedad de la 
     * clase planeta,  como elemento de comparacion en la funcion de ordenamiento
     */
    copiArregloValores.sort( (a, b) => {
        return a - b;
    });
    copiaArregloPlanetas.sort((a, b) => {
        return a.numero_clasificacion - b.numero_clasificacion;
    });
    
    let copia2ArregloPlanetas =  copiaArregloPlanetas.map(planeta => planeta);
    
    console.log("********Arreglos ascendente***********")
    console.log(copiArregloValores);
    console.log(copiaArregloPlanetas);
    console.log("********Arreglos descendente***********")
    copiArregloValores.reverse();
    copia2ArregloPlanetas.reverse();
    console.log(copiArregloValores);
    console.log(copia2ArregloPlanetas);

}

let filtrarDistancia = (e) => {
    let arregloFiltradoDistancia = arregloDistancia.filter( (distancia) => {
        return distancia.indexOf("33") >= 0;
    });
    
    let planetasConFiltro = arregloPlanetas.filter( (planeta) => {
        return planeta.distancia_tierra.indexOf("33") >= 0;
    }) ;
    
    console.log(arregloFiltradoDistancia);
    console.log(planetasConFiltro);
    
}

let buscarPlaneta = (e) => {
    let nombrePlanetaABuscar = prompt("Digite el nombre del planeta a buscar");
    console.log(nombrePlanetaABuscar);
    let r = arregloNombrePlanetas.find((nombre) => nombrePlanetaABuscar == nombre );
    let rp = arregloPlanetas.find((planeta) => {return nombrePlanetaABuscar.toLowerCase ==  planeta.nombre.toLowerCase});
    
    if(rp == undefined)
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
