const notas = [ 1, 2, 3 ];

notas.forEach(element => {
    console.log(element);
});

console.log("\n");

for (let index = (notas.length - 1); index >= 0; index--) {
    console.log(notas[index]);
}