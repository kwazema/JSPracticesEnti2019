import React from 'react';
import SuperHero from './SuperHero';

class MainComponent extends React.Component {
 render() {
   return (
     <div>
       <SuperHero name="Spiderman" realName="Peter Parker" imageUrl="¿?" />
       <SuperHero name="Darevil" realName="Matt Murdock" imageUrl="¿?" />
       <SuperHero name="Superman" realName="Clark Kent" imageUrl="¿?" />
       <SuperHero name="Narukyn" realName="Alejandro Muñoz" imageUrl="¿?" />
       <h1>REACT EXAMPLE</h1>
     </div>
   );
 }
}

export default MainComponent;