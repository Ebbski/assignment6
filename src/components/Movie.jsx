import React from "react";
import './Movie.css';

export default function Movie({movie, onDelete}) {
    const { title, grade } = movie;

    const handleDelete = () => {
        onDelete(title);
    }

    return (
        <li className="movie-item">
            <span className="movie-title">{title}</span>

            <span className="movie-stars">
                {[...Array(grade)].map((_, i) => (
                    <img key={i} src="/star.png" alt="Star" className="star-icon" />
                ))}

                <img 
                    src="/delete.png"
                    alt="delete"
                    className="delete-icon"
                    onClick={handleDelete}
                />
            </span>
        </li>
    )
}