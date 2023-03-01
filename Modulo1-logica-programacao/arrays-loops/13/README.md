![](https://i.imgur.com/xG74tOh.png)

# Exercício 13

## Verificando disjuntores

Precisamos verificar em uma caixa de disjuntores quais estão ligados.

A caixa de disjuntores é representada por um array onde, cada item do array é um disjuntor. Nesse array o índice do item é a identificação do disjuntor (começando em 0) e o valor do item, um `boolean`, é a indicação se o disjuntor está ligado ou não. Imprima no console a posição **apenas dos disjuntores que estão ligados**, se possível, utilizar o conceito de **_truthiness_**.

#### Exemplo:

Tendo o array de 8 disjuntores a seguir:

```javascript
const disjuntores = [false, false, true, false, false, true, false, false];

// seu codigo aqui
```

Escreva o código que imprimirá no console:

```
2
5
```

#### Exemplo 2:

Tendo o array de 10 disjuntores a seguir:

```javascript
const disjuntores = [
  false,
  true,
  true,
  false,
  false,
  true,
  false,
  false,
  true,
  true,
];

// seu codigo aqui
```

Escreva o código que imprimirá no console:

```
1
2
5
8
9
```

---

Preencha a checklist para finalizar o exercício:

- [ ] Resolver o exercício revendo a aula se necessário
- [ ] Adicionar as mudanças aos commits (`git add .` para adicionar todos os arquivos, ou `git add nome_do_arquivo` para adicionar um arquivo específico)
- [ ] Commitar a cada mudança significativa ou na finalização do exercício (`git commit -m "Mensagem do commit"`)
- [ ] Pushar os commits na sua branch na origem (`git push origin nome-da-branch`)

###### tags: `lógica` `módulo 1` `exercício de classe` `nodeJS` `boolean`
