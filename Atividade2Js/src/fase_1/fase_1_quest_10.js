/*
10. O que acontece com o código?
```javascript
const arr = [2, 4, 6];
const soma = arr.reduce((a, b) => a + b, 0);
console.log(soma);
```
a) 0
b) 2
c) 6
d) 12
e) erro
*/
const arr = [2, 4, 6];
const soma = arr.reduce((a, b) => a + b, 0);
console.log(soma); // d) 12