import React from "react";
import './OrderButtons.css'

export default function OrderButtons ({handleSorting}) {
    return (
        <div className="order-buttons">
            <button
                className="btn btn-primary"
                name="button"
                onClick={() => handleSorting("title")}
            >
                Alfabetisk ordning    
            </button>

            <button
                className="btn btn-primary"
                name="button"
                onClick={() => handleSorting("grade")}
            >
                Betygsordning
            </button>
        </div>
    );
} 