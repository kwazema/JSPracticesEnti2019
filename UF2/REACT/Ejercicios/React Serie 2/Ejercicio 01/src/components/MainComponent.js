import React from 'react';
import Country from './Country';

class MainComponent extends React.Component {
  constructor(props) {
      super(props);
      this.state = { 
        inputValue: '', // Valor que introducimos
        countries: [] 
      };
  }
  
  getCountries = () => {
    const value = this.state.inputValue;
    fetch(`https://restcountries.eu/rest/v2/name/${value}`)
    .then(res => res.json())
    .then(json => this.setState({countries: json}));
  }

  renderFlags = () => {
    const flagImages = [];
    this.state.countries.forEach((country, i) => {
      flagImages.push(<Country name={country.name} capital={country.capital} imageUrl={country.flag} key={i} />)
    });
    return flagImages;
  }


  render() {
    return (
      <div>
        <h1>FLAGS</h1>
        <input onChange={event => this.setState({inputValue: event.target.value})}/>
        <button onClick={this.getCountries}>GET FLAGS</button>
        {this.renderFlags()}
      </div>
    );
  }
}

export default MainComponent;