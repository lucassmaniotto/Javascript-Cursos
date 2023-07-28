// Encontre os CPFs e IPs no texto abaixo:
const { cpfs, ips } = require("./base");

// /\d{x} - Quantificador: x ocorrências
// console.log(cpfs.match(/\d{3}\.\d{3}\.\d{3}-\d{2}/g));
console.log(cpfs.match(/(\d{3}\.){2}\d{3}-\d{2}/g));

// /\d{x, y} - Quantificador: x até y ocorrências
// console.log(ips.match(/\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/g));
console.log(ips.match(/(\d{1,3}\.){3}\d{1,3}/g));
