/*
17. Reescreva o seguinte código sem usar map, filter ou reduce, apenas laços e condicionais:
```javascript
const arr = [10, 15, 22, 34, 45, 60];
const processado = arr.filter(n => n % 3 === 0).map(n => ({ original: n, metade: n / 2 
})).reduce((acc, obj) => acc + obj.metade, 0);
console.log(processado);
```
*/
const arr = [10, 15, 22, 34, 45, 60];
let processado = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 3 === 0) {
        processado += arr[i] / 2;
    }
}
console.log(processado);