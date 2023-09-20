import React, { useState, useEffect } from "react";
import {
  useParams,
  useRouteMatch,
  Link,
  Route,
  Switch,
} from "react-router-dom";
import { readDeck } from "../utils/api";
import CardList from "./CardList";
import EditDeck from "./EditDeck";
import AddCard from "./AddCard";

function DeckScreen() {
  const [deckToStudy, setDeckToStudy] = useState({});
  const [cardsArray, setCardsArray] = useState([]);
  const { deckId } = useParams();
  const { path, url } = useRouteMatch();

  useEffect(() => {
    async function getDeck() {
      try {
        const response = await readDeck(deckId);
        setDeckToStudy(response);
      } catch (err) {
        console.error(err);
      }
    }
    getDeck();
  }, [deckId]);

  useEffect(() => {
    setCardsArray(deckToStudy.cards);
  }, [deckToStudy]);

  const handleDelete = (cardToDelete) => {
    const confirmDelete = window.confirm(
      "Delete this card? \n You will not be able to recover it."
    );

    if (confirmDelete) {
      const filteredCards = cardsArray.filter((cardObj) => {
        return cardObj.id !== cardToDelete.id;
      });
      setCardsArray(filteredCards);
    }
  };

  return (
    <Switch>
      <Route exact path={path}>
        {/* Breadcrumb */}
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb w-75">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="#">{deckToStudy.name}</a>
            </li>
          </ol>
        </nav>
        {/* Main Section */}
        <div className="card w-75 border-0">
          <div className="card-body">
            <h5 className="card-title">{deckToStudy.name}</h5>
            <p className="card-text">{deckToStudy.description}</p>

            {/* Link to the EditDeck route */}
            <Link to={`${url}/edit`}>
              <button className="btn btn-secondary m-1">Edit</button>
            </Link>

            <Link to={`${url}/study`}>
              <button className="btn btn-primary m-1">Study </button>
            </Link>
            <Link to={`#`}>
              <button className="btn btn-primary m-1">+ Add Cards </button>
            </Link>
            <button className="btn btn-danger">Delete</button>
          </div>
        </div>
        {/* Card Display */}
        <h1>Cards</h1>
        {cardsArray &&
          cardsArray.map((cardObj) => {
            return <CardList cardObj={cardObj} handleDelete={handleDelete} />;
          })}
      </Route>
      {/* Route for EditDeck */}
      <Route path={`${url}/edit`}>
        <EditDeck />
      </Route>
      <Route path={`${url}/cards/new`}>
        <AddCard />
      </Route>
    </Switch>
  );
}

export default DeckScreen;
