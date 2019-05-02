import React from 'react';

class Country extends React.Component {
    render() {
        return(
            <div>
                <p>{this.props.name}</p>
                <p>{this.props.capital}</p>
                <img src={this.props.imageUrl}></img>
            </div>   
        )
    }
}

export default Country;
