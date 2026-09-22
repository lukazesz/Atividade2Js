/*
11. O que será impresso?
```javascript
const matriz = [ [1, 2], [3, 4], [5, 6] ];
const [, [, y], ...resto] = matriz;
console.log(y, resto);
```
a) 2 [[5, 6]]
b) 4 [[5, 6]]
c) 4 [[3, 4], [5, 6]]
d) 2 [[3, 4], [5, 6]]
e) erro
*/
const matriz = [ [1, 2], [3, 4], [5, 6] ];
const [, [, y], ...resto] = matriz;
console.log(y, resto); // b) 4 [[5, 6]]