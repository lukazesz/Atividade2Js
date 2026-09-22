/*
13. O que sai no console?
```javascript
let arr = [1, 2, 3];
arr = arr.concat([4, 5]);
console.log(arr);
```
a) [1, 2, 3]
b) [4, 5]
c) [1, 2, 3, 4, 5]
d) [5, 4, 3, 2, 1]
e) erro
*/
const arr = [1, 2, 3];
const newArr = arr.concat([4, 5]);
console.log(newArr); // c) [1, 2, 3, 4, 5]