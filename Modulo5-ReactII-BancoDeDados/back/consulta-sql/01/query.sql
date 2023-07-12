1 - Selecione apenas os compositores e o identificador de todos os registros da tabela `musicas`.
select compositor,id from musicas;

2 - Selecione as composições e o tempo de cada composição, de todos os registros da tabela `musicas`, onde o tempo seja maior que 4 minutos.
select composicao, tempo from musicas where tempo > 240

3 - Selecione os compositores e suas composições que tenham identificadores entre 47 e 123.
select compositor, composicao from musicas where id between 47 and 123

4 - Selecione todos os registros com todos os campos da tabela `musicas`, onde o 
compositor não seja nulo, o tempo seja menor que 5 minutos e o nome do compositor seja diferente de `Bach`.
SELECT * FROM musicas where compositor IS NOT NULL AND tempo < 300 and compositor != 'Bach'

5 - Selecione as composições e o tempo de cada composição, de todos os registros da tabela `musicas`, onde o compositor seja `Mozart` ou `Bach`.
SELECT composicao, tempo from musicas where compositor = 'Mozart' OR compositor = 'Bach'

6 - Selecione todos os registros com todos os campos da tabela `musicas` e faça uma ordenação pelo identificador em ordem decrescente.
Select * from musicas order by id desc

7 - Selecione todos os registros com todos os campos da tabela `musicas` e faça uma ordenação pelo tempo de execução 
de cada música, da que leva mais tempo a ser executada para a que leva menos tempo.
select * from musicas order by tempo desc

8 - Selecione as 5 composições, com todos os campos da tabela `musicas`, nas quais sejam as 5 composições mais rápida em tempo de execução.
select composicao from musicas order by tempo asc limit 5

9 - Selecione as 10 composições, com todos os campos da tabela `musicas`, nas quais sejam as 10 composições que mais demora em tempo de execução.
select composicao from musicas order by tempo desc limit 10

10 - Selecione 10 registros, com todos os campos da tabela `musicas`, de forma que esses 10 registros sejam os 
que tenham menor tempo de execução com exceção dos 5 primeiro mais rápidos.
select * from musicas order by tempo asc limit 10 offset 5

11 - Seguindo o conceito de paginação de resultados, sabendo que cada página retorna apenas 10 resultados, faça a listagem dos registros que correspondam a página 4.
select * from musicas limit 10 offset 40

12 - Seguindo o conceito de paginação de resultados, sabendo que cada página retorna apenas 12 resultados, faça a listagem dos registros que correspondam a página 6.
select * from musicas limit 10 offset 60

13 - Selecione todos os compositores da tabela `musicas` de forma que os resultados não sejam repetidos e não esteja nulo.
select distinct compositor from musicas where compositor is not null

14 - Selecione os compositores e as composições da tabela `musicas` de forma que os resultados não sejam repetidos.
select distinct compositor, composicao from musicas

15 - Selecione todos os campos da tabela `musicas` e os registros que o nome do compositor comece exatamente com `Bra`,
 isso significa que se a primeira letra não form maiúscula está incorreto.
 select * from musicas where compositor like 'Bra%'

16 - Selecione todos os campos da tabela `musicas` e os registros que o ritmo possua a última palavra igual a `troppo` 
independente do restante do texto que antecede, mas que seja exatamente a última palavra do texto.
select * from musicas where ritmo like '%troppo'


17 - Faça uma busca nos registros da tabela `musicas` e retorne somente os registros que possua em qualquer posição do texto, da composição,
 a palavra `quartet`, independente de ser maiúscula ou minúscula.
 select * from musicas where composicao ilike '%quartet%'

18 - Faça uma busca nos registros da tabela `musicas` e retorne somente os registros que não possua a palavra `quintet` 
na coluna composição, independente de ser maiúscula ou minúscula.
select * from musicas where composicao not ilike '%quintet%' 

