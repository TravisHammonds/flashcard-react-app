import React, { useState } from "react";
import { Route, Switch, useParams } from "react-router-dom";
import Header from "./Header";
import NotFound from "./NotFound";
import HomeScreen from "../Home/HomeScreen";
import StudyScreen from "../Study/StudyScreen";
import DeckScreen from "../Deck/DeckScreen";
import EditDeck from "../Deck/EditDeck";
import AddCard from "../Deck/AddCard";

function Layout() {
  return (
    <>
      <Header />
      <div className="container">
        <Switch>
          {/* TODO: Implement the screen starting here */}
          <Route exact path="/">
            <HomeScreen />
          </Route>
          <Route exact path="/decks/:deckId">
            <DeckScreen />
          </Route>
          <Route path="/decks/:deckId/edit">
            <EditDeck />
          </Route>
          <Route path="/decks/:deckId/study">
            <StudyScreen />
          </Route>
          <Route path={`/decks/:deckId/cards/new`}>
            <AddCard />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default Layout;
