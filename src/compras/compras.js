// const ferramentas = [
//     { nome: "UFT", preco: 100, fabricante: "OpenText" },
//     { nome: "TestComplete", preco: 200, fabricante: "Smartbear" },
//     { nome: "TOSCA", preco: 300, fabricante: "Tricents" }
// ];
// const comprar = ["Micro"];


function calcularTotal (ferramentas, comprar){
    let precoFinal = 0
    let ferramentasDisponíveis = 0
    const quantidadeComprar = comprar.length
    const quantidadeFerramentas = ferramentas.length

    if (quantidadeComprar > 0){
        if (quantidadeFerramentas > 0){
            for (i=0; i<quantidadeComprar; i++){
                for(j=0; j<quantidadeFerramentas; j++){
                    if (comprar[i] == ferramentas[j].nome){
                        precoFinal = precoFinal + ferramentas[j].preco
                    } 
                }
            }
            return `O valor a pagar pelas ferramentas (${comprar.join(", ")}) é R$ ${precoFinal.toFixed(2)}`
        } 
    }

    // if (ferramentasDisponíveis == 0){
    //     throw new Error(`Nenhuma ferramenta desejada encontrada.`)
    // }

    if (quantidadeComprar == 0 || quantidadeFerramentas == 0){
        throw new Error(`Ambas as listas precisam ter ao menos um item.`)
    }

}

module.exports = {
    calcularTotal
}



