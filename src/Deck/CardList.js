import React from "react";
import { Link } from "react-router-dom";

function CardList({ cardObj, handleDelete }) {
  return (
    <div className="card w-75">
      <div className="card-body">
        <div className="row">
          <p className="col card-text m-2">{cardObj.front}</p>
          <p className="col card-text m-2">{cardObj.back}</p>
        </div>
        <div className="d-flex justify-content-end">
          <Link to={`#`}>
            <button className="btn btn-secondary m-1">Edit </button>
          </Link>
          <button
            onClick={() => handleDelete(cardObj)}
            className="btn btn-danger m-1"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardList;
