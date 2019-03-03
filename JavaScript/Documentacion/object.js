const person = {
    name: 'Soncan',
    surname: 'Kwazema',
    age: 29,
    jobs: ['Algo', 'algo x2'],
//  sayHi: () => console.log('Hi!')
};

const bar = {
    name: 'Barça',
    ageFundation: 1989,
    players: 
    (
        { 
            name: 'messi',
            number: 10
        },
        {
            name: 'messi',
            number: 10
        }
    )
};

console.log('Persona: ', person);
console.log('Nombre: ', person.name);

person.name = 'Andreu';
console.log('Persona: ', person);

//Get Keys
console.log(Object.keys(person));

//Get Values
console.log(Object.values(person));

//Get Function
person.sayHi();


/* -- Mayoritariamente usaremos la siguiente forma para acceder a un objeto -- */
person.name;

/* -- Se usa cuando no sabemos a que propiedad del objeto queremos acceder, porque puede ser una propiedad dinamica --*/
const prop = 'name';
person[prop]; //Accedermos a la key del Objeto "name".