const a = 1;
const b = 2;

if (a === b) {
    console.log("EQUALS!");
} else {
    console.log("NOT EQUALS!");
}

const result = a === b ? "equals" : "not equals"; //expresion ternaria
//const result = a === b ? "equals" : (1==1) ? 'a': "b"; //expresion ternaria
console.log("Result: ", result);

const personaje = "NARUTO";
switch (personaje) {
    case 'NARUTO': console.log("NINJA");  break;
    case 'GOKU'  : console.log("SAYAN");  break;
    case 'LUFFY' : console.log("PIRATE"); break;
    
    default:
     console.log("ANYTHING"); 
     break;
}

