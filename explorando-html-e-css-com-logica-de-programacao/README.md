# Explorando HTML e CSS com Lógica de Programação

## Desafio 1: Criando uma Vitrine de Brinquedos

### Descrição
Neste desafio, você deve criar um programa em JavaScript que recebe três strings como entrada, cada uma contendo o nome de um brinquedo. O programa deve exibir essas strings como uma lista HTML formatada, utilizando a tag `<ul>` para a lista e a tag `<li>` para cada item.

### Entrada
A entrada será composta por três strings que representam os nomes dos brinquedos. A função `gets()` deverá ser utilizada para obter as entradas.

### Saída
A saída deverá ser uma lista HTML com os brinquedos. Use a tag `<ul>` para a lista e a tag `<li>` para cada brinquedo.

### Exemplos
| Entrada         | Saída                                   |
|------------------|----------------------------------------|
| Boneca           | `<ul><li>Boneca</li></ul>`            |
| Carrinho         | `<ul><li>Carrinho</li></ul>`          |
| Lego             | `<ul><li>Lego</li></ul>`              |
| Bola             | `<ul><li>Bola</li></ul>`              |
| Pipa             | `<ul><li>Pipa</li></ul>`              |
| Dinossauro       | `<ul><li>Dinossauro</li></ul>`        |
| Patinete         | `<ul><li>Patinete</li></ul>`          |
| Ursinho          | `<ul><li>Ursinho</li></ul>`           |

### Código
```javascript
// Capturando os nomes dos brinquedos
let brinquedo1 = gets();
let brinquedo2 = gets();
let brinquedo3 = gets();

// Imprimindo a lista
print("<ul>");
print(`<li>${brinquedo1}</li>`);
print(`<li>${brinquedo2}</li>`); // Preenchido
print(`<li>${brinquedo3}</li>`); // Preenchido
print("</ul>");
```

---

## Desafio 2: Estilizando o Nome do Brinquedo

### Descrição
Neste desafio, você deve criar um programa em JavaScript que construa uma tag `<h1>` com estilo CSS dinâmico, de acordo com a entrada do usuário. O programa deve permitir que o usuário defina a cor do texto, o tamanho da fonte e o nome do brinquedo a ser exibido.

### Entrada
A entrada será composta por três strings:
1. Cor do texto.
2. Tamanho da fonte.
3. Nome do brinquedo.

A função `gets()` deverá ser utilizada para obter as entradas.

### Saída
A saída deverá ser uma tag HTML `<h1>` com as estilizações aplicadas.

### Exemplos
| Entrada              | Saída                                                             |
|---------------------|------------------------------------------------------------------|
| red                 | `<h1 style="color: red; font-size: 24px;">Carrinho</h1>`       |
| 24px                |                                                                  |
| Carrinho            |                                                                  |
| blue                | `<h1 style="color: blue; font-size: 32px;">Dinossauro</h1>`    |
| 32px                |                                                                  |
| Dinossauro          |                                                                  |

### Código
```javascript
// Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print" : imprime um texto de saída (output), pulando linha.

const cor = gets();
const tamanhoFonte = gets();
const nomeBrinquedo = gets();

// Construindo a tag <h1> com o estilo CSS
const resultado = `<h1 style="color: ${cor}; font-size: ${tamanhoFonte};">${nomeBrinquedo}</h1>`;

// Exibindo o resultado no console
print(resultado);
```

---

## Contribuição
Sinta-se à vontade para contribuir com melhorias e sugestões para os desafios. Agradecemos pela colaboração!
