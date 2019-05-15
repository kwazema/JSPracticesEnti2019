import React from 'react';
import Film from './Film';

class Actor extends React.Component {
    renderFilms  = () => {
        const filmsComponents = [];
        this.props.films.forEach((film, i) => {
            filmsComponents.push(<Film posterPath={film.poster_path} title={film.title} key={i} />)
        });
        return filmsComponents;
    }

    render() {
        return (
        <div>
            <h1>{this.props.name}</h1>
            <div className="films-container">
                {this.renderFilms()}
            </div>
            <hr/>
        </div>
        );
    }
}

export default Actor;