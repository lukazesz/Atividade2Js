/*
9. Qual será o print?
```javascript
const nums = [3, 6, 9, 12];
const filtrado = nums.filter(n => n > 6);
console.log(filtrado);
```
a) [3, 6]
b) [12]
c) [9, 12]
d) [6, 9]
e) []
*/
const nums = [3, 6, 9, 12];
const filtrado = nums.filter(n => n > 6);
console.log(filtrado); // c) [9, 12]