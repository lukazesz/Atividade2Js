/*
4. Qual será o resultado impresso?
```javascript
const base = { a: 1, b: 2 };
const extra = { b: 3, c: 4 };
const combinado = { ...base, ...extra };
console.log(combinado);
```
a) { a: 1, b: 2, c: 4 }
b) { a: 1, b: 3, c: 4 }
c) { a: 1, b: [2, 3], c: 4 }
d) { b: 3 }
e) erro
*/
const base = { a: 1, b: 2 };
const extra = { b: 3, c: 4 };
const combinado = { ...base, ...extra };
console.log(combinado); // b) { a: 1, b: 3, c: 4 }