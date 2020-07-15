import React, { Component } from "react";

class Matches extends Component {
  state = {};
  render() {
    return (
      <div className="container mx-auto bg-white w-2/3 shadow-lg">
        <div className="bg-white font-bold shadow-lg">
          <h1 className="">Match day 1</h1>
        </div>
        <div className="flex">
          <div className="flex p-6 border-r-2 justify-between w-1/2 bg-gray-100">
            <div className="left w-1/3">
              <div className="text-sm font-semibold flex team-name">
                <p>Liverpool</p>
              </div>
              <div className="text-sm font-semibold flex team-name">
                <p>Arsenal</p>
              </div>
            </div>
            <div className="text-sm middle border-r-2 w-1/3">
                <p>1</p>
                <p>4</p>
            </div>
            <div className="text-sm right w-1/3">
                <p>FT</p>
                <p>15 Jun 2020</p>
            </div>
          </div>
          <div className="flex p-6 justify-between w-1/2 bg-gray-100">
          <div className="left w-1/3">
              <div className=" text-sm font-semibold flex team-name">
                <p >Manchester United</p>
              </div>
              <div className="text-sm font-semibold flex team-name">
                <p>Wolves</p>
              </div>
            </div>
            <div className="text-sm middle border-r-2 w-1/3">
                <p>2</p>
                <p>1</p>
            </div>
            <div className="text-sm right w-1/3">
                <p>FT</p>
                <p>15 Jun 2020</p>
            </div>
          </div>
          </div>
        </div>
    );
  }
}

export default Matches;
