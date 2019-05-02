import React from 'react';
import Team from './Team';

// ESTO LO PODRÍAMOS OBTENER DE BACKEND, VEREMOS UN EJEMPLO EN LA SIGUIENTE CLASE
const teams = [
  {
    name: 'Barça',
    coach: 'Valverde',
    field: 'Camp Nou',
    players: [
      { name: 'Messi', number: 10 },
      { name: 'Pique', number: 3 },
      { name: 'Ter Stegen', number: 1 },
    ]
  },
  {
    name: 'Madrid',
    coach: 'Zidane',
    field: 'Santiago Bernabeu',
    players: [
      { name: 'Benzema', number: 9 },
      { name: 'Bale', number: 11 },
      { name: 'Courtois', number: 25 },
    ]
  }
];

class MainComponent extends React.Component {
 render() {
  const teamsComponent = [];
  teams.forEach((team, i) => {
    teamsComponent.push(<Team name={team.name} coach={team.coach} field={team.field} players={team.players} key={i} />)
  });

   return (
     <div className={this.props.type}>
      {teamsComponent}
     </div>
   );
 }
}

export default MainComponent;