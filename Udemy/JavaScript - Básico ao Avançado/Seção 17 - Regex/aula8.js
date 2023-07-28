const { lookahead } = require("./base");

console.log(lookahead);

// .+ -> pega tudo
// [^in] -> está sendo negado
// active$ -> termina com active
// g -> global: pega todas as ocorrências
// i -> insensitive: não diferencia maiúsculas de minúsculas
// m -> multiline: pega todas as ocorrências em várias linhas
console.log(lookahead.match(/.+[^in]active$/gim));

// Positive lookahead
// (?=) -> checa se existe o que está dentro do parênteses e retorna o que está fora
// \s+ -> retira os espaços
console.log(lookahead.match(/.+(?=[^in]active)/gim));
console.log(lookahead.match(/.+(?=\s+inactive)/gim));

// Negative lookahead
// (?!) -> checa se não existe o que está dentro do parênteses e retorna o que está fora
console.log(lookahead.match(/^(?!.+\s+inactive).+$/gim));
console.log(lookahead.match(/^(?!.+[^in]active).+$/gim));