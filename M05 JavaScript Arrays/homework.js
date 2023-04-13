/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   var primerElemento = array[0];
   return primerElemento;
}

function devolverUltimoElemento(array) {
   return array[array.length-1];
}

function obtenerLargoDelArray(array) {
   return array.length
}

function incrementarPorUno(array) {
let array_new = [];
for(let i = 0; i < array.length ; i++){
  array_new.push(array[i]+1);
}
return array_new;
}


function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
array.push(elemento);
return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
array.unshift(elemento);
return array;
}

var concatenar = [];
function dePalabrasAFrase(palabras){
   for (var i= 0; i < palabras.length; i++) {
    concatenar= palabras.join (" ");
   return concatenar;
}
}


function arrayContiene(array, elemento) {
   var validar= array.includes(elemento);

if (validar){
   return true;
}else {
   return false;
}
}

function agregarNumeros(arrayOfNums) {
   let suma= 0;
   for(let i of arrayOfNums){
      suma += i;
  }

   return suma;
}


function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
let suma= 0;
for (let i=0; i < resultadosTest.length; i++){
   const element= resultadosTest[i];
   suma += element;
}
let promedio= suma/ resultadosTest.length;
return promedio;
}

var masGrande= 0;
function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
for (let i=0;i < arrayOfNums.length; i++){
   if (arrayOfNums[i]> masGrande){
      masGrande= arrayOfNums[i];
   }
}
return masGrande;
}




function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:

let multiplicar= 1;
if (!arguments.length){
   return 0;
}else if (arguments === 1){
   return arguments[0]; 
}else{
   for(let i= 0; i< arguments.length; i++) {
      multiplicar=multiplicar * arguments[i];
   }
  }
return multiplicar;
}


function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
let mayor= 0;
mayor = array.filter((num) => num > 18);

return mayor.length;

}


function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
if (numeroDeDia ===1 || numeroDeDia ===7){
      return "Es fin de semana";

}else{
   return "Es dia laboral"
}
}

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
if (num.toString()[0]==="9"){
   return true;
}else{
   return false;
}}

function todosIguales(array){
let elementosIguales = array.every((num) => {return num === array[0]});
return elementosIguales;
}

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
let newArray= [];
for (let i =0; i< array.length; i++){
   if (array[i]==="Enero"|| array[i]=== "Marzo" || array[i]=== "Noviembre"){
      newArray.push(array[i])
   }
}
if(newArray.length===3){
   return newArray;
}
return "No se encontraron los meses pedidos"
}

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
let multiplosDel6=[];
for(let i=0; i <=10; i++){
   multiplosDel6.push(i*6);
}
return multiplosDel6;
}

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
let newArray=[];
for(let i=0; i< array.length; i++){
   if(array[i]>100){
      newArray.push(array[i]);
   }
}
return newArray;
}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
var array =[];
var suma = num;
for(var i=0; i<10; i++){
   suma= suma+2;
   if (suma===i)
   break;
   else{
      array.push(suma);
   }
}if(i<10){
   return "Se interrumpió la ejecución";
}else{
   return array;
}
}



function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
   let continueStatement = [];
   for (let i = 0; i < 10; i++){
      if (i === 5)
      continue;
      num = num + 2;
      continueStatement.push(num);
   } return continueStatement;
}
/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
