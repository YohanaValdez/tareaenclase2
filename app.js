// Declare un array de enteros de 5 elementos, recorrerlo en un ciclo
// for e imprimir en consola si el valor del elemento del array es par o impar.
console.warn("primer ejercicio");
let array = [15, 24, 35, 754, 8421, 63 , 89, 4587, 874];

for (let index = 0; index < array.length; index++) {
  const element = array[index];
  if (element % 2 === 0) {
    console.log("es par");
  } else {
  console.log("es impar");
  }
  console.log(element);
}

// Declare un array de strings de  6 elementos, el array deberá tener dentro
//  SI o SI la palabra hola y la palabra mundo (en indices distanciados), 
//  el resto de los elementos deben ser elegidos por ustedes.
console.warn("segundo ejercicio");

let texto = ["hola", "pepe", "pepo","papa", "pipo", "pupo", "mundo"];

for (let index = 0; index < texto.length; index++) {
  if (texto[index] === "hola" || texto[index] === "mundo") {
    console.log(texto[index]); 
  }
} console.log(texto[0]+texto[6]);

//consultar como imprimir desde el indice o desde el string

// En un concurso de pesca participaron 5 pescadores, declare un array de enteros,
// cada elemento del array representará el peso del pez que atrapó cada pescador.
// Indique cuál es el pez de MAYOR peso y cuál es el pez de MENOR peso.
console.warn("tercer ejercicio");

let pesopeces = [7, 5, 3, 10, 20, 15];
let mayor = 0;

console.log("mayor");

for (let index = 0; index < pesopeces.length; index++) {
  if (pesopeces[index]>mayor) {
     mayor = pesopeces[index];
    
  } 
}console.log(mayor);

console.log("menor");

for (let index = 0; index < pesopeces.length; index++) {
  if (pesopeces[index]<mayor) {
    mayor = pesopeces[index];
    
  }
}console.log(mayor);

console.log("Probando math");

console.log(Math.max(...pesopeces));
console.log(Math.min(...pesopeces));

//consultar por la logica del ejercicio, y los tres puntos de la funcion math

console.warn("cuarto ejercicio");

//Realizar la potencia de 2 elevado a la 8 (base 2 exponente 8) utilizando
//un ciclo for: ESTÉ PROHIBIDO USAR Math.pow()

const base = 2;
const exponente = 8;

acumulador = 1;

for (let index = 0; index < exponente; index++) {
  acumulador = acumulador*base;
  
}console.log(acumulador);

// consultar 4 ejercicio