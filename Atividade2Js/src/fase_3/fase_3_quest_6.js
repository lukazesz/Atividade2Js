/*
6. O que este código imprime?
```javascript
const arr1 = [1, 2];
const arr2 = [3, 4];
const arr3 = [...arr1, ...arr2, 5];
console.log(arr3);
```
a) [1, 2, 3, 4]
b) [1, 2, [3, 4], 5]
c) [1, 2, 3, 4, 5]
d) [[1, 2], [3, 4], 5]
e) erro
*/
const arr1 = [1, 2];
const arr2 = [3, 4];
const arr3 = [...arr1, ...arr2, 5];
console.log(arr3); // c) [1, 2, 3, 4, 5]