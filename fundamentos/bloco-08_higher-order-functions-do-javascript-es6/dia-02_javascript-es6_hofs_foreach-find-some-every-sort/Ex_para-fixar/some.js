const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => arr.some(ele => ele === name);

// Logs
console.log(hasName(names, 'Ana')); // true scenario // at least one matching element was found in the array => returns true
console.log(hasName(names, 'Josefina')); // false scenario // not even one matching element was found in the array => returns false