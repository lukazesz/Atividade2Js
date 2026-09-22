/*
14. Qual o output?
```javascript
const arr = [1, 2, 3];
const func = ([x, ...resto], y = [...resto, x]) => {
 return y;
};
console.log(func(arr));
```
a) [2, 3, 1]
b) [3, 2, 1]
c) [3, 1, 2]
d) [1, 2, 3]
e) erro
*/
const arr = [1, 2, 3];
const func = ([x, ...resto], y = [...resto, x]) => {
  return y;
};
console.log(func(arr)); // a) [2, 3, 1]