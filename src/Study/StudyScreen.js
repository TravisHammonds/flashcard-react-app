import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { readDeck } from "../utils/api";

function StudyScreen() {
  const [deckToStudy, setDeckToStudy] = useState({});
  const [cardIndexToStudy, setCardIndexToStudy] = useState(0);
  const [isFront, setIsFront] = useState(true);
  const [isLastCard, setIsLastCard] = useState(false);
  const { deckId } = useParams();
  const history = useHistory();

  const handleNext = () => {
    setCardIndexToStudy((prevIndex) => {
      if (prevIndex === deckToStudy.cards.length - 1) {
        const shouldRestart = window.confirm(
          "You've finished studying the deck. Do you want to restart?"
        );

        if (shouldRestart) {
          // User chose to restart
          setCardIndexToStudy(0);
          setIsLastCard(false);
          setIsFront(true);
        } else {
          // User chose not to restart, go back to the home screen
          history.push("/");
        }

        return prevIndex; // Don't change the index
      } else {
        setIsLastCard(false);
        return prevIndex + 1; // Move to the next card
      }
    });
    setIsFront(true);
  };

  const handleRestart = () => {
    setCardIndexToStudy(0);
    setIsLastCard(false);
    setIsFront(true);
  };
  const handleFlip = () => {
    setIsFront(!isFront);
  };

  useEffect(() => {
    async function getDeck() {
      try {
        const response = await readDeck(deckId);
        setDeckToStudy(response);
        console.log(deckToStudy.cards);
      } catch (err) {
        console.error(err);
      }
    }
    getDeck();
  }, [deckId]);

  return (
    <div className="d-flex flex-column">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb w-75">
          <li className="breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li className="breadcrumb-item">
            <a href="#">{deckToStudy.name}</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Study
          </li>
        </ol>
      </nav>
      <h1 className="">Study: {deckToStudy.name}</h1>
      {deckToStudy.cards && deckToStudy.cards.length < 3 && (
        <h2>Not enough cards</h2>
      )}
      {/* card */}
      <div className="card w-75">
        <div className="card-body">
          {/* Conditionally render card count if deckToStudy has data */}
          {deckToStudy.cards && (
            <>
              <h5 className="card-title">
                Card {cardIndexToStudy + 1} of {deckToStudy.cards.length}
              </h5>
              {isFront ? (
                <p className="card-text">
                  {deckToStudy.cards[cardIndexToStudy].front}
                </p>
              ) : (
                <p className="card-text">
                  {deckToStudy.cards[cardIndexToStudy].back}
                </p>
              )}
              {deckToStudy.cards && deckToStudy.cards.length < 3 ? (
                <button onClick={() => history.push("/")}className="btn btn-primary">+ Add Cards</button>
              ) : (
                <button onClick={handleFlip} className="btn btn-secondary">
                  Flip
                </button>
              )}

              {!isFront && (
                <button
                  className="btn btn-primary m-2"
                  onClick={isLastCard ? handleRestart : handleNext}
                >
                  {isLastCard ? "Restart" : "Next"}
                </button>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default StudyScreen;
