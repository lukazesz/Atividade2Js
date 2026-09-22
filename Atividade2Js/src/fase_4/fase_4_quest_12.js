/*
12. Qual é o resultado?
```javascript
const obj = {
 id: 1,
 dados: {
 nome: "Ana",
 preferencias: {
 tema: "escuro",
 fonte: "Sans"
 }
 }
};
const { dados: { preferencias: { tema }, ...resto } } = obj;
console.log(tema, resto);
```
a) "escuro" { nome: "Ana" }
b) "escuro" { preferencias: { fonte: "Sans" } }
c) "Sans" { nome: "Ana" }
d) "escuro" { preferencias: { tema: "escuro", fonte: "Sans" }, nome: "Ana" }
e) erro
*/
const obj = {
 id: 1,
 dados: {
 nome: "Ana",
 preferencias: {
 tema: "escuro",
 fonte: "Sans"
 }
 }
};
const { dados: { preferencias: { tema }, ...resto } } = obj;
console.log(tema, resto); // a) "escuro" { nome: "Ana" }