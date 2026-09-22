/*
8. Analise o resultado:
```javascript
const valores = [10, 20, 30, 40];
function soma(a, b, ...resto) {
 return a + b + resto.length;
}
console.log(soma(...valores));
```
a) 30
b) 32
c) 33
d) 10
e) erro
*/
const valores = [10, 20, 30, 40];
function soma(a, b, ...resto) {
    return a + b + resto.length;
}
console.log(soma(...valores)); // c) 33 pois a função soma recebe os dois primeiros valores do array (10 e 20) como a e b, e o restante do array (30 e 40) como resto. A soma é 10 + 20 + 2 (o comprimento de resto), resultando em 33.