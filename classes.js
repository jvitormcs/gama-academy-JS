class matematica {
    soma(valorA, valorB){
      return valorA + valorB;
    }
    subtracao(valorA, valorB){
        return valorA - valorB;
      }
      multiplicacao(valorA, valorB){
        return valorA * valorB;
      }
      divisao(valorA, valorB){
        return valorA / valorB;
      }
}


var instaciaMatematica = new matematica();

var resultado = instaciaMatematica.soma(4, 7)

console.log(resultado)