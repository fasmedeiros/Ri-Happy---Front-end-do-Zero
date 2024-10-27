# Explorando Fundamentos de Lógica com JavaScript

## Descrição

Este repositório contém dois projetos que ajudam a monitorar e categorizar brinquedos em uma loja. O primeiro projeto categoriza brinquedos com base na faixa etária recomendada, enquanto o segundo monitoriza o estoque de brinquedos e verifica se estão com "Baixo" ou "Adequado" estoque.

---

## Desafio 1: Categorizando Brinquedos por Faixa Etária

### Descrição

O objetivo deste desafio é criar um programa que categorize brinquedos com base na faixa etária recomendada. O usuário fornecerá uma idade, e o programa retornará a categoria correspondente.

### Faixas Etárias

- **Infantil:** 0 a 9 anos
- **Pre-Adolescente:** 10 a 14 anos
- **Adolescente:** 15 a 18 anos

### Exemplo de Uso

#### Entrada
```
4
```

#### Saída
```
Infantil
```

#### Outros Exemplos
- **Entrada:** `12`  
  **Saída:** `Pre-Adolescente`
  
- **Entrada:** `15`  
  **Saída:** `Adolescente`

---

## Desafio 2: Analisando o Estoque de Brinquedos

### Descrição

Este desafio consiste em monitorar o estoque de brinquedos, identificando quais estão com estoque baixo (menos de 5 unidades) e quais estão com estoque adequado.

### Entrada de Dados

O usuário fornecerá uma lista de brinquedos e suas respectivas quantidades, no formato `Nome do Brinquedo:Quantidade`, separados por vírgula e espaço. Por exemplo:
```
Carrinho:10, Boneca:3, Bloco de Montar:15
```

### Processamento e Saída

O programa verifica o estoque de cada brinquedo e retorna a situação de cada um.

### Exemplo de Uso

#### Entrada
```
Funko Pop:10, Action Figure:3, Lego Star Wars:15
```

#### Saída
```
Funko Pop: Adequado, Action Figure: Baixo, Lego Star Wars: Adequado
```

#### Outros Exemplos
- **Entrada:** 
  ```
  Dungeons and Dragons Dice:4, Xbox Controller:8
  ```
  **Saída:**
  ```
  Dungeons and Dragons Dice: Baixo, Xbox Controller: Adequado
  ```

- **Entrada:**
  ```
  Pipa:1, Boneca:12, Funko:3
  ```
  **Saída:**
  ```
  Pipa: Baixo, Boneca: Adequado, Funko: Baixo
  ```

---

## Contribuição

Contribuições são bem-vindas! Se você tiver sugestões para melhorias ou correções de bugs, sinta-se à vontade para abrir uma issue ou enviar um pull request.

