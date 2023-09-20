import React from "react";
import { Route, Switch, useParams } from "react-router-dom";
import Header from "./Header";
import NotFound from "./NotFound";
import HomeScreen from "../Home/HomeScreen";
import StudyScreen from "../Study/StudyScreen";

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
          <Route path="/decks/:deckId/study">
            <StudyScreen />
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
