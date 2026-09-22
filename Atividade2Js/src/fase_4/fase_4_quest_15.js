/*
15. Analise o comportamento:
```javascript
const config1 = { modo: "dark", opcoes: { layout: "grid", zoom: 100 } };
const config2 = { ...config1, opcoes: { ...config1.opcoes } };
config2.opcoes.zoom = 200;
console.log(config1.opcoes.zoom, config2.opcoes.zoom);
```
a) 100 100
b) 200 200
c) 100 200
d) undefined 200
e) erro
*/
const config1 = { modo: "dark", opcoes: { layout: "grid", zoom: 100 } };
const config2 = { ...config1, opcoes: { ...config1.opcoes } };
config2.opcoes.zoom = 200;
console.log(config1.opcoes.zoom, config2.opcoes.zoom); // c) 100 200.  o spread operator cria uma cópia superficial do objeto, então a alteração em config2 não afeta config1.