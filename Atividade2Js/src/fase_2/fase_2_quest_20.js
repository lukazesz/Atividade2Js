/*
20. Detalhe a diferença entre os métodos find, filter e some analisando o código:
```javascript
const valores = [5, 8, 12, 8, 3];
const a = valores.find(v => v === 8);
const b = valores.filter(v => v === 8);
const c = valores.some(v => v === 8);
console.log(a, b, c);
```
*/
// find: retorna o primeiro elemento que satisfaz a condição (8)
// filter: retorna um array com todos os elementos que satisfazem a condição ( [8, 8] )
// some: retorna um booleano indicando se pelo menos um elemento satisfaz a condição (true)