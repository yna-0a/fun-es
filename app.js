const { calculaidade, calculaIMC } = require('./funcoes.js');

const anoNasc = process.argv[2];
const peso = process.argv[3];
const altura = process.argv[4];

const idade = calculaidade(anoNasc);
const IMC = calculaIMC(peso, altura);


console.log(calculaidade(anoNasc));
console.log(calculaIMC(peso, altura));


