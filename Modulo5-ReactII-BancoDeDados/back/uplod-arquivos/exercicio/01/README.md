![](https://i.imgur.com/xG74tOh.png)

# Exercício 01

## Upload de imagens

Você acaba de receber um job freela para implementar novas funcionalidadem em um ecomerce. O cliente precisa de novas implementações para que o sistema continue atendendo as expectativas dos usuarios e listamos todas as demandas a seguir.

1 - Configurar variáveis de ambiente.

-   Aprendemos que não devemos deixar informações sensíveis no código e precisamos configurar o `dotenv` do projeto movendo todos os dados sensíveis para o arquivo `.env`. Alguns desses dados (caso exista) são:

    -   Conexão com banco de dados
    -   Senha para gerar token de autenticação
    -   Credenciais do servidor de armazenamento

Você deverá refatorar o projeto configurando seu dotenv para receber essas variáveis. E lembrando que o .env não deverá ser compartilhado e precisa ter um modelo de exemplo com as variáveis que você criou.

2 - implementar upload de imagem do produto cadastrado.

-   Deverá receber o `multipart/form-data` da imagem na requisição que faz o cadastro do produto e implementar o upload dessa imagem antes do cadastro, de fato, acontecer. Isso, claro, se a imagem for informada no body, pois não deve ser um campo obrigatório.

-   Na atualização do produto, não deverá permitir a atualização do campo imagem no banco de dados e dois novos endpoints deverão existir. Um para atualização da imagem existente (deve atualizar a imagem no servidor ou excluir e fazer o upload novamente) e o outro endpoint apenas para remover a imagem do produto (a exclusão deve acontecer no servidor e no campo imagem do banco de dados também).

-   Todos os endpoints deverão receber o token do usuario autenticado e validar se o produto em questão pertence a ele.

-   Você deve configurar o servidor de armazenamento na `Backblaze` com suas próprias credenciais. Lembrando que não deve manter as suas credenciais no arquivo de exemplo das variáveis de ambiente.

-   Todo upload deverá ser feito em uma pasta chamada `produtos` e cada produto deve ter uma pasta, onde o nome da pasta deverá ser o seu identificador. Exemplo:

O produto possui id 30. Sendo assim, vou fazer o upload da imagem em `produtos/30/imagem.jpg`.

---

Preencha a checklist para finalizar o exercício:

-   [ ] Resolver o exercício revendo a aula se necessário
-   [ ] Adicionar as mudanças aos commits (`git add .` para adicionar todos os arquivos ou `git add nome_do_arquivo` para adicionar um arquivo específico)
-   [ ] Commitar a cada mudança significativa ou na finalização do exercício (`git commit -m "Mensagem do commit"`)
-   [ ] Pushar os commits no seu fork na origem (`git push origin nome-da-branch`)

###### tags: `back-end` `nodeJS` `PostgreSQL` `API REST` `deploy` `query builder` `upload de arquivos`
