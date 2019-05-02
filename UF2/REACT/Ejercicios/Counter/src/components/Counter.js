import React from 'react';

class MainComponent extends React.Component {
constructor(){
  super(); // Llamar al contructor del padre.
  this.state = { counter: 5 }; // Inicializamos el estado
}

increment = () => { // funcion incremente
  console.log("Test Working");
  this.setState({counter: this.state.counter + 1})
}

 render() {
   return (
     <div>
          <p>{this.state.counter}</p>
          <button onClick={this.increment}>CLICK ME</button>
     </div>
   );
 }
}

export default MainComponent;