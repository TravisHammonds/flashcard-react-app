import React from "react";
import { useHistory, useRouteMatch, Link } from "react-router-dom";
import { deleteCard } from "../utils/api";

function ViewCards({ cards = [] }) {
  const history = useHistory();
  const { url } = useRouteMatch();

  const deleteCardHandler = async (cardId) => {
    const response = window.confirm(
      "Delete this card? You will not be able to recover it."
    );
    if (response) {
      await deleteCard(cardId);
      history.go(0);
    }
  };

  const styledCards = cards.map((card, index) => (
    <div key={index} className="card mb-2">
      <div className="card-body">
        <div className="row">
          <div className="col">{card.front}</div>
          <div className="col">{card.back}</div>
        </div>
        <div className="d-flex justify-content-end">
          <Link to={`${url}/cards/${card.id}/edit`}>
            <button className="btn btn-secondary m-1">
              <i className="fas fa-edit"></i> Edit
            </button>
          </Link>
          <button
            className="btn btn-danger m-1"
            onClick={() => deleteCardHandler(card.id)}
          >
            Delete Card
          </button>
        </div>
      </div>
    </div>
  ));
  return (
    <React.Fragment>
      <div className="card border-0">
        <div>
          <h2>Cards</h2>
        </div>
      </div>
      {styledCards}
    </React.Fragment>
  );
}

export default ViewCards;
