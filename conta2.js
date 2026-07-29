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
        getSaldo() {
            return saldo;
        }
    };
}

}