import React, {useState} from "react";
import { Route, Switch, useParams } from "react-router-dom";
import { readDeck } from "../utils/api";


function StudyScreen() {
  const [deckToStudy, setDeckToStudy] = useState({})
  const params = useParams();

  readDeck();
  
  return <h1>Welcome to the Study Screen for deck id {params.deckId}</h1>;
}

export default StudyScreen;
