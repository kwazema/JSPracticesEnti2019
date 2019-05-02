import React from 'react';
import Counter from './Counter';

class MainComponent extends React.Component {
 render() {
   return (
     <div>
       <h1>REACT EXAMPLE</h1>
       <Counter/> {/* Comentario entre componentes */}
     </div>
   );
 }
}

export default MainComponent;