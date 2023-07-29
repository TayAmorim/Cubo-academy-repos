![](https://i.imgur.com/xG74tOh.png)

# Exercício 01

## Implementação de Api para sistemas de Biblioteca

Parabéns... Você foi selecionado para trabalhar em um projeto de uma Api para um sistema de bibliotecas. Seguindo todos os requisitos abaixo, faça as devidas implementações da Api.

Obs.: Será um grande diferencial manter o código legível e bem organizado.

_É preciso realizar todas as validações necessárias para evitar erros no banco de dados_

A API precisa se conectar com um banco de dados `postgreSQL` chamado `biblioteca` e todo código de criação das tabelas deverá se colocado no arquivo `dump.sql`

1 - Implemente uma tabela chamada `autores` contendo as seguintes características:

- Um identificador único do autor como chave primaria e auto incremento;
- O nome (obrigatório)
- A idade

2 - Implemente na API a funcionalidade de cadastrar um autor no banco de dados seguindo as especificações abaixo:

`POST /autor`

Exemplo de entrada

```
{
    "nome": "Guido Cerqueira",
    "idade": 32
}
```

Exemplo de saída

```
{
    "id": 1
    "nome": "Guido Cerqueira",
    "idade": 32
}
```

ou

```
{
    "mensagem": "o campo nome é obrigatório."
}
```

3 - Implemente a funcionalidade de buscar um autor no banco de dados através do seu identificador único, seguindo as especificações abaixo:

`GET /autor/:id`

Exemplo de saída

```
{
    "id": 1
    "nome": "Guido Cerqueira",
    "idade": 32
}
```

ou

```
{
    "mensagem": "Autor não encontrado"
}
```

4 - Implemente uma tabela chamada `livros` contendo as seguintes características:

- Um identificador único do livro como chave primaria e auto incremento;
- O nome (obrigatório)
- O genero
- A editora
- A data de publicação no formato `YYYY-MM-DD`
- O identificador do autor responsável pelo livro

5 - Implemente a funcionalidade de cadastrar um livro para um autor no banco de dados seguindo as especificações abaixo:

`POST /autor/:id/livro`

Exemplo de entrada

```
{
	"nome": "Backend PHP",
	"genero": "Programação",
	"editora": "Cubos Academy",
	"data_publicacao": "2020-10-18"
}
```

Exemplo de saída

```
{
	"id": 2,
	"nome": "Backend PHP",
	"genero": "Programação",
	"editora": "Cubos Academy",
	"data_publicacao": "2020-10-18"
}
```

ou

```
{
    "mensagem": "o campo nome é obrigatório."
}
```

6 - O endpoint de buscar um autor deverá ser alterado para quando detalhar o autor, trazer a lista de seus livros cadastrados.

Exemplo de saída

```
{
    "id": 1,
    "nome": "Guido Cerqueira",
    "idade": 32,
    "livros": [
        {
            "id": 1,
            "nome": "Backend Nodejs",
            "genero": "Programação",
            "editora": "Cubos Academy",
            "data_publicacao": "2018-06-10"
        },
        {
            "id": 2,
            "nome": "Backend PHP",
            "genero": "Programação",
            "editora": "Cubos Academy",
            "data_publicacao": "2020-10-18"
        }
    ]
}
```

ou

```
{
    "mensagem": "livro não encontrado"
}
```

Obs.: Deverá implementar esta funcionalidade utilizando a cláusula `JOIN`.

7 - Implemente a funcionalidade de listar os livros cadastrados no banco de dados, com as informações do seu autor, seguindo as especificações abaixo:

`GET /livro`

Exemplo de saída

```
[
    {
        "id": 1,
        "nome": "Backend Nodejs",
        "genero": "Programação",
        "editora": "Cubos Academy",
        "data_publicacao": "2018-06-10",
        "autor": {
            "id": 1
            "nome": "Guido Cerqueira",
            "idade": 32
        }
    },
    {
        "id": 2,
        "nome": "Backend PHP",
        "genero": "Programação",
        "editora": "Cubos Academy",
        "data_publicacao": "2020-10-18",
        "autor": {
            "id": 1
            "nome": "Guido Cerqueira",
            "idade": 32
        }
    }
]
```

ou

```
[]
```

Obs.: Deverá implementar esta funcionalidade utilizando a cláusula `JOIN`.

E finalmente o job será entregue e mais uma missão será cumprida. Parabéns!!!

---

Preencha a checklist para finalizar o exercício:

- [ ] Resolver o exercício revendo a aula se necessário
- [ ] Adicionar as mudanças aos commits (`git add .` para adicionar todos os arquivos ou `git add nome_do_arquivo` para adicionar um arquivo específico)
- [ ] Commitar a cada mudança significativa ou na finalização do exercício (`git commit -m "Mensagem do commit"`)
- [ ] Pushar os commits no seu fork na origem (`git push origin nome-da-branch`)

###### tags: `exercícios` `lógica` `banco de dados` `sql` `postgres`
