function criarConta(titular, saldoInicial) {
    let saldo = saldoInicial;
    return {
        titular,
        depositar(valor) {
            if (valor <= 0) {
                console.log("Valor de depósito inválido");
            } else {
                saldo += valor;
                console.log(`Depósito de R$ ${valor} realizado com sucesso!`);
            }
        },
        sacar(valor){
            if (valor > saldo) {
                console.log("saldo insuficiente.");
                return
            }
            saldo -=valor;
        },
        get saldoAtual(){
            return saldo;
        },
    };
}
 const contas = [criarConta("joao",1000),criarConta("paula",5000)];

 contas[0].depositar(200);

 contas.forEach(conta => console.log(conta.saldoAtual));
