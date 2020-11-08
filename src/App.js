import React from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar/MainNavBar";
import Results from "./pages/Results";
import Standings from "./pages/Standings";
import News from "./pages/TransferNews";
import Scorers from "./pages/Scorers";
import Fixtures from "./pages/Fixtures";
import Home from "./pages/Home";
import AdminPanel from "./pages/Admin";
import NextFixtures from "./pages/NextFixtures";
import NewsBody from "./pages/NewsDetails";
import MatchDetails from "./pages/MatchDetails";
import "./App.css";


function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/fixture/:id" component={MatchDetails} />
        <Route path="/admin" component={AdminPanel} />
        <Route path="/fixtures/:fixtureStatus" component={NextFixtures} />
        <Route path="/fixtures" component={Fixtures} />
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
