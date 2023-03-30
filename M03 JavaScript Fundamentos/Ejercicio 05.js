/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*5️⃣ EJERCICIO 05 5️⃣*/

function esPositivo(num) {

if (num>0){
      return("Es positivo");
}else if (num <0){
      return("Es negativo");
}else{
      return false
}
}
esPositivo();


function agregarSimboloExclamacion(str) {
return str +"!";
}
agregarSimboloExclamacion();

function combinarNombres(nombre, apellido) {
 return nombre+ " "+ apellido;
}
combinarNombres();

function obtenerSaludo(nombre) {
return "Hola" +" " + nombre + "!";
}
obtenerSaludo();

function obtenerAreaRectangulo(alto, ancho) {
   return alto*ancho;
}
obtenerAreaRectangulo();

function retornarPerimetro(lado) {
return lado*4;
}
retornarPerimetro(); 

function areaDelTriangulo(base, altura) {
   return ((base * altura) / 2);
}
areaDelTriangulo();

function deEuroAdolar(euro) {

   return euro * 1.20;
}
deEuroAdolar();


function esVocal(letra){
   if (letra.length>1){
      return "Dato incorrecto";
  
   }else if (
          letra=== "a"||
          letra==="e"||
          letra ==="i"||
          letra === "o" ||
          letra === "u"){
      return "Es vocal";
   }else{
       return "Dato incorrecto";
   }
   }
      esVocal("i");
/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   esPositivo,
   agregarSimboloExclamacion,
   combinarNombres,
   obtenerSaludo,
   obtenerAreaRectangulo,
   retornarPerimetro,
   areaDelTriangulo,
   deEuroAdolar,
   esVocal,
};
