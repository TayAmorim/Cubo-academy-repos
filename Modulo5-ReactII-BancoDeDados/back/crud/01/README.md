![](https://i.imgur.com/xG74tOh.png)

# Exercício 01

## CRUD de usuários

1 - Você acaba de conseguir fechar um freela pra gerir um banco de dados de uma aplicação e a primeira demanda é trabalhar na tabela de usuários. Sabendo que essa tabela é a principal tabela desse banco de dados.

Sendo assim, faça a criação de um banco de dados em seu computador chamado `exercicio_crud_sql` para que seja possível executar as queries criada por vc e execute o script de criação da tabela `usuarios` abaixo:

```sql
create table usuarios (
	id serial,
  	nome text not null,
  	idade smallint,
  	email varchar(50),
  	senha varchar(8) not null
);
```

2 - Após criar a tabela, chegou a hora de inserir os registros conforme solicitado pelo cliente. Seguindo a tabela abaixo cadastre todos os registros.

| nome                 | idade | email                            | senha    |
| -------------------- | ----- | -------------------------------- | -------- |
| Aretha Montgomery    | 30    | augue.id.ante@odioAliquam.com    | a0B13O3L |
| Camden H. Bartlett   | 15    | turpis.vitae.purus@risusDuisa.ca | p3P96F3Q |
| Raja W. Coffey       | 30    | raja.feugiat@nonummy.com         | s5F51T7L |
| Elton D. Olsen       | 29    | auctor@duiFuscediam.edu          | k5X25B0R |
| Shelley E. Frederick | 20    | raja.feugiat@nonummy.com         | u2D18F6E |

3 - Após ter inserido os registros na tabela `usuarios`, foi identificado que o registro que possui o e-mail `raja.feugiat@nonummy.com` informou seu nome errado. Faça uma atualização nesse registro alterando o nome para `Raja W. Coffey Thomas`.

4 - O cliente percebeu que na tabela enviada anteriormente para inserir os usuários no banco de dados tinha um problema. Dois registros possui o mesmo e-mail e ao atualizar o nome do registro de e-mail `raja.feugiat@nonummy.com` essa alteração acabou afetando os dois registros que possui o mesmo e-mail. Isso precisa ser resolvido urgentemente e a solução é alterar o campo e-mail para não permitir e-mails duplicados, nem que seja necessário apagar todos os registros com o mesmo e-mail. Para alterar a tabela `usuarios` execute o `código sql` abaixo, porém, antes é necessário excluir um dos dois registros duplicados para evitar erro ao tentar alterar a tabela.

```sql
alter table usuarios add constraint email_unique_usuarios unique(email);
```

5 - Ufa!! Ainda bem que o problema foi resolvido. O cliente acabou de mandar outra tabela com mais cadastros para serem inseridos na tabela `usuarios`.

| nome                | idade | email                                | senha    |
| ------------------- | ----- | ------------------------------------ | -------- |
| Jermaine G. Sellers | 16    | ligula.Nullam@tortordictum.co.uk     | o2P56U9U |
| James D. Kennedy    | 23    | amet@Nulladignissim.com              | q6B78V3V |
| Amelia S. Harris    | 29    | nec.metus.facilisis@vitaealiquet.edu | l4S64Y3A |
| Joel M. Hartman     | 18    | montes.nascetur@odiotristique.co.uk  | c4Q27D7O |
| Elmo K. Greer       | 18    | risus.Duis@eget.ca                   | e3P92I7R |

**Atenção** O gerente do projeto entrou em contato e pediu para adicionar um novo campo a tabela `usuarios` que aceite somente dois valores (Verdadeiro ou Falso). Nesse campo, caso não seja informado nada ao inserir um registro, significa que por padrão é verdadeiro. Ahh... O campo chamado `situacao`, representa a situação do usuário, se está ativo ou não. Para criar o campo, execute o `código sql` abaixo:

```sql
alter table usuarios add column situacao boolean default true;
```

6 - A solicitação anterior não era a toa. O cliente acabou de mandar o primeiro usuario que ele precisa inativar. Sendo assim, você precisa atualizar o registro que possui o e-mail `montes.nascetur@odiotristique.co.uk` alterando a situação dele para falso.

7 - Temos uma outra pequena demanda. O registro que possui o e-mail `risus.Duis@eget.ca` solicitou alteração da sua senha para `k9P31H1O`.

**Atenção** Só agora o gerente percebeu que seria melhor armazenar a data de nascimento do usuário no lugar da idade. Será necessário excluir o campo `idade` e adicionar um novo campo chamado `data_nascimento` que receberá uma data no formado `YYYY-MM-DD` que corresponde a `Ex.: 2021-05-30`. Para essa alteração, execute o `código sql` abaixo:

```sql
alter table usuarios drop column idade, add column data_nascimento date;
```

8 - Nesse momento, foi solicitado de cada usuário que enviasse a data de nascimento para que fosse atualizada no banco de dados e até o momento apenas dois enviaram. Faça a atualização dos respectivos registros:

a) O registro que possui o e-mail `auctor@duiFuscediam.edu` nasceu em `1991-09-29`;
a) O registro que possui o e-mail `nec.metus.facilisis@vitaealiquet.edu` nasceu em `1988-11-02`;

9 - Depois de tanto solicitar a data de nascimento para os usuários e até o momento somente dois enviaram, o cliente resolveu excluir definitivamente todos os registros que estão sem a data de nascimento. Esse Job precisa ser feito com muito cuidado, portanto, prossiga com cautela.

**Atenção** Para que nenhum outro registro seja adicionado sem a data de nascimento, o gerente solicitou que adicionasse uma restrição ao campo `data_nascimento` para que fosse um campo obrigatório. Sendo assim, solicitou que o `código sql` a seguir fosse executado:

```sql
alter table usuarios alter column data_nascimento set not null;
```

10 - Agora que a tabela de usuários parece ter ficado pronta, restaram apenas dois registros pendente de cadastro. Cadastre os registros a seguir para concluir seu Job.

| nome              | data_nascimento | email                      | senha    |
| ----------------- | --------------- | -------------------------- | -------- |
| Tate I. Dean      | 1989-05-01      | Nunc@etmagnis.edu          | d3V25D6Y |
| Arsenio K. Harmon | 1985-10-23      | adipiscing.elit@turpis.com | m3T58S0C |

Todo script construido deverá ser disponibilizado no arquivo `query.sql` do diretório atual.

Faça o teste com outros exemplos.

Faça commit do resultado.

---

Preencha a checklist para finalizar o exercício:

- [ ] Resolver o exercício revendo a aula se necessário
- [ ] Adicionar as mudanças aos commits (`git add .` para adicionar todos os arquivos, ou `git add nome_do_arquivo` para adicionar um arquivo específico)
- [ ] Commitar a cada mudança significativa ou na finalização do exercício (`git commit -m "Mensagem do commit"`)
- [ ] Pushar os commits na sua branch na origem (`git push origin nome-da-branch`)

###### tags: `SQL` `módulo 3` `exercício de classe` `postgres` `nodeJS`
