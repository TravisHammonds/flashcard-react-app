import React from "react";
import DeckView from "./DeckView";

function DeckList({ decks, cards }) {
    const getCardLength = (deckId, cards) => {
        let matchingCards = cards.filter((cardObj) => {
            return cardObj.deckId === deckId;
        })
        return matchingCards.length;
    }
  return (
    <div>
      {/* mapping function for each deck */}
      {decks.map((deckObj) => {
        return (
          <DeckView
            title={deckObj.name}
            description={deckObj.description}
            length={getCardLength(deckObj.id, cards)}
            deckId={deckObj.id}
          />
        );
      })}
    </div>
  );
}

export default DeckList;
