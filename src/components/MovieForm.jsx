import React, { useState } from "react";
import './MovieForm.css';

export default function MovieForm({ onAddMovie }) {
    const [title, setTitle] = useState("");
    const [grade, setGrade] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
    
        if(title.trim() === "" || grade === 0){
            alert("Du måste ange titel och betyg för att kunna spara filmen");
        } else {
            onAddMovie(title, grade);
            setTitle("");
            setGrade(0);
        }
    }

  return (
    <form onSubmit={handleSubmit}>
        <label for="title-field">Titel:</label>
        <input
            class="form-control"
            type="text"
            id="title-field"
            placeholder="Titel här..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
        />

        <label for="rating-field">Betyg:</label>
        <select
            class="form-select"
            id="rating-field"
            value={grade}
            onChange={(e) => setGrade(Number(e.target.value))}
        >
            <option value={0}>Välj betyg här...</option>
            <option key={1} value={1}>1</option>
            <option key={2} value={2}>2</option>
            <option key={3} value={3}>3</option>
            <option key={4} value={4}>4</option>
            <option key={5} value={5}>5</option>
        </select>

        <button
            type="submit"
            class="btn btn-success mt-3"
            >
            Spara film
        </button>

    </form>
  );
}