const names= ['João','Ana', 'Caio', 'Lara', 'Majorie', 'Leo']

// index, quantidade a ser removida, inserção no local
names.splice(1, 2, 'Rudigo')

// terceiro parametro não é necessário
names.splice(2, 1)

// também pode ser usado somente para inserção
names.splice(3, 0 , 'Marcos')

console.log(names)