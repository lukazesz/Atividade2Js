/*
4. O que será impresso?
```javascript
const valores = [1, 2, 3];
valores.unshift(0);
console.log(valores);
```
a) [1, 2, 3]
b) [0, 1, 2, 3]
c) [3, 2, 1, 0]
d) []
e) [1, 2, 3, 0]
*/
const valores = [1, 2, 3];
valores.unshift(0);
console.log(valores); // b) [0, 1, 2, 3]