import React, { useState, useEffect } from "react";
import { Route, Switch, Link } from "react-router-dom";
import DeckList from "./DeckList";
import StudyScreen from "../Study/StudyScreen";

function HomeScreen() {
  //test data
  const testDecks = [
    {
      id: 1,
      name: "Rendering in React",
      description:
        "React's component structure allows for quickly building a complex web application that relies on DOM manipulation. ",
    },
    {
      name: "React Router",
      description:
        "React Router is a collection of navigational components that compose declaratively with your application.",
      id: 2,
    },
  ];
  const testCards = [
    {
      id: 1,
      front: "Differentiate between Real DOM and Virtual DOM.",
      back: "Virtual DOM updates are faster but do not directly update the HTML",
      deckId: 1,
    },
    {
      id: 2,
      front: "How do you modify the state of a different React component?",
      back: "Not at all! State is visible to the component only.",
      deckId: 1,
    },
    {
      id: 3,
      front: "How do you pass data 'down' to a React child component?",
      back: "As properties or props",
      deckId: 1,
    },
    {
      front:
        "What path will match the follow Route?\n<Route>\n  <NotFound />\n</Route>",
      back: "All paths. A route with no path matches all URL's",
      deckId: 2,
      id: 4,
    },
    {
      front: "What does <Switch> do?",
      back: "Renders the first matching child <Route> ",
      deckId: 2,
      id: 5,
    },
    {
      cards: [],
      front: "b",
      back: "b",
      deckId: 1,
      id: 7,
    },
  ];

  const [decks, setDecks] = useState([]);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setDecks(testDecks);
    setCards(testCards);
  },[]);
  return (
    <Switch>
      <Route path="/">
        <div>
          {/* Create a button that links to Create a Deck screen component */}
          <Link to="#">
            <button className="btn btn-secondary mb-2" href="">
              + Create Deck
            </button>
          </Link>
          {/* Create and link DeckList Component */}
          <DeckList decks={decks} cards={cards} />
        </div>
      </Route>
    </Switch>
  );
}

export default HomeScreen;
