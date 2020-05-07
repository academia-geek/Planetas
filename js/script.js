var arregloValores;
let arregloDistancia;
let arregloNombrePlanetas;
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

	
document.querySelector("#btn_enviar_evaluacion").addEventListener("click", enviarEvaluacion);
document.querySelector("#btn_ordenar_valores").addEventListener("click", ordernarValores);
document.querySelector("#btn_filtar_distancia").addEventListener("click", filtrarDistancia);