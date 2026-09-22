/*
18. O código abaixo modifica o array original. Explique o motivo e proponha duas formas de 
evitar essa mutação:
```javascript
const lista = [4, 8, 12, 16];
const r = lista.splice(1, 2);
console.log(lista, r);
```
*/
// O método splice modifica o array original, removendo os elementos especificados.
// Formas de evitar a mutação:
// F1: Usar slice para criar uma cópia do array antes de aplicar splice:
let lista = [4, 8, 12, 16];
let r = lista.slice(1, 3);
console.log(lista, r);
// F2: Usar filter para criar um novo array sem os elementos especificados:
let lista2 = [4, 8, 12, 16];
let r2 = lista2.filter((_, i) => i !== 1 && i !== 2);
console.log(lista2, r2);