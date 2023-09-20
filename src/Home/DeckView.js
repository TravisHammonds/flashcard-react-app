import React from "react";
import { Link } from "react-router-dom";

function DeckView({ title, description, length, deckId }) {
  return (
    <div className="card w-75 mb-2">
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <h5 className="card-title">{title}</h5>
          <p>{length} cards</p>
        </div>
        <p className="card-text">{description}</p>
        <div className="d-flex">
          <Link to="#">
            <button className="btn btn-secondary m-1">
              {/* points to DeckScreen */}
              View
            </button>
          </Link>
          <Link to={`/decks/${deckId}/study`}>
            <button className="btn btn-primary m-1">
              {/* points to StudyScreen */}
              Study
            </button>
          </Link>
          <a href="#" className="btn btn-danger m-1 ml-auto">
            Delete
            {/* window.confirm() */}
            {/* if OK, delete deck and deck not visible on home screen */}
            {/* if cancel, do nothing */}
          </a>
        </div>
      </div>
    </div>
  );
}

export default DeckView;
