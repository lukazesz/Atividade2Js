/*
2. Qual é o valor de resultado?
```javascript
const numeros = [1, 2, 3, 4, 5];
const [a, , b, ...c] = numeros;
console.log(a, b, c);
```
a) 1 3 [4, 5]
b) 1 2 [3, 4, 5]
c) 1 4 [5]
d) 1 3 []
e) erro
*/
const numeros = [1, 2, 3, 4, 5];
const [a, , b, ...c] = numeros;
console.log(a, b, c); // a) 1 3 [4, 5]