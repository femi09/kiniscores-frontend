import React from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/navBar";
import NavItems from "./components/navItems";
import Matches from "./pages/matches";
import Standings from "./pages/standings";
import News from "./pages/news";
import Scorers from "./pages/scorers";
import Teams from "./pages/teams";
import './App.css'

function App() {
  return (
    <div className="App">
      <NavBar />
      <NavItems />
      <Switch>
        <Route path="/teams" component={Teams} />
        <Route path="/scorers" component={Scorers} />
        <Route path="/news" component={News} />
        <Route path="/standings" component={Standings} />
        <Route path="/"  component={Matches}/>
      </Switch>
    </div>
  );
}

export default App;
