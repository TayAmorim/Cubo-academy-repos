![](https://i.imgur.com/xG74tOh.png)

# Exercício 03

## Consulta de imóveis

Neste exercício deverá ser criado um servidor para consulta de imóveis pré cadastrados. Este servidor deverá ser feito em nodejs e deverá ser acessado através do endereço `http://localhost:8000`. A lista pré cadastrada de imóveis no servidor deverá ser um array de objetos onde cada objeto representará um imóvel e possuirá propriedades que definem o imóvel conforme exemplo abaixo:

```javascript
const imoveis = [
    {
        id: 1,
        logradouro: "Av. Getúlio Vargas",
        numero: 1458,
        complemento: "Térreo",
        bairro: "Funcionários",
        cidade: "Belo Horizonte",
        cep: "30112-021",
    },
    {
        id: 2,
        logradouro: "Av. Paulista",
        numero: 1009,
        complemento: "16º andar",
        bairro: "Cerqueira César",
        cidade: "São Paulo",
        cep: "01310-100",
    },
]
```

Este servidor deverá possuir apenas um recurso **imoveis** e apenas duas rotas que utilizem o verbo **HTTP GET**. Segue abaixo as rotas:
```
/imoveis
/imoveis/{id}
```

Para a requisição **HTTP GET** na rota `http://localhost:8000/imoveis` deverá ser retornada a lista completa de imóveis, como no exemplo abaixo:

```json
[
    {
        "id": 1,
        "logradouro": "Av. Getúlio Vargas",
        "numero": 1458,
        "complemento": "Térreo",
        "bairro": "Funcionários",
        "cidade": "Belo Horizonte",
        "cep": "30112-021"
    },
    {
        "id": 2,
        "logradouro": "Av. Paulista",
        "numero": 1009,
        "complemento": "16º andar",
        "bairro": "Cerqueira César",
        "cidade": "São Paulo",
        "cep": "01310-100"
    }
]
```

A outra rota deverá receber um parâmetro na URL que é o **ID** do imóvel a ser consultado e deverá retornar apenas 1 objeto, que é o objeto correspondente ao **ID** passado como parâmetro na URL.

Portanto para a requisição **HTTP GET** na rota `http://localhost:8000/imoveis/2` deverá ser retornado o apenas o objeto referente ao ID passado, como no exemplo abaixo:

```json
{
    "id": 2,
    "logradouro": "Av. Paulista",
    "numero": 1009,
    "complemento": "16º andar",
    "bairro": "Cerqueira César",
    "cidade": "São Paulo",
    "cep": "01310-100"
}
```

Além dos requisitos acima, o servidor deverá ser separado em camadas, de forma que cada um dos componentes (inicialização dos servidor, rotas, controladores e dados) fiquem em arquivos e pastas diferentes. Para contemplar essa divisão, iremos evoluir o servidor em etapas, que serão descritas abaixo.

_**Obs.:** Ao final de cada etapa, o servidor sempre deverá estar funcionando da mesma maneira para o cliente, portanto devemos testar as requisições e retornos ao final de cada etapa._

**a) API em único arquivo**

Precisaremos inicializar uma aplicação (pacote) nodejs e instalar os pacotes necessários para criar um servidor.

Além disso, criaremos o servidor em um único arquivo, para isso, precisaremos ter o arquivo **index.js**, onde toda a execução dos servidor acontecerá (importação dos pacotes necessários, construção da aplicação, definição do array de imoveis e definição dos métodos que atenderão as rotas mencionadas antes).

**b) Camada de dados**

Após o servidor estar funcionando em único arquivo, realizaremos a separação da camada de dados. Para isso deveremos criar um diretório chamado **dados** no mesmo nível do arquivo **index.js** e dentro do novo diretório criar um arquivo chamado **imoveis.js** onde deverá estar a definição de uma constante **imoveis** que possuirá como valor o array de imóveis que antes existia no arquivo principal do servidor.

Lembre-se de no final deste arquivo **imoveis.js** exportar a constante **imoveis**

Já no arquivo principal **index.js** deverá ser removida a definição do array **imoveis** que antes ali existia, e agora deveremos importar o arquivo **imoveis.js** que acabamos de criar no diretório **dados** para dentro de uma constante chamada **imoveis**.

Feito isso teremos separado a camada de dados e a API deverá se manter funcionando normalmente como estava antes.

**c) Controladores**

Chegou o momento de separar a camada de controladores. Para isso criaremos um diretório chamado **controladores** no mesmo nível do arquivo principal **index.js** e dentro deste novo diretório deveremos criar um arquivo **imoveis.js**.

Neste novo arquivo **imoveis.js** importaremos o array do arquivo **imoveis.js** do diretório de dados para dentro de uma constante **imoveis**.

Após a importação dos dados, criaremos dois métodos **get** e **getPorId** (ambos recebendo dois parâmetros **req** e **res**), que possuirão as lógicas que antes estavam no arquivo principal **index.js** para, responder a lista completa (array inteiro) de imóveis e para responder um único objeto de imóvel correspondente ao ID recebido na requisição, respectivamente.

Lembre-se de no final do arquivo de controladores, exportar os dois métodos dentro de um objeto.

Para utilizar os novos controladores, deveremos importar o arquivo **imoveis.js** do diretório **controladores** no arquivo principal **index.js** do servidor (neste ponto podemos utilizar a desestruturação para definir duas variáveis diferentes para cada um dos métodos de controladores que serão importados).

Após importar os métodos em variáveis, deveremos passar essas variáveis que guardam as funções como parâmetros para os métodos que configuram as duas rotas **GET**, substituindo as funções que ali estavam, implementando as lógicas para cada uma das rotas.

**Após importar os controladores e passar os métodos para as configurações de rotas, o servidor deverá estar funcionando perfeitamente como no início.**

**Obs.:** Note que a importação do arquivo de dados não será mais necessária no arquivo principal **index.js**, e portanto, poderá ser removida.

**d) Roteadores**

Para finalizar nosso servidor dividido em camadas, deveremos separar a configuração das rotas. Para isso, deveremos criar um arquivo **roteador.js** no mesmo nível do arquivo principal **index.js**.

Neste novo arquivo, precisaremos realizar as importações necessárias e em seguida colocar os comandos que configuram as duas rotas que nosso servidor possui.

Lembre-se de no final do arquivo, exportar nosso roteador.

Já no arquivo principal **index.js**, para que nosso roteador possa ser utilizado, deveremos importá-lo e em seguida usá-lo.

**Com o roteador pronto, sendo importado e usado no arquivo principal, nosso servidor deverá estar funcionando normalmente como no início.**

**Obs.:** Note que no arquivo principal, após criar, importar e utilizar o roteador, não precisaremos mais ter a importação dos controladores, que poderá ser apagada.

--

Para finalizar o exercício, após fazer todas as divisões de camadas solicitadas acima, teste seus métodos verificando se eles estão nas rotas corretas, recebendo os parâmetros corretos (quando for o caso) e respondendo o que deveria ser respondido.

---

Preencha a checklist para finalizar o exercício:

-   [ ] Resolver o exercício revendo a aula se necessário
-   [ ] Adicionar as mudanças aos commits (`git add .` para adicionar todos os arquivos, ou `git add nome_do_arquivo` para adicionar um arquivo específico)
-   [ ] Commitar a cada mudança significativa ou na finalização do exercício (`git commit -m "Mensagem do commit"`)
-   [ ] Pushar os commits na sua branch na origem (`git push origin nome-da-branch`)

###### tags: `backend` `lógica` `exercício` `nodeJS` `JavaScript`
