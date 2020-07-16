import React from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/navBar";
import NavItems from "./components/navItems";
import Matches from "./pages/matches";
import Standings from "./pages/standings";
import Teams from './pages/teams';
import Scorers from './pages/scorers';
import Players from './pages/players';
import "./App.css";


function App() {
  return (
    <div className="App">
      <NavBar />
      <NavItems />
      <Switch>
        <Route path="/scorers" component={Scorers} />
        <Route path="/teams" component={Teams} />
        <Route path="/players" component={Players} />
        <Route path="/standings" component={Standings} />
        <Route path="/" component={Matches} />
      </Switch>
    </div>
  );
}

export default App;
