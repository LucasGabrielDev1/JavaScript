let numeros = [10, 5, 22, 1, 13];

let indiceMaior = 0;
let indiceMenor = 0;

for (let i = 1; i < numeros.length; i++) {
  if (numeros[i] > numeros[indiceMaior]) {
    indiceMaior = i;
  }
  if (numeros[i] < numeros[indiceMenor]) {
    indiceMenor = i;
  }
}

console.log(`Índice do maior valor: ${indiceMaior} (valor: ${numeros[indiceMaior]})`);
console.log(`Índice do menor valor: ${indiceMenor} (valor: ${numeros[indiceMenor]})`);
