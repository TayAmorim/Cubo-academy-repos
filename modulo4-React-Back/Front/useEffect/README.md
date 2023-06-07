![](https://i.imgur.com/xG74tOh.png)

# useEffect e ciclos de vida React

## Exercícios de classe 🏫

1. **Exercício 1** - Trata-se de criar modal simples, com a funcionalidade de abrir e fechar..

    Regras:
    - Funcionalidade de abrir e fechar    

Veja na imagem abaixo o layout:
![](https://i.imgur.com/OIssVaW.png)



---

2. **Exercício 2** - Criar um projeto que adicione usuários dentro de um quadro.
    
    Regras:
    - Ao adicionar o usuário o input deve ser limpado
    - Ao adicionar um usuário uma notificação deve ser exibida na parte de baixo
    - Seguir o layout básico.
    - A notificação deverá ser exibida por até 2 segundos.
    


Veja na imagem abaixo o layout:
![](https://i.imgur.com/xpCklNp.png)

---

3. **Exercício 3** - Esse exercício é um **mini desafio**, nele você irá praticar tudo o que aprendeu nessa aula e no curso.
    
    Regras:
    - Pensar bem na componentização do projeto 
    - Seguir o layout do figma
    - Criar um modal que seja  preenchido com as informações de um sapato, o modal deve ser exibido quando o sapato for clicado.


Veja na imagem abaixo o layout:
![](https://i.imgur.com/2LQjcRT.png)


4. **Exercício 4** - Criar uma listagem de tarefas com id, nome e feito, os dados iniciais devem ser carregados na primeira renderização usando useEffect e exibir uma mensagem 'dados inciais carregados', ao clicar no botão 'importar dados' dados adicionais devem ser acrescentados no lista de tarefas o botão deve ficar inativo (use a propriedade disabled do btn) usar useEffect para verificar exibir a mensagem e inativar os botões

Lembre-se

```js
// executa na primeira renderização
useEffect(() => {
    //codigo aqui
}, [])

// executa quando o 'valor' é alterado
useEffect(() => {
    //codigo aqui
}, [valor])

// executa quando o component é desmontado
useEffect(() => {
    return () => {
        //codigo aqui
    }
}, [])
---
    


**Obs.:** No exercício 3 você poderá usar o figma para te orientar quanto ao layout, dentro desse repositório nós temos um arquivo chamado **figma.fig**, para importá-lo é muito simples, veja nas imagens abaixo:

- Abra o figma e clique em **import file**, escolha o arquivo e clique em OK.


![](https://i.imgur.com/5jKmg1r.jpg)

- Pronto, quando terminar de importar o projeto aparecerá na sua tela principal do figma.



---
### Dicas
Não sabe por onde começar? Que tal começar olhando o que já existe dentro do projeto, após isso pense no projeto final e defina pequenas tarefas para chegar a esse resultado.

Nos exercícios será necessário:

- Criar e manipular estado
- Utilizar evento de change
- Utilizar evento de clique 
- Utilizar hook de efeito
- Executar uma ação após um tempo
- Usar ternário para exibir/ocultar componente da tela
- Importar imagens
- Passar propriedades
- Listar itens



---

Obs.: Em caso de dúvidas, lembre-se de assistir os vídeos de orientação.

---

Preencha a checklist para fazer os exercícios:

-   [ ] Fazer o fork do repositório para sua conta
-   [ ] Executar `git clone` do seu fork no terminal para clonar o repositório, ou clonar de outra maneira
-   [ ] Após fazer e commitar todos os exercícios fazer o `git push` para seu fork
-   [ ] Copiar a url do seu fork e enviar na plataforma

###### tags: `módulo 3` `front-end` `React`


