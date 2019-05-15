import React from 'react';
import Actor from './Actor';

class MainComponent extends React.Component {
  constructor(props) {
      super(props);
      this.state = { 
        inputValue: '',
        actors: [] 
      };
  }
  
  getActors = () => {
    const value = this.state.inputValue;
    fetch(`https://api.themoviedb.org/3/search/person?api_key=40d741b75b657fc99fa896bb456729c1&query=${value}`)
    .then(res => res.json())
    .then(json => this.setState({actors: json.results || []}));
  }

  renderActors = () => {
    const actorsComponents = [];
    this.state.actors.forEach((actor, i) => {
      actorsComponents.push(<Actor name={actor.name} films={actor.known_for} key={i} />)
    });
    return actorsComponents;
  }


  render() {
    return (
      <div>
        <h1>Actors</h1>
        <input onChange={event => this.setState({inputValue: event.target.value})}/>
        <button onClick={this.getActors}>SEARCH!</button>
        {this.renderActors()}
      </div>
    );
  }
}

export default MainComponent;