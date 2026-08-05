class ContaBancaria{
    #saldo;
    constructor(titular,saldoInicial){
        this.titular = titular;
        this.#saldo = saldoInicial;
    
    }
    depositar(valor){
        if(valor <= 0){
            console.log("valor de deposito invalido.");
            return;
        }
        this.#saldo += valor;
    }
    sacar (valor) {
        if (valor > this.#saldo) {
            console.log("saldo insuficiente.")
            return; //pausa o processo
        }
        this.#saldo -= valor;
    }
    get saldoAtual(){
        return this.#saldo;
    }
}
