![](https://i.imgur.com/xG74tOh.png)

# Requisicoes, Assincronismo e integração com APIs

## Obs.: Assista ao vídeo de explicações, lá é mais fácil de entender

---
# Exercicio 1

Esse exercício se trata de uma integração com uma API externa, bem como o preenchimento dos elementos do HTML com essas informações.

Veja na imagem abaixo o resultado esperado:
![](https://i.imgur.com/xQ18UtQ.png)

### Explicações:

O código de html e css já estão prontos e você pode encontrá-los dentro desse repositório (faça o fork e o clone).

### API

A api para que você possa fazer a integração é essa daqui: https://jsonplaceholder.typicode.com/

A requisição deverá ser feita com o método `GET` na rota de `/users`, assim você irá obter uma lista de usuários e com essa lista você deve preencher os elementos do html desse projeto.

----

# Exercicio 2
Esse exercício se trata de uma integração com uma API externa, bem como o preenchimento dos elementos do HTML com essas informações.

Veja na imagem abaixo o resultado esperado:
![](https://i.imgur.com/cP5JL3k.png)

### Explicações:

O código de html e css já estão prontos e você pode encontrá-los dentro desse repositório (faça o fork e o clone).


### API

A api para que você possa fazer a integração é essa daqui: https://pokeapi.co/api/v2


A requisição deverá ser feita com o método `GET` na rota de `/pokemon/pikachu`, assim você irá obter as informações do pokemon e você deve preencher os elementos do html desse projeto.

Formato dos dados na api: 
 - imagem: sprites.other.dream_world.front_default
 - nome: name
 - altura: height
 - largura: weight

#### **DICAS:**
Não sabe por onde começar? Que tal começar olhando a estrutura de html existente e pensando em como você pode preenchê-las com os dados da API, após isso vá para o javascript.

Nesse exercício será necessário:
- Usar o axios para realizar a conexão com a API
- Buscar os elementos no DOM
- Usar try catch para evitar erros 
- Usar laço de repetição para injetar os valores em cada card

###### tags: `módulo 2` `front-end` `HTML` `CSS` `JAVASCRIPT` `DOM`
