const cardapio = [
    {nome: "X-burguer", preco: 18.90, categoria: "lanche"}
    {nome: "Batata-frita", preco: 9.50 categoria: "acompanhamento"}
    {nome: "Suco de laranja", preco: 7.00, categoria: "bebida"},
    {nome: "Milksheka", preco: 12.00, categoria: "sobremesa"}
];
console.loq(cardapio); //Impressão dos valores informados

const pedido = [0];

console.log(cardapio[0].nome);
console.log(cardapio[1].preco) //preço da batata
console.log(cardapio[2].categoria) //categoria do suco de laranja

function exibirCardapio(lista) {
  console.log("===CARDÁPIO===");
  console.log(`1. ${lista[0].nome} - R$ ${lista[0].preco}`)
  console.log(`2. ${lista[1].nome} - R$ ${lista[1].preco}`)
  console.log(`3. ${lista[2].nome} - R$ ${lista[2].preco}`)
  console.log(`4. ${lista[3].nome} - R$ ${lista[3].preco}`)
}

function calcularTotal(listaPedido){
    let total - listaPedido[0].preco + listaPedido[1].preco;
    return total;

}

function calcularTotal(listaPedido){
    let total = listaPedido[0].preco + listaPedido[1]preco;
    return total;
}

 function calcularComDesconto(total, clienteObj) {
  if (clienteObj.fidelidade === true) {
      let desconto = total *0.10;
      console.log('Desconto fidelidade: R${desconto}');
      return total; - desconto;
  }
     return total;
 }
      
  }
 }
