import React from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/navBar";
import NavItems from "./components/navItems";
import Results from "./pages/results";
import Standings from "./pages/standings";
import News from "./pages/news";
import Scorers from "./pages/scorers";
import Teams from "./pages/teams";
import Fixtures from "./pages/fixtures";
import Home from "./pages/home";
import AdminPanel from "./pages/admin";
import NextFixtures from "./pages/nextFixtures";
import NewsBody from "./pages/newsBody";
import MatchDetails from "./pages/matchDetails";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <NavItems />
      <Switch>
        <Route path="/fixture/:id" component={MatchDetails} />
        <Route path="/admin" component={AdminPanel} />
        <Route path="/fixtures/:fixtureStatus" component={NextFixtures} />
        <Route path="/fixtures" component={Fixtures} />
        <Route path="/teams" component={Teams} />
        <Route path="/scorers" component={Scorers} />
        <Route path="/news/:id" component={NewsBody} />
        <Route path="/news" component={News} />
        <Route path="/standings" component={Standings} />
        <Route path="/results" component={Results} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
