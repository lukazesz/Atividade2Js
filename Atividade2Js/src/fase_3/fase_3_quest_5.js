/*
5. Qual será a saída?
```javascript
function teste({ x = 10, y = 20 } = {}) {
 console.log(x + y);
}
teste({ x: 5 });
```
a) 15
b) 25
c) 30
d) 5
e) erro
*/
function teste({ x = 10, y = 20 } = {}) {
    console.log(x + y);
}
teste({ x: 5 }); // b) 25