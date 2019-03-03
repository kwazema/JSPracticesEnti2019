console.log("Hello world");

number = 5;
hola = 10;
adios = "hafasfa";

var y = 20; //var es antiguo
let frase = " Ola q ase?"; //let es la nueva forma de declarar
const myvar; //const no se pueden cambiar de tipo

console.log(1+1);
console.log(number);
console.log(hola + number, "Hola");
console.log(y + hola);
console.log(y + frase + " Espacio XD" + (y + y)); //Es es una puta gozada!

var estoEsArray = [10, 50.5, 857, "hola", "estoQEEEES", true, false]; //Subrealista..

var flecha = "->";

for (let int = 0; int < estoEsArray.length; int++) {

    if (estoEsArray[int] == true) {
        console.log(int + 1 + " -> " + estoEsArray[int - 3] + " Más facil por favor?");        
    }

    console.log(int + 1 + " -> " + estoEsArray[int]);
}