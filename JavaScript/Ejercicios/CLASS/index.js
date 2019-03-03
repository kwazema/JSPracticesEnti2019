// CARTA DEL CLASH ROYAL    

// const golem = {
//     elixir: 9,
//     type: 'epic',
//     power: 'punch',

//     doPower: function() {console.log('...DOING', this.power)}
// };
// console.log(golem.doPower());

class CardClashRoyal {
    constructor(elixir, type, power){
        this.elixir = elixir;
        this.type = type;
        this.power = power;
    }
}

const golem = new CardClashRoyal(9, 'epic', 'punch');
const duendes = new CardClashRoyal(3, 'basic', 'walk');
const wizard = new CardClashRoyal(4, 'especial', 'fire');

console.log(golem, duendes, wizard);
