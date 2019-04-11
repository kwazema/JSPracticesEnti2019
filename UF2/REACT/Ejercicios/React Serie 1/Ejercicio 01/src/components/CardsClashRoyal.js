import React from 'react';

class CardClashRoyal extends React.Component {
    render(){
        return(
        <div className={`${this.props.type} card`}>
            <h1>Name: {this.props.name}</h1>
            <img src={this.props.imgURL} />
            <h3>Elixir: {this.props.elixir} </h3>
        </div>
        );
    }
}

export default CardClashRoyal;

// class CardClashRoyal extends React.Component {
//     render(){
//     const awesomaClass = "background";
//         return(
//         <div className={awesomaClass}>
//             <h1>{this.props.name}</h1>
//             <h2>Real Name:</h2>
//             <span>{this.props.realName}</span>
//             <img src={this.props.imageURL} />
//         </div>
//         );
//     }
// }
