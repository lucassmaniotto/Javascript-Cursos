const { html } = require('./base')

// Greedy - vai até o final da string
console.log(html.match(/<.+>.+<\/.+>/g));
console.log('-------------------');
// Non-Greedy - vai até o primeiro match
console.log(html.match(/<.+?>.+?<\/.+?>/g));