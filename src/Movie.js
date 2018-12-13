import React from 'react';
import PropTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis';
import './Movie.css';

function Movie({title, poster, genres, synopsis, idx}){
    //console.log(genres.length-1)
    return (
        <div id={idx + 'movie'} className="Movie">
            <div className="Movie_Columns">
                <MoviePoster poster={poster} alt={title} />
            </div>
            <div className="Movie_Columns">
                <h1>{title}</h1>
                <div className="Movie_Genres_Box">
                    {genres.map((genre, index, thisAsg) => {
                        const lastVal = thisAsg[thisAsg.length-1];
                        return  <MovieGenres genre={genre} key={index} last={lastVal} />
                    })}
                </div>
                <div className="Movie_Synopsis">
                    <LinesEllipsis
                    text= {synopsis}
                    maxLine='3'
                    ellipsis='...'
                    trimRight
                    basedOn='letters'
                    />
                </div>
            </div>
        </div>
    )
}

function MoviePoster({poster, alt}){
    return (
        <img src={poster} alt={alt} title={alt} className="Movie_Poster" />
    )
}

function MovieGenres({genre, last}){
    return (
        <span className="Movie_Genres">{genre === last ? genre : genre + ', ' } </span>
    )
}

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    synopsis: PropTypes.string.isRequired
}

MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
}

MovieGenres.propTypes = {
    genre: PropTypes.string.isRequired
}

export default Movie;