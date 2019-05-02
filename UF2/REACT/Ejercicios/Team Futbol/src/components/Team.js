import React from 'react';
import Player from './Player';

class Team extends React.Component {
    
    render() {
        const playersComponents = [];
        this.props.players.forEach((player, i) => {
            playersComponents.push(<Player name={player.name} number={player.number} key={i}/>);
        });
        return (
            <div>
                <h1>{this.props.name}</h1>
                <h2>Estadio: {this.props.field}</h2>
                <h2>Entrenador: {this.props.coach}</h2>
                <h2>Jugadores</h2>
                {playersComponents} 
                <br />
           </div>
        );
    }
}

export default Team;