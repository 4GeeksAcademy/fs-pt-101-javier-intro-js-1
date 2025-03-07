import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here
  console.log("Hello Rigo from the console!");
};






//variables
/*
var --> NO SE USA
let --> si le voy a reasignar valor  
const ---> si NO le voy a reasignar valor

declaracion de variables

let nombreDeVariable --> declaro
nombreVariable = 'pepe' ---> asigno valor
let age = 5 ---> inicializacion
*/

let test
test = 'l'
let test2 = 55
console.log(test2);

let address = 'Paseo de luis Perez, 5 4to C'

//tipos de datos
/*
number --> numeros ---> enteros, decimales, negativos --> 5
string --> texto ---> '' "" `` --> todo lo que esta entre comillas, es TEXTO
boolean --> true false / 1 0 
null --> vacio 
undefined
NaN ---> NO es un NUMERO

array --> [] --> listas, colecciones que necesariamente, 
              no tienen que estar relacionados. Se accede por 
              la ubicacion de los elementos ej: arr[0]
objetos --> {} --> una coleccion definida por llave:valor. 
                Todo en el objeto esta relacionado. El objeto describe algo.  
                Se accede a por punto o corchetes. ej: obj.propiedad / obj['propiedad']

*/

let empty = null
let x = 2 + 3
let y = 2 * x + 5 - x * 100
console.log(y)

/*
             0,1,2,   3       4      5     6       7          8
                                                    [1]       .llave        
             */
const arr = [1, 2, 3, 'pepe', 'lola', true, false, [4, 5, 6], { llave: true }, null]
console.log(arr[3]) // pepe

const person = {
  nombre: 'pepe',
  edad: 55,
  ciudad: 'madrid',
  enfermo: false,
  casado: true
}
console.log(person.nombre) // pepe
const coche = {
  marca: 'toyota',
  modelo: 'corolla',
}


// operadores logicos o compuertas logicas
/*
= --> asignacion de valor
== --> igual a (compara valor)
=== --> estrictamente igual a (compara valor y TIPO de dato)
! --> negacion
!= --> NO es igual a
!== --> NO estrictamente igual a (compara valor y TIPO de dato)
<
>
<=
>=
&& --> AND --> para que devuelva true, todas las condiciones se tiene que cumplir
|| --> OR ---> para que devuelva true, UNA condicion tiene que cumplirse
*/

let fname = 'lola'

console.log('type of ', typeof fname === 'string')

console.log(typeof '5')
console.log(typeof 5)
console.log('comparacion ==', '5' == 5) // true 
console.log('comparacion ===', '5' === 5) // false


console.log('comparacion >', 5 > 5) // false
console.log('comparacion >', 5 < 5) // false
console.log('comparacion >', 5 >= 5) // true
console.log('comparacion >', 5 <= 5) // true


console.log(4 < 10 && 5 != 5) // false
console.log(4 < 10 || 5 != 5) // true

//condicionales

/*

if (condicion) {
//bloque de codigo que se ejecuta si se cumple la condicion
} else {
//bloque de codigo que se ejecuta si NO se cumple la condicion
// el else NOOOOOO es obligado
}



*/
console.log('negacion de negacion', !false)
let age = 25
let testOne
let testTwo = 'pep'
console.log(age > 25)
if (age > 25) {
  console.log('eres mayor de 25...')
}

if (!testOne) {
  console.log('es la negacion. Si NO tiene informacion testOne')

}

if (testTwo || testTwo == 0) {
  console.log('que pasara?')
  console.log('se mostrara?')
}

// if (age > 15) {
//   console.log('puedes manejar')
//   if (age > 20) {
//     console.log('puedes beber')
//   }
// } else {
//   console.log('coche de control remoto')
// }

age = 9


if (age > 20) {
  console.log('puedes beber ---- 111')
}
else if (age > 15) {
  console.log('puedes manejar ---- 1111')
} 
else {
  console.log('coche de control remoto ---- 111')
}

if (age > 20) {
  console.log('puedes beber ---- 111')
}
if (age > 15) {
  console.log('puedes manejar ---- 1111')
} 

/*

trabajos con arrays
loops
trabajos con objetos
funciones

*/