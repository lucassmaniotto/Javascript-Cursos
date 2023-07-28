const { html2 } = require("./base");

// $1 $2 $3 - Retrovisores

console.log(html2);
// Referencia o primeiro grupo (\w+) em \1
console.log(html2.match(/<(\w+).*?>.+?<\/\1>/g));