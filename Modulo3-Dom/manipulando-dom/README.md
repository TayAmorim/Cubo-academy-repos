![](https://i.imgur.com/xG74tOh.png)

# Manipulando a DOM - Exercícios

### Exercício 1

- Buscar um elemento com o id "meu-titulo" e adicionar a classe "fonte-maior" após 2000 milesegundos

### Exercício 2

- Buscar um elememento com a classe "meu-paragrafo" e remover a classe "fonte-maior" após 2000 milesegundos

### Exercício 3

- Buscar um elemento com a tag h2 e button ao clicar no button adicionar toggle com a classe "fonte-maior" a tag h2

### Exercício 4

- Buscar um elemento input com o name "meu-input" e adicionar uma borda de 2px solida da cor azul após 2000 milesegundos

### Exercício 5

- Buscar todos os elementos li e buscar o elemento button, no clique do button verificar qual li possui uma classe "li-destaque" caso possua adicionar a classe "fonte-vermelha", caso não possua adicionar a classe "fonte-azul"

#### Obs.: Você pode ler o repositório, mas a melhor explicação estará nos vídeos da aula.

#### **DICAS:**

Não sabe por onde começar? Que tal começar olhando a estrutura de html e css existente. No exercício 1 pense em como usar a sequência de imagens que está dentro do assets, no exercício 2 pense em como usar o Math.floor(Math.random() \* 4) para gerar uma cor aleatória e em como selecionar uma cor, após isso vá para o javascript.

No exercício 1 será necessário:

- Buscar elementos no DOM
- Alterar a posição da imagem
- Utilizar o tamanho da tela
- Executar uma função a cada 100 milissegundos

No exercício 2 será necessário:

- Adicionar e remover classe em um elemento
- Mostrar mensagem ao usuário por 1000 milissegundos
- Adicionar texto nos elementos
- Gerar cores aleatórias
- Usar evento de clique

Nos exercicios de 1 a 5

- Buscar elemento na DOM usando
  - getElementById
  - getElementsByClassName
  - getElementsByTagName
  - getElementsByName
  - querySelector
  - querySelectorAll
- Manipulação de classes com Javascript
  - add
  - remove
  - toggle
  - classList
  - contains
- Usar setTimeout para eventos ocorrerem depois de um tempo

---

### Exercício 6

O objetivo desse exercício é fazer o homem andar do lado esquerdo até o final da página, usando HTML, CSS e Javascript.

Para obter a largura atual do **BODY** da página, você pode usar o comando `body.offsetWidth`, ele irá retornar o tamanho em número inteiro.

![](https://i.imgur.com/FgUf8GA.png)

---

### Exercício 7

O segundo exercício é um jogo de sorte, o jogo deverá funcionar da seguinte maneira:

- Você deve selecionar uma cor e depois clicar no botão **Sortear**, assim haverá um sorteio que determina se você acertou a cor ou não.
- Só existem 4 possibilidades de cores serem sorteadas, sendo elas: **red, blue, purple e orange**
- É obrigatório a seleção de uma cor, caso não selecione uma mensagem abaixo do botão deve ser exibida, dizendo **Selecione uma cor para sortear**.
- Caso o usuário acerte a mensagem será **Parabéns você acertou!**
- Caso erre a mensagem será **Tente novamente!**

#### **DICAS GERAIS :**

Para gerar o número aleatório você deve usar o seguinte código:

`const aleatoryPosition =  Math.floor(Math.random() * 4);`

Esse código vai te retornar número 0,1,2 e 3.

![](https://i.imgur.com/OcWZKFT.png)

Preencha a checklist para fazer os exercícios:

- [ ] Fazer o fork do repositório para sua conta
- [ ] Executar `git clone` do seu fork no terminal para clonar o repositório, ou clonar de outra maneira
- [ ] Após fazer e commitar todos os exercícios fazer o `git push` para seu fork
- [ ] Copiar a url do seu fork e enviar na plataforma

###### tags: `módulo 1` `front-end` `HTML` `CSS` `JAVASCRIPT` `DOM`
