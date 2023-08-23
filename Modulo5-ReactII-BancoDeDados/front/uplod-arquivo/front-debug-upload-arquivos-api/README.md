![](https://i.imgur.com/xG74tOh.png)

# API 

### Aula: Debug no frontend e upload de arquivos


Para realizar a aula você precisa baixar esse repositório e seguir os passos abaixo:
1. Clonar o repositório
2. Entrar na pasta do projeto via `cmd` ou `terminal` e executar o comando `npm install` para que as dependências sejam instaladas
3. Após a instalação das dependẽncias você já poderá executar o projeto rodando o comando `npm run dev`.

---

### Para o upload de arquivos temos dois end-points

#### 1. [POST] http://localhost:3003/upload/multipart

Nesse endopint você fará upload de arquivos usando a estratégia do multipart/form-data.
Resumidamente você precisa enviar uma requisição com um `Content-Type: multipart/form-data`.


#### 2. [POST] http://localhost:3003/upload/base64

Nesse endopint você fará upload de arquivos usando a estratégia do base64.
Resumidamente você precisa enviar uma requisição com um body no formato abaixo:

```json=
    {   
        "image":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAB4AAAAQ4CAIAAABnsVYUAAAKT2lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVNnVFPpFj333vRCS4iAlEtvUhUIIFJCi4AUkSYqIQkQSoghodkVUcERRUUEG8igiAOOjoCMFVEsDIoK2AfkIaKOg6OIisr74Xuja9a89+bN/rXXPues852zzwfACAyWSDNRNYAMqUIeEeCDx8TG4eQuQIEKJHAAEAizZCFz"
    }
```
    
Para conseguir o base64 de uma imagem precisamos usar uma função, básica (**no frontend**):

```javascript=
    export async function fileToBase64(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
      });
    }
```

---

Obs.: Em caso de dúvidas, procure um dos monitores

---

Preencha a checklist para fazer os exercícios:

-   [ ] Fazer o fork do repositório para sua conta
-   [ ] Executar `git clone` do seu fork no terminal para clonar o repositório, ou clonar de outra maneira
-   [ ] Após fazer e commitar todos os exercícios fazer o `git push` para seu fork
-   [ ] Copiar a url do seu fork e enviar na plataforma

###### tags: `módulo 4` `front-end` `React`

