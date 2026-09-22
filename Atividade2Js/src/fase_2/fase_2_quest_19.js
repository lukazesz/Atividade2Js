/*
19. Explique como agrupar elementos de um array de objetos pela propriedade 'cidade' 
usando apenas métodos de array:
```javascript
const pessoas = [ { nome: 'Ana', cidade: 'SP' }, { nome: 'Lucas', cidade: 'RJ' }, { nome: 'Bruna', 
cidade: 'SP' }, { nome: 'Caio', cidade: 'MG' } ];
```
*/
const agrupadas = pessoas.reduce((acc, pessoa) => {
    const cidade = pessoa.cidade;
    if (!acc[cidade]) {
        acc[cidade] = [];
    }
    acc[cidade].push(pessoa);
    return acc;
}, {});
// O método reduce é utilizado para iterar sobre o array de objetos 'pessoas' e agrupar os elementos pela propriedade 'cidade'. Ele cria um objeto acumulador (acc) onde cada chave corresponde a uma cidade e o valor é um array contendo os objetos das pessoas que pertencem a essa cidade. Se a cidade ainda não existir no acumulador, ela é inicializada como um array vazio antes de adicionar a pessoa correspondente. No final, o resultado é um objeto com as pessoas agrupadas por cidade.