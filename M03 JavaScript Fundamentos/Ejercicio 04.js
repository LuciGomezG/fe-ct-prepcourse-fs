/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*4️⃣ EJERCICIO 04 4️⃣*/

// ⛔️ Recuerda que debes utilizar el objeto global "Math".

function elevarAlCuadrado(num) {
return Math.pow(num,2)
}
elevarAlCuadrado();

function elevarAlCubo(num) {
return Math.pow(num,3)
}
elevarAlCubo();

function elevar(num, exponent) {
return Math.pow(num,exponent)
}
elevar();

function redondearNumero(num) {
  return Math.round(num)
}
redondearNumero();

function redondearHaciaArriba(num) {
return Math.ceil(num)
}
redondearHaciaArriba();

function numeroRandom() {
return Math.random()
}
numeroRandom();

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   elevarAlCuadrado,
   elevarAlCubo,
   elevar,
   redondearNumero,
   redondearHaciaArriba,
   numeroRandom,
};
