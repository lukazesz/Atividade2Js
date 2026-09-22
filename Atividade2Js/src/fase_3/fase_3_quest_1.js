/*
1. O que será impresso no console?
```javascript
const usuario = { nome: "Ana", idade: 28, cidade: "SP" };
const { nome, ...resto } = usuario;
console.log(nome, resto);
```
a) "Ana" { idade: 28, cidade: "SP" }
b) "Ana" { idade: 28 }
c) "Ana" { cidade: "SP" }
d) { nome: "Ana" } "SP"
e) erro
*/
const usuario = { nome: "Ana", idade: 28, cidade: "SP" };
const { nome, ...resto } = usuario;
console.log(nome, resto); // a) "Ana" { idade: 28, cidade: "SP" }