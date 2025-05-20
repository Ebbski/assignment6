import React from "react";
import Movie from "./Movie";

export default function MovieList({movies, onDelete}) {
    return (
        <ul className="movie-list">
            {movies.map((movie) => (
                <Movie key={movie.title} movie={movie} onDelete={onDelete} />
            ))}
        </ul>
    );
}