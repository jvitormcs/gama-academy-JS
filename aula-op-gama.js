var opcao = 0;
while (opcao != 5){

    
    console.log("1 - Soma | 2 - Subtração")
    console.log(" 3 - Mutiplicação | 4 - Divisão | 5 - sair")
    opcao = window.prompt('Selecione uma opcão');
    parseInt(opcao);

    switch (opcao >= 1 && opcao <= 5){

         case (opcao == 1):
            console.log ("Soma selecionado");
            num1 = window.Number(prompt("Digite um número "));
            num2 = window.Number(prompt("Digite outro número "));
             soma = num1 + num2;
            console.log("O resultado da soma é: " + soma);
            break;

        case (opcao == 2 ):
            console.log ("Subtração selecionado");
            num1 = window.Number(prompt("Digite um número "));
            num2 = window.Number(prompt("Digite outro número "));
            sub = num1 - num2;
            console.log("O resultado da Subtração é: " + sub);
            break;

        case (opcao == 3 ):
            console.log ("Multiplicação selecionado");
            num1 = window.Number(prompt("Digite um número "));
            num2 = window.Number(prompt("Digite outro número "));
            multi = num1 * num2;
            console.log("O resultado da Multiplicação é: " + multi);
            break;

        case (opcao == 4 ):
            console.log ("Divisão selecionado");
            num1 = window.Number(prompt("Digite um número ")); 
            num2 = window.Number(prompt("Digite outro número "));
            divi = num1 / num2;
            console.log("O resultado da Divisão é: " + divi);
            break;
    }
    
}

