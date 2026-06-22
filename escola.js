const dadosDoAluno = require('./aluno.json');

console.log ("--- sistema escolar ---");
console.log('nome: ${dadosDoAluno.nome}');
console.log('curso: ${dadosDoAluno.curso}');
if(dadosDoAluno.Bolsista){
    console.log("Status: este aluno possui isenção de mensalidade.");
} else {
    console.log("Status: mensalidade padrão.");

};

//alterar o tipo de bolsa
// adicione a saida de idade 