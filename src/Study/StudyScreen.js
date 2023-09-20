import React, { useState, useEffect } from "react";
import { Route, Switch, useParams } from "react-router-dom";
import { readDeck } from "../utils/api";

function StudyScreen() {
  const [deckToStudy, setDeckToStudy] = useState({});
  const {deckId} = useParams();

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

  return (
    <>
      <h1>Welcome to the Study Screen for deck id {deckId}</h1>
      <h3>Title: {deckToStudy.name}</h3>
    </>
  );
}

export default StudyScreen;
