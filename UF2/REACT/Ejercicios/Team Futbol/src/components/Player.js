import React from 'react';

class Player extends React.Component {
    render() {
        return (
            <div>
                <p>Nombre: {this.props.name}</p>
                <p>Dorsal: {this.props.number}</p>
            </div>
        );
    }
}

export default Player;