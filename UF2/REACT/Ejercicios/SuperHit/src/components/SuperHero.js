import React from 'react';

class SuperHero extends React.Component {
    render(){
        return(
        <div>
            <h1>{this.props.name}</h1>
            <h2>Real Name:</h2>
            <span>{this.props.realName}</span>
            <img src={this.props.imageURL} />
        </div>
        );
    }
}

export default SuperHero;