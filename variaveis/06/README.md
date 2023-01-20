![](https://i.imgur.com/xG74tOh.png)

# Exercício 06

## Velocidade média

Suponha que você está trabalhando no desenvolvimento de um app para smart watch que calcula a velocidade média de uma pessoa que está usando o dispositivo numa corrida.

Calcule a velocidade média dessa pessoa a partir da distância percorrida pela pessoa e pelo tempo que passou, utilizando a fórmula abaixo.

$$ Velocidade = \frac{distPercorrida}{tempo} $$

Contudo, as informações de distância que você recebe estão em metros e o tempo em segundos. Ou seja, ao aplicar esta fórmula, a velocidade estará em metros por segundo. O ideal é que o seu usuário veja a velocidade em km/h.

Para isso, após fazer o calcula da velocidade, você deve transformar a unidade de metros por segundo para km/h. Para isso, basta multiplicar o resultado por 3,6.

#### Exemplo:

\
Considere:

**distPercorrida:** 500 m \
**tempo:** 10 s

$$ Velocidade = \frac{500}{10} $$

$$ Velocidade = 50 m/s $$

Para converter esse valor em _km/h_:

$$ Velocidade = 50 \* 3,6 $$

$$ Velocidade = 180km/h $$

O seu programa deverá imprimir o montante com base no input recebido.

---

Preencha a checklist para finalizar o exercício:

- [x] Resolver o exercício revendo a aula se necessário
- [x] Adicionar as mudanças aos commits (`git add .` para adicionar todos os arquivos ou `git add nome_do_arquivo` para adicionar um arquivo específico)
- [x] Commitar a cada mudança significativa ou na finalização do exercício (`git commit -m "Mensagem do commit"`)
- [x] Pushar os commits na sua branch na origem (`git push origin nome-da-branch`)

###### tags: `lógica` `módulo 1` `exercício de casa` `matemática` `nodeJS`
