import React from 'react';

class Heroe extends React.Component {
    render() {
        return (
        <div className="heroe">
            <div>
                <img src={this.props.imgURL}></img>
                
                <h1>{ this.props.name}</h1>
                <h2>{this.props.realName}</h2>
                <h3>{this.props.race}</h3>
            </div>

            <p>{this.props.occupation}</p>
        </div>
        );
    }
}


export default Heroe;