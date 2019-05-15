import React from 'react';

class Film extends React.Component {
    render() {
        return (
        <div className="film">
            <h2>{this.props.title}</h2>
            <img width='200px' src={`https://image.tmdb.org/t/p/original/${this.props.posterPath}`} />
        </div>
        );
    }
}

export default Film;