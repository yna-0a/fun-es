
function calculaidade(anoNasc) {
  return 2022 - anoNasc;
}
function calculaIMC(peso, altura) {
  return peso / (altura*altura);
}
module.exports.calculaidade = calculaidade;
module.exports.calculaIMC = function(peso, altura){
	return peso /(altura * altura)
}

