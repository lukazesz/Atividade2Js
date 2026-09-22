/*
7. O que será exibido?
```javascript
const config = { tema: "escuro", fonte: "Arial", tamanho: 14 };
const { tema: modo, ...opcoes } = config;
console.log(modo, opcoes.fonte);
```
a) "escuro" "Arial"
b) "tema" { fonte: "Arial" }
c) undefined "Arial"
d) "escuro" undefined
e) erro
*/
const config = { tema: "escuro", fonte: "Arial", tamanho: 14 };
const { tema: modo, ...opcoes } = config;
console.log(modo, opcoes.fonte); // a) "escuro" "Arial"