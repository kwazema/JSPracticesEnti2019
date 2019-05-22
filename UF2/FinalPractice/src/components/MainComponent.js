import React from 'react';
import Heroe from './Heroe';

class MainComponent extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      inputValue: '', heroes: []
    };
  }
  
  // fetch heros api
  getHeroes = () => {
    const value = this.state.inputValue; // Guardamos el valor del input
    
    fetch(`https://www.superheroapi.com/api.php/10213682344226582/search/${value}`) // Peticion a la API
    .then(res => res.json())
    .then(json => this.setState({heroes: json.results || []}));
    
  }
  
  renderHeroes = () => {
    const heroesComponents = []; // Creamos un array de heroes

    // Array de todos los heroes encontados y los recorremos 
    this.state.heroes.forEach((heroes, index) => {
       heroesComponents.push(<Heroe 
          name={heroes.name} 
          realName={heroes.biography["full-name"]} 
          race={heroes.appearance.race} 
          occupation={heroes.work.base} 
          imgURL= {heroes.image.url}
          key={index} />)
    });
    
    return heroesComponents; // Devolvemos el resultado
  }

  //Queria hacer la comprobación para que si imagen es null
    //poniera una imagen como la entrega anterior pero 
    //no lo he conseguido hacer en react
    
  render(){
    return(
      <div id="all"> 

        <div id="banner">
          <h1>Heroes</h1>
          <input id="input-heroes" onChange={event => this.setState({inputValue: event.target.value})}/>
          <button onClick={this.getHeroes}>SEARCH!</button>
        </div>

        <div id="heroe-container">
          {this.renderHeroes()}
        </div>

      </div>
    )
  }
}

export default MainComponent;
