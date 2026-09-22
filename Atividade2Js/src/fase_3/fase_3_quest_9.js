/*
9. O que será logado?
```javascript
const usuario = {
 nome: "Carlos",
 habilidades: ["JS", "Python", "SQL"]
};
const { habilidades: [h1, , h3] } = usuario;
console.log(h1, h3);
```
a) "JS" "SQL"
b) ["JS"] ["SQL"]
c) "Carlos" "SQL"
d) "JS" undefined
e) erro
*/
const usuario = {
    nome: "Carlos",
    habilidades: ["JS", "Python", "SQL"]
};
const { habilidades: [h1, , h3] } = usuario;
console.log(h1, h3); // a) "JS" "SQL"