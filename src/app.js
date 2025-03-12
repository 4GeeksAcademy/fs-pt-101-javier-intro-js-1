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

const arraOne = [5, 8, 4, 6, 85, 545, 215, 31285, 6854, 2121, 51, 2, 5, 1, 3]
const testing = arraOne
console.log(arraOne);
console.log(testing);
testing[0] = 111111111111111
console.log('one ---> ', arraOne);
console.log('testing ---> ', testing);


const testArra = [...arraOne] //spread operator--> crea una copia exacta del array en OTRA seccion de memoria
console.log('testArra ------> ', testArra)
console.log('one', arraOne);
console.log('test', testArra);
testArra[0] = 555555
console.log('one', arraOne);
console.log('test', testArra);



console.log(arraOne)
console.log(arraOne.length)
console.table(arraOne)
console.log(arraOne[0])
console.log(arraOne[10])
console.log(arraOne[arraOne.length - 1])
arraOne[0] = 5000 //modifica un elemento pero necesitamos saber el indice, modifica el array
console.log(arraOne)

arraOne.push(88888) //modifica el array
arraOne.push(7777, 99999) //modifica el array
arraOne.push('pepe') //modifica el array
console.log(arraOne)
let test1 = arraOne.pop() //modifica el array
console.log(arraOne)
console.log(test1);

arraOne.shift() // elimina primera entrada del array
console.log(arraOne)
arraOne.unshift('pepe', 'lola') // añade lo que le pasemos al principio del array
console.log(arraOne)

const newArray = arraOne.slice(3, 8)
console.table(arraOne)
console.table(newArray)

arraOne.splice(5, 8) // ojo! esto modifica el array
console.log(arraOne)
arraOne.splice(0, 1, 'matia') // desde la posicion 0, elimina uno y añade a matia en esa posicion
console.log(arraOne)
arraOne.splice(0, 1, 'pepe', 'el', 'magnifico') // el retorno de pepe
console.log(arraOne)
arraOne.splice(4, 0, 'la', 'suprema') // lola no se queda a tras
console.log(arraOne)

// para no modificar array original toSpliced() --> devuelve un array nuevo
const arraySpliced = arraOne.toSpliced(0, 7, 'soy', 'lo', 'maximo', 'firma', 'matia')
console.log(arraySpliced)
console.log(arraOne)

/*

el splice modifica el array en el que se ejecuta
toSpliced() va a devolver un nuevo array

*/


// loops (ciclos, itinerancia)
//algo que se repite....

console.log('testArra ------> ', testArra)
console.log('testArra.length ------> ', testArra.length)
// [5,8,4,6,85,545,215,31285,6854,2121,51,2,5,1,3]

//clasico
for (let i = 0; i < testArra.length; i++) {
  console.log('i--->', i);
  console.log('valores ---> ', testArra[i])
}

// for of / for in
// for of accede a valores
for (let num of testArra) {
  console.log('for of... ---> ', num)
}

// for in devuelve indices 
for (let i in testArra) {
  console.log('for in... ---> ', i)
  console.log('for in valores ---> ', testArra[i])
}

// while --> es facilmente un loop infinito, SE TIENE QUE PONER MANUALMENTE DENTRO 
//           DEL BLOQUE DE CODIGO EL INCREMENTADOR
// do while --> es facilmente un loop infinito, SE TIENE QUE PONER MANUALMENTE DENTRO 
//           DEL BLOQUE DE CODIGO EL INCREMENTADOR
//            SIEMPRE SE EJECUTA AL MENOS UNA VEZ
// switch


/*
let i = 0
while (i<5) {
//codigo que se ejecuta
i++
}


let i = 0
do {
// bloque de codigo
i++
} while (condicion)


*/

let colors = 'red'
switch (colors) {
  case 'red': // 
    console.log('color is red')
    break
  case 'blue':
    console.log('color is blue')
    break;
  case 'olive':
  case 'green':
    console.log('color is green')
    break; // para que no siga devolviendo 
  default: // si no se encuentra en los case, se devuelve el default
    console.log('color is black')
    break;
}

let num = 5
// switch (num) {
//   case 1:
//   case 2:
//   case 3:
//   case 4:
//     console.log('es menor a 5')
//     break;
//   case 6:
//   case 7:
//   case 8:
//     console.log('es mayor a 5')
//     break
//   default:
//     console.log('es 5')
// }


// switch(true){
//   case num<5:
//     console.log('menor que 5');
//     break
//   case num>5:
//     console.log('mayor que 5');
//     break
//   default:
//     console.log('es 5');
// }

// objetos!

/*
definidos por {}
ordenados en pares llave: valor
describir algo
*/

const testObj = {
  name: 'pepe'
}

console.log(testObj)
console.table(testObj)

testObj.age = 25 // añadiendo una propiedad/llave nueva con un valor
testObj.aeg = 25
delete testObj.aeg //elimina una propiedad/llave 
testObj['city'] = 'Sevilla' // añadiendo una propiedad/llave nueva con un valor
console.log(testObj)
testObj.car = true
console.log(testObj.car)

let testingObj = 'pais'
testObj[testingObj] = 'España'
console.log(testObj)

testObj.luckyNumbers = [5, 7, 23]
testObj.contact = {
  name: 'lola',
  phone: '+34 6666666669',
  schedule: {
    morning: '9-13',
    night: '19-02'
  }
}

console.log(testObj)
console.log(testObj.luckyNumbers[2]) //23
testObj.luckyNumbers[2] = 3

console.log(testObj.luckyNumbers[2]) //3
testObj.luckyNumbers.pop()
console.log(testObj.luckyNumbers)

console.log(testObj.contact.name) // lola
console.log(testObj.contact.schedule.morning) // 9-13
testObj.contact.schedule.morning = '10-14'
console.log(testObj.contact.schedule.morning) // 10-14
console.log(testObj)

//funciones

/*

funcion clasica

declaracion

function nombreDeFuncion (params) {
//bloque de codigo
return (
//lo que devuelve la funcion ---> SIEMPRE DEBE DEVOLVER ALGO
)
}


funcion flecha

declaracion

const arrowFunction = (params) => {
  //bloque de codigo
return (
//lo que devuelve la funcion ---> SIEMPRE DEBE DEVOLVER ALGO
)
}


ejecucion de una funcion

nombreDeFuncion() ---> el () es el que le dice a JS que ejecute la funcion
arrowFunction()



EL CONSOLE LOG, ES O EN LA FUNCION O EN EL LLAMADO A LA FUNCION
*/


const sumV1 = () => {
  let total = 2 + 3
  return total
}
console.log(sumV1())


const sayHi = () => {
  return 'Hola!'
}

console.log(sayHi())



const sumV2 = (num) => {
  let total = num + num
  return total
}
console.log(sumV2(80))


const sayHiV2 = (name) => {
  //return 'Hola ' + name + '!'
  return `Hola ${name}!`
}

console.log(sayHiV2('Lola'))


const sumV3 = (num1, num2) => {
  console.log('num1 -> ', num1, 'num2 -> ', num2)
  let total = num1 + num2
  return total
}
console.log(sumV3(5, 4))


const sayHiV3 = (name, lastname) => {
  //return 'Hola ' + name + '!'
  return `Hola ${name} ${lastname}!`
}

console.log(sayHiV3('Lola', 'Paredes'))

const sumV4 = (num1, num2) => num1 + num2

console.log(sumV4(5, 4))

const sayHiV4 = (name, lastname) => `Hola ${name} ${lastname}!`

console.log(sayHiV4('Lola', 'Paredes'))



// funciones
//declarando la funcion
const nombreFuncion = (params) => {
  //bloque de codigo
  return true
}
//declarando funcion
const ex1 = () => {
  return 'hola, no recibo parametros'
}

//ejecutar funcion
ex1()

//llamar una funcion dentro de un console.log
console.log(ex1);

//ejecutar una funcion dentro de un console.log
console.log(ex1());

const ex2 = nombre => {
  return `${nombre} he recibido el nombre: ${nombre}` // cuando se usan las comillas `` se pueden insertar variables js dentro de ${}
  //return nombre + ' he recibido el nombre: ' + nombre
}

const arre = [1, 2, 3, 87,654,1,8,327,3,84,6,96]
console.log(`${arre}`)
console.log(`${Math.random()}`);
console.log(`${Math.floor(Math.random() * 5) > 2 ? 'es mayor' : 'es menor'}`);

if (Math.floor(Math.random() * 5) > 2) {
  console.log('es mayor')
} else {
  console.log('es menor');
}

// ternarias
// condicion ? true : false

console.log(ex2('pepe'));

const ex3 = (num1, num2) => {
  return num1 + num2
}

console.log(ex3(5, 5))


// higher order functions

// forEach 

/*
- es un loop
- no retorna informacion
*/

//const arre = [1, 2, 3, 87,654,1,8,327,3,84,6,96]

const elevarAlCuadradoV1 = num => console.log(num*num)

const elevarAlCuadradoV2 = num => num*num

arre.forEach(elevarAlCuadradoV1)
arre.forEach((num, i)=>console.log(num*num, 'el indice es ' + i ))

for (let num of arre) {
  console.log(num*num)
}
//arre.forEach(num=> console.log(elevarAlCuadradoV2(num)))

//console.log(arre.forEach((num)=>console.log(num*num))) // indefinido porque el forEach NO RETORNA informacion


console.log(arre);
let arrayPotenciado = []
arrayPotenciado = arre.forEach((num, i)=>num*num)
console.log('arrayPotenciado despes del forEach', arrayPotenciado)


let aux = []

let testa = arre.forEach(el=> {
  aux.push('pepe')
})

const sayHii = () => console.log('hola')

arre.forEach(el=> {
  if (el%2==0) {
    sayHii()
  }
})

for (let el of arre) {
  if (el%2==0) {
    sayHii()
  }
}


let testb = arre.map(el=> {
  return 'pepe'
})
console.log('testaaaaaaaaaaaaaaa', testa, aux)
console.log('testbbbbbbbbbbbbbbb', testb)
// map
/*
- es un loop
- SI retorna informacion
*/
arrayPotenciado = arre.map(elevarAlCuadradoV2)

const arreConH = arre.map((num) => {
  return num+'h'
})

console.log('arrayPotenciado despues del map', arrayPotenciado)
console.log(arreConH);


/*

//forEach                      vs                 map
  no retorna                                      retorna un nuevo array
              puede modificar variables fuera de su scope
  no se puede almacenar en una variable           se puede almacenar en una variable la nueva version del array
  es un loop y punto.                             es un loop que retorna un nuevo array
*/


// filter
// se usa con condiciones 
// devuelve un nuevo array con los elementos que cumplen la condicion

const even = arre.filter(el=>el%2==0)

let evenB = []
for (let val of arre) {
  if (val%2==0){
    evenB.push(val)
  }
}

const odd = arre.filter((el, index)=>{
return el%2!=0 && index>3
})

const greaterThanTen = num=> num>10

const arrayGreeaterThanTen = arre.filter(greaterThanTen)

console.log(even)
console.log(odd)
console.log(arrayGreeaterThanTen)

//reduce 
// devuelve informacion

/*

const valorIniocial = 0;
arre.reduce((acc, val)=>acc+val, valorInicial);
*/

const totalArreA = arre.reduce((acc, val) => acc+val, 0)
console.log(totalArreA)
//si hay una condicion que hace que el primer valor no se use, se va a usar igualmente como princpio de valor inicial
const totalArreB = arre.reduce((acc, val) => acc+val)
console.log(totalArreB)

const arry = ['hola ', 'me ', 'llamo ', 'Larry.']
const noSeUsaNormalmenteParaEsto = arry.reduce((acc, val) => acc+val)
console.log(noSeUsaNormalmenteParaEsto)


const locuraTotal = arre.map(elevarAlCuadradoV2).filter(el=> el<100).map(el=>`resultado -> ` + el)

console.log(locuraTotal)
