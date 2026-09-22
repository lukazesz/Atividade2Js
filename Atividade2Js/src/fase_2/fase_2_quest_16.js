/*
16. Explique passo a passo o funcionamento e o resultado do seguinte código:
```javascript
const arr = [1, 2, 3, 4, 5];
const resultado = arr.filter(n => n % 2 === 1).map(n => n * 3).reduce((acc, v) => acc + v, 10);
console.log(resultado);
```
*/
const arr = [1, 2, 3, 4, 5];
const resultado = arr.filter(n => n % 2 === 1).map(n => n * 3).reduce((acc, v) => acc + v, 10);
console.log(resultado); // 37
// passo a passo: 
// 1. filter: [1, 3, 5] pega os números ímpares
// 2. map: [3, 9, 15] multiplica cada número por 3
// 3. reduce: soma tudo (10 + 3 + 9 + 15 = 37)