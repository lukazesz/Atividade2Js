/*
3. O que acontece aqui?
```javascript
const pessoa = { nome: "Lucas", endereco: { cidade: "RJ", cep: "12345" } };
const { endereco: { cidade } } = pessoa;
console.log(cidade);
```
a) "RJ"
b) { cidade: "RJ" }
c) undefined
d) erro
e) "12345"
*/
const pessoa = { nome: "Lucas", endereco: { cidade: "RJ", cep: "12345" } };
const { endereco: { cidade } } = pessoa;
console.log(cidade); // a) "RJ"