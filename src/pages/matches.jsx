import React, { Component } from "react";
import axios from "axios";
import Match from "./../components/match";

class Matches extends Component {
  state = {
    logo: "",
    matches: [],
  };

  formatDate =(utcDate) => {
    let date = new Date(utcDate)

    const months = ["JAN", "FEB", "MAR","APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    let formatted_date = date.getDate() + "-" + months[date.getMonth()] + "-" + date.getFullYear()

    return formatted_date
  }

  async componentDidMount() {
    const {
      data,
    } = await axios.get(
      "http://api.football-data.org/v2/competitions/2021/matches",
      { headers: { "X-Auth-Token": "964e10439c784972ad30aacb080af27c" } }
    );
    const matches = data.matches;
    console.log(matches)
    this.setState({ matches });
  }
  render() {
    const { matches } = this.state;
    return (
      <div className="container mx-auto bg-white w-2/3 shadow-lg">
        <div className="bg-white font-bold shadow-lg">
          <h1 className="">Match day 1-38</h1>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {matches.map((match) => (
            <Match key={match.id} match={match} date={this.formatDate}/>
          ))}
        </div>
      </div>
    );
  }
}

export default Matches;
