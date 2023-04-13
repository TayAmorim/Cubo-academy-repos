![](https://i.imgur.com/xG74tOh.png)

# Projeto prático - Módulo 2

Esse projeto se trata de uma agenda de contatos, onde um usuário poderá se cadastrar, realizar login, adicionar e remover contatos de uma lista.

Para concluir esse desafio prático, você precisará se basear em um arquivo figma, esse arquivo está aqui no repositório com o nome de `projeto.fig`, baixe o arquivo e importe no seu figma :)

Você também pode clicar nesse [link](https://www.figma.com/file/ahfVRDWzpTivoLc6nTTCM2/Aula-pr%C3%A1tica-m%C3%B3dulo-2?node-id=0%3A1) para acessar o figma do projeto.

---

Veja abaixo as páginas que deverão se desenvolvidas:

### Sign In

![](https://i.imgur.com/jdujHFe.png)

#### Regras:

- Preencher e-mail e senha (com qualquer valor)
- Ao clicar em login deve validar se os inputs estão preenchidos
- Ao clicar no botão de: **Não tem cadastro, clique aqui** o site deve ser redirecionado para a página de cadastro de usuário.

### Sign Up

![](https://i.imgur.com/2GanN2J.png)

#### Regras:

- Na página de **sign-up** os inputs também devem ser validados para não estarem em branco, essa validação deve acontecer ao clicar no botão **CADASTRAR**
- Quando clicarmos em **Já tem cadastro? Clique aqui!** o site deve ser redirecionado para a página de login
- Ao clicar no botão **Cancelar** os inputs devem ser limpos

### Página Main

![](https://i.imgur.com/5KjFKJp.png)

Na página main é preciso ter uma tabela seguindo a estrutura da imagem acima.

### Modal Novo Contato

![](https://i.imgur.com/yQUHLdy.png)

#### Regras:

- Quando clicarmos no botão **Adicionar** um modal seguindo a estrutura da imagem acima deve ser aberto
- Os botões de adicionar, limpar e o **X** devem fechar o modal

### Modal Confirma a exclusão

![](https://i.imgur.com/HGUBGYp.png)

#### Regras:

- Ao clicar no ícone da lixeira em qualquer linha, um modal de confirmação da exclusão deve ser aberto
- Os botões excluir, cancelar e o **X** devem fechar o modal

#### Obs.: Caso tenha dúvidas, assista ao vídeo explicativo

---

Preencha a checklist para finalizar o exercício:

- [ ] Fazer o fork do repositório para sua conta
- [ ] Executar `git clone` do seu fork no terminal para clonar o repositório, ou clonar de outra maneira
- [ ] Após fazer e commitar todos os exercícios fazer o `git push` para seu fork
- [ ] Copiar a url do seu fork e enviar na plataforma

#### **DICAS:**


Não sabe por onde começar? Que tal começar adicionando os elementos do formulário dentro da TAG html e depois estilizar, só após isso vá para o javascript.

Nesse exercício será necessário: 
- Usar o evento de submit, lembre-se de não deixar a  página atualizar
- Usar o evento de clique
- Criar validação para os campos obrigatórios
- Selecionar os elementos via querySelector
- Limpar os inputs
- Redirecionar o usuário para a página correta
- Manipular a visibilidade dos  modais

## Quem leu até aqui, dá um grito na monitoria :)

###### tags: `módulo 2` `front-end` `HTML`
