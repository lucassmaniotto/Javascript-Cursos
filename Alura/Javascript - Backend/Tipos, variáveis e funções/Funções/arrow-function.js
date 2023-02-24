function introduce(name){
    return `My name is ${name}`
}

const introduceArrow = name => `My name is ${name}`;

console.log(introduce("Darth"));
console.log(introduceArrow("Vader"));

const sumShortNumber = (x, y) => {
    if(x  > 10 || y > 10)
        return "The number is higher then 10"
    else
        return x + y
}

console.log(sumShortNumber(11 , 1))
console.log(sumShortNumber(1 , 1))