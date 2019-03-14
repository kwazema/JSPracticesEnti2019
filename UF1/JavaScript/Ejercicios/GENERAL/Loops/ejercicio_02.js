const notas = [ 1, 2, 3 ];

notas.forEach(element => {
    console.log(element += element);
});

console.log("\n");


let element = 0;
for (let index = 0; index < notas.length; index++) {
    element = element + notas[index];
}

console.log(element);