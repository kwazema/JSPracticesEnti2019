import React from 'react';

class Heroe extends React.Component {
    render() {
        return (
        <div className="heroe-container">
            <h1>{this.props.name}</h1>
            <div>
                <h2>{this.props.realName}</h2>
                <h3>{this.props.race}</h3>
                <p>{this.props.occupation}</p>
            </div>
        </div>
        );
    }
}


export default Heroe;