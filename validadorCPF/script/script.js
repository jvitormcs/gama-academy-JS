console.log("JavaScript carregado...")


function validaCPF(cpf){
    console.log(cpf.length)
    if (cpf.length != 11) {
       return false;
    } else {

        let numeros = cpf.substring(0, 9); 
        let digitos = cpf.substring(9); 

        let soma = 0;
        for (var i = 10; i > 1; i--) {
         
        soma += numeros.charAt(10 - i) * i;
        }
        
        console.log("soma é " + soma);

        var resultado = (soma % 11) < 2 ? 0 : 11 - (soma % 11);

        return true;
    }
}

function validacao() {
    console.log("Iniciando validação CPF")
    let cpf = document.getElementById("cpf_digitado").value;
    
    let resultadoValidacao = validaCPF(cpf);

    if (resultadoValidacao) {
        document.getElementById("success").style.display = "block";
    } else {
        document.getElementById("error").style.display = "block";
    }
}