
/*---- Forma antigua -----*/
function sum1(a, b) {
    console.log(a + b);
}
sum1(1, 2);

/*---- Forma actual (Arrow Function) -----*/
const sum2 = (a, b) => { //=> identifica que es una funcion
    console.log(a + b);
};
sum2(5,3);

const sum3 = (a, b) => a + b; //solo retorno
const result = sum3(5, 2);
console.log(result);

console.log(sum3(10, 10));
