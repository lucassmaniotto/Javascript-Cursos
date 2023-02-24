/* Operators: 

    || -> or
    && -> and
    != , !== -> non equal 

*/

// Ternary operator
const minimalAge = 18;
const client1Age = 16;
const client2Age = 21;

if (client1Age >= minimalAge)
    console.log("Sale authorized")
else
    console.log("Sale unathorized")

console.log(client2Age >= minimalAge ? "Sale authorized" : "Sale unathorized")