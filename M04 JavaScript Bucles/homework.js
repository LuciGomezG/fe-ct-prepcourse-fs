/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function obtenerMayor(x, y) {
   if (x>y){
      return x;
   }else if (x === y){
      return x || y;
   
   }else {
      return y;
   }
   }

function mayoriaDeEdad(edad) {
if (edad >= 18){
   return ("Allowed")

}else{
   return ("Not allowed")
}
}

function conection(status) {
   if (status=== 1){
      return ("Online")
   }else if (status===2){
      return ("Away")
   }else{
      return("Offline")
   }
}

function saludo(idioma) {
   if (idioma ==="aleman"){
      return ("Guten Tag!");
   }else if (idioma=== "mandarin"){
      return("Ni Hao!");

   }else if(idioma=== "ingles"){
      return ("Hello!");

   }else if (idioma=== undefined){
      return ("Hola!");
   }else{
      return ("Hola!")
   }
}

function colors(color) {
   switch (color){
      case "blue": return "This is blue";
      break;
      case "red": return "This is red";
      break;
      case "green": return "This is green";
      break;
      case "orange": return "This is orange";
      break;
      default: return "Color not found"
   }
}

function esDiezOCinco(num) {
if (num === 10 || num ===5){
   return true;
}else{
   return false;
}
}

function estaEnRango(num) {
if (num <50 && (num >20)){
   return true;
}else{
   return false;
}
}

function esEntero(num) {
   if (Number.isInteger(num)){
      return true;
   
   }else{
      return false;
   }
  }

function fizzBuzz(num) {
if (num %3 ===0 && num %5 ===0){
   return "fizzbuzz";

}else if (num %5==0){
   return "buzz";

}else if (num %3 ==0){
   return "fizz";

}else{
   return false;
}
}


function operadoresLogicos(num1, num2, num3) {
   // La función recibe tres números distintos.
   // Si num1 es mayor a num2 y a num3, y además es positivo, retornar ---> "Numero 1 es mayor y positivo".
   // Si alguno de los tres números es negativo, retornar ---> "Hay negativos".
   // Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
   // Si todos los argumentos son cero, retornar ---> "Error".
   // Si no se cumple ninguna de las condiciones anteriores, retornar false.
   // Tu código:
if (num1 <0 || num2 <0 ||num3<0){
   return "Hay negativos";
}else if(num1===0 && num2===0 && num3===0){
   return "Error";
}else if (num3>num1 & num3>num2){
   return num3+1;
}else if(num1>0 && num1>num2 && num1> num3){
   return "Numero 1 es mayor y positivo";
}else{
   return
function esPrimo(num) {
   if (num <= 1) {
      return false;
    }
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
   }

function esVerdadero(valor) {

if (valor === true){
   return "Soy verdadero";
}else{
   return "Soy falso";
}
}

function tieneTresDigitos(num) {

if (num >99 && num <1000){
   return true;
}else{
   return false;
}
}

function doWhile(num) {
var i=0;
do {
   num+=5;
   i++;
}while (i<8);
return num;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   obtenerMayor,
   mayoriaDeEdad,
   conection,
   saludo,
   colors,
   esDiezOCinco,
   estaEnRango,
   esEntero,
   fizzBuzz,
   operadoresLogicos,
   esPrimo,
   esVerdadero,
   tieneTresDigitos,
   doWhile,
};
