//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

let dados = gets().split(", ");
let resultado = [];

//TODO: Crie uma função 'dados.forEach(item =>{' para a implementação da condição de verificação de estoque.
dados.forEach(item => {
    let [nome, quantidade] = item.split(":");
    quantidade = parseInt(quantidade);
  
    //TODO: Realize a verificação utilizando if/else:
    if (quantidade < 5) {
        resultado.push(`${nome}: Baixo`); // Adiciona a situação "Baixo" se a quantidade for menor que 5
    } else {
        resultado.push(`${nome}: Adequado`); // Adiciona a situação "Adequado" se a quantidade for 5 ou mais
    }
});

// Saída formatada corretamente
print(resultado.join(", "));
