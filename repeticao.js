// var numSorteado = 10;

//var tabuada = 7;

//for (var i = 0; i < 10; i++){
//    console.log("Valor de " + tabuada + " x " + i + " = " + (tabuada * i))
//}


//for (var i = 0; i< 100; i++){
//    if (numSorteado === i){
//        console.log ('Seu numero foi encontrado');
//        break;
//    }
//}


var achou = false;

var numSorteado = 10;
var possivelValor = 0;

while (!achou) {
    possivelValor += 1;
    if (numSorteado === possivelValor) {
        achou = true;
        console.log ("Numero encontrado: " + numSorteado)
    } else {
        console.log (
            "Possivel Valor não corresponde ao numero sorteado " + possivelValor
        );
    }
}
