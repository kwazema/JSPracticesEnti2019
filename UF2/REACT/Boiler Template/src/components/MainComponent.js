import React from 'react';
import Title from './Title';

// Main Example
// class MainComponent extends React.Component {
//  render() {
//    return (
//      <div>
//        <h1>REACT EXAMPLE</h1>
//      </div>
//    );
//  }
// }

class MainComponent extends React.Component {
  render() {
    return (
      <div>
        <Title title="Titulo 1"/> {/* Prop */}
        <Title title="Titulo 2"/> {/* Prop */}
        <Title title="Titulo 3"/> {/* Prop */}
        <Title title="Titulo 4"/> {/* Prop */}
        <Title title="Titulo 5"/> {/* Prop */}
      </div>
    );
  }
}

export default MainComponent;