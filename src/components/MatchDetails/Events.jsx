import React, { useState, useEffect } from "react";

const Events = ({ fixture }) => {
  const [matchEvents, setMatchEvents] = useState([]);

  useEffect(() => {
    if (fixture.status === "Not Started") {
      setMatchEvents([]);
    } else if (fixture.events === null) {
      setMatchEvents([]);
    } else {
      let matchEvents = fixture.events;
      setMatchEvents(matchEvents);
      console.log(matchEvents);
    }
  }, [fixture]);

  return (
    <div>
      {matchEvents.length === 0 ? (
        <div className="w-2/3 mx-auto bg-gray-200 text-xl text-center shadow-lg my-6">
          <h1 className="text-blue-900 p-4">
            There are no match events yet for this fixture
          </h1>
        </div>
      ) : (
        <div className="bg-gray-200 py-2 px-4">
          <div className="w-1/2 text-blue-900 text-xl text-center mx-auto font-bold my-4">
            <h1>Events</h1>
          </div>
          {matchEvents.map((matchEvent, index) =>
            matchEvent.teamName === fixture.homeTeam.team_name ? (
              <div key={index} className="w-2/3 px-3 py-2 flex">
                <div className="w-2/3 bg-gray-300 border-r-8 border-blue-900 flex items-center justify-around py-2 px-3">
                  <div className="text-gray-800 font-bold text-xs">
                    <div className="mb-1">
                      {matchEvent.player}
                      {matchEvent.type === "Goal" &&
                      matchEvent.detail !== "Missed Penalty" ? (
                        <span className="mx-1 text-gray-700">
                          ({matchEvent.type} !!!)
                        </span>
                      ) : matchEvent.type === "subst" ? (
                        <span className="mx-1 text-gray-700">(In)</span>
                      ) : (
                        <span className="mx-1 text-gray-700">
                          ({matchEvent.detail})
                        </span>
                      )}
                    </div>

                    {matchEvent.assist && matchEvent.type === "Goal" ? (
                      <p className="text-gray-600">
                        (Assist: {matchEvent.assist})
                      </p>
                    ) : matchEvent.assist && matchEvent.type === "subst" ? (
                      <p className="text-gray-600">
                        (Out: {matchEvent.assist})
                      </p>
                    ) : matchEvent.type === "Goal" &&
                      matchEvent.detail === "Penalty" ? (
                      <p className="text-gray-600">{matchEvent.detail}</p>
                    ) : matchEvent.type === "Goal" &&
                      matchEvent.detail === "Own Goal" ? (
                      <p className="text-gray-600">{matchEvent.detail}</p>
                    ) : (
                      <p></p>
                    )}
                  </div>
                  {matchEvent.detail === "Normal Goal" ? (
                    <div className="text-center pl-1">
                      <img
                        className="w-4 h-4"
                        src="/assets/soccer-ball-2.png"
                        alt=""
                      />
                    </div>
                  ) : matchEvent.detail === "Penalty" ? (
                    <div className="text-center pl-1">
                      <img
                        className="w-4 h-4"
                        src="/assets/soccer-ball-2.png"
                        alt=""
                      />
                    </div>
                  ) : matchEvent.detail === "Own Goal" ? (
                    <div className="text-center pl-1">
                      <img
                        className="w-4 h-4"
                        src="/assets/soccer-ball-red.png"
                        alt=""
                      />
                    </div>
                  ) : matchEvent.detail === "Missed Penalty" ? (
                    <div className="text-center pl-1">
                      <img
                        className="w-4 h-4"
                        src="/assets/icons8-x.png"
                        alt=""
                      />
                    </div>
                  ) : matchEvent.type === "subst" ? (
                    <div className="text-center pl-1">
                      <img
                        className="w-8 h-8"
                        src="/assets/player-substitution.png"
                        alt=""
                      />
                    </div>
                  ) : matchEvent.detail === "Yellow Card" ? (
                    <div className="text-center pl-1">
                      <img
                        className="w-8 h-8"
                        src="/assets/soccer-yellow-card-48.png"
                        alt=""
                      />
                    </div>
                  ) : matchEvent.detail === "Red Card" ? (
                    <div className="text-center pl-1">
                      <img
                        className="w-8 h-8"
                        src="/assets/soccer-red-card-48.png"
                        alt=""
                      />
                    </div>
                  ) : (
                    <div className="text-center pl-1"></div>
                  )}
                </div>
                <div className="w-1/5 text-center font-bold text-blue-900 py-4 px-2">
                  {matchEvent.elapsed_plus ? (
                    <p>
                      {matchEvent.elapsed}+{matchEvent.elapsed_plus}'
                    </p>
                  ) : (
                    <p>{matchEvent.elapsed}'</p>
                  )}
                </div>
              </div>
            ) : (
              <div key={index} className="flex justify-end pl-4">
                <div className="w-2/3 px-3 py-2 flex justify-end">
                  <div className="w-1/5 text-center font-bold text-blue-900 py-4 px-2">
                    {matchEvent.elapsed_plus ? (
                      <p>
                        {matchEvent.elapsed}+{matchEvent.elapsed_plus}'
                      </p>
                    ) : (
                      <p>{matchEvent.elapsed}'</p>
                    )}
                  </div>
                  <div className="w-2/3 bg-gray-300 border-l-8 border-blue-900 flex items-center justify-around py-2 px-3">
                    {matchEvent.detail === "Normal Goal" ? (
                      <div className="text-center pl-1">
                        <img
                          className="w-4 h-4"
                          src="/assets/soccer-ball-2.png"
                          alt=""
                        />
                      </div>
                    ) : matchEvent.detail === "Penalty" ? (
                      <div className="text-center pl-1">
                        <img
                          className="w-4 h-4"
                          src="/assets/soccer-ball-2.png"
                          alt=""
                        />
                      </div>
                    ) : matchEvent.detail === "Own Goal" ? (
                      <div className="text-center pl-1">
                        <img
                          className="w-4 h-4"
                          src="/assets/soccer-ball-red.png"
                          alt=""
                        />
                      </div>
                    ) : matchEvent.detail === "Missed Penalty" ? (
                      <div className="text-center pl-1">
                        <img
                          className="w-4 h-4"
                          src="/assets/icons8-x.png"
                          alt=""
                        />
                      </div>
                    ) : matchEvent.type === "subst" ? (
                      <div className="text-center pl-1">
                        <img
                          className="w-8 h-8"
                          src="/assets/player-substitution.png"
                          alt=""
                        />
                      </div>
                    ) : matchEvent.detail === "Yellow Card" ? (
                      <div className="text-center pl-1">
                        <img
                          className="w-8 h-8"
                          src="/assets/soccer-yellow-card-48.png"
                          alt=""
                        />
                      </div>
                    ) : matchEvent.detail === "Red Card" ? (
                      <div className="text-center pl-1">
                        <img
                          className="w-8 h-8"
                          src="/assets/soccer-red-card-48.png"
                          alt=""
                        />
                      </div>
                    ) : (
                      <div className="text-center pl-1"></div>
                    )}

                    <div className="text-gray-800 font-bold text-xs">
                      <div className="mb-1">
                        {matchEvent.player}
                        {matchEvent.type === "Goal" &&
                        matchEvent.detail !== "Missed Penalty" ? (
                          <span className="mx-1 text-gray-700">
                            ({matchEvent.type} !!!)
                          </span>
                        ) : matchEvent.type === "subst" ? (
                          <span className="mx-1 text-gray-700">(In)</span>
                        ) : (
                          <span className="mx-1 text-gray-700">
                            ({matchEvent.detail})
                          </span>
                        )}

                        {matchEvent.assist && matchEvent.type === "Goal" ? (
                          <p className="text-gray-600">
                            (Assist: {matchEvent.assist})
                          </p>
                        ) : matchEvent.assist && matchEvent.type === "subst" ? (
                          <p className="text-gray-600">
                            (Out: {matchEvent.assist})
                          </p>
                        ) : matchEvent.type === "Goal" &&
                          matchEvent.detail === "Penalty" ? (
                          <p className="text-gray-600">{matchEvent.detail}</p>
                        ) : matchEvent.type === "Goal" &&
                          matchEvent.detail === "Own Goal" ? (
                          <p className="text-gray-600">{matchEvent.detail}</p>
                        ) : (
                          <p></p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
};

export default Events;
