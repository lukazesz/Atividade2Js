/*
13. O que será exibido?
```javascript
const dados = { a: 1, b: 2, c: 3 };
function processar({ a, ...resto }) {
 resto.c = 99;
 return [a, resto];
}
const r = processar(dados);
console.log(dados.c, r[1].c);
```
a) 3 99
b) 99 99
c) 3 3
d) undefined 99
e) 3 undefined
*/
const dados = { a: 1, b: 2, c: 3 };
function processar({ a, ...resto }) {
  resto.c = 99;
  return [a, resto];
}
const r = processar(dados);
console.log(dados.c, r[1].c); // a) 3 99