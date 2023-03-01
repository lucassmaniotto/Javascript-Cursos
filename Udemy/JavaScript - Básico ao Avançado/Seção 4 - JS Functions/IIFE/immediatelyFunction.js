// IIFE -> Immediately Invoked Function Expression

(function() {
    console.log('Será executado na hora!')
    console.log('Foge do escopo mais abrangente!')
})();

(function(age, weight, height) {
    const surname = 'Smaniotto';
    function createName(name) {
        return name + ' ' + surname;
    }
    function sayName() {
        console.log(createName('Lucas'));
    }
    sayName();
    console.log(age, weight, height);
})(22, 81.6, 1.82);