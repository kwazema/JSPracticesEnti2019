import React from 'react';
import CardClashRoyal from './CardsClashRoyal';

class MainComponent extends React.Component {
 render() {
   return (
     <div>
       <CardClashRoyal name="Pandilla de duendes" elixir="3" type="comun" imgURL="https://www.deckshop.pro/img/card_ed/GobGang.png" />
       <CardClashRoyal name="Bola de fuego" elixir="4" type="especial" imgURL="https://www.deckshop.pro/img/card_ed/Fireball.png" />
       <CardClashRoyal name="Golem" elixir="8" type="epica" imgURL="https://www.deckshop.pro/img/card_ed/Golem.png" />
       <CardClashRoyal name="Chispitas" elixir="6" type="legendaria" imgURL="https://www.deckshop.pro/img/card_ed/Sparky.png" />
     </div>
   );
 }
}

export default MainComponent;