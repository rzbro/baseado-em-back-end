let saldoJoao = 1000;
let saldoCarlos = 500;
const taxajuros= 0.02;
const saldoComJuros = saldoJoao *(taxajuros)

const contaJoao = {titular:"João", saldo: saldoJoao};
const contaCarlos = {titular:"Carlos", saldo: saldoCarlos};

//console.log(saldoComJuro);
//console.log(`${contaJoao.titular} possui R$ ${contaJoao.saldo}.`);
//console.log(`${contaCarlos.titular} possui R$ ${contaCarlos.saldo}.`);

const contas = [contaJoao,contaCarlos]; 

contas.forEach((conta) => { 
    console.log(`${conta.titular} tem R$ ${conta.saldo}`)
});

contaJoao.saldo = -5000;
console.log("saldo alterado sem controle: ", contaJoao.saldo);

