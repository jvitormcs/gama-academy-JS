const pessoa = {
    nome: "João",
    sobrenome: "Vitor",
    idade: 18,
    profissao: "Aprendendo Fullstack"
};

console.log(pessoa);

/* let nome = pessoa.nome;
let sobrenome = pessoa.sobrenome;
let idade = pessoa.idade
let profissao = pessoa.profissao */

let {nome, sobrenome, idade, profissao} = pessoa;

console.log (nome, sobrenome, idade, profissao)