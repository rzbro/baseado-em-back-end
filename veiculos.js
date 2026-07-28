class veiculo {
    constructor(marca) {
        this.marca = marca;
    }
}
buzinar() {
    console.log("bibiiiiiiii!");
}


class Fusion extends veiculo {
    constructor(marca,qPortas){
        super(marca);
        this.qPortas = qPortas;
    }
};

const meuVeiculo = new veiculo(ford);
console.log("marca do veiculo",meuVeiculo.marca);
meuVeiculo.buzinar();

const meuCarro = new veiculo("fiat,4");
console.log("\n--- testando o carro ---");
console.log("Marca do carro: ", meuVeiculo.marca);
console.log("Quantidade de portas:", meuCarro.quantidade Portas);
meuCarro.buzinar();