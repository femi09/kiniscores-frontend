import React, { useState, useEffect } from "react";
import { useSpring, animated, config } from "react-spring";
import { getTweets } from "../../services/latestServices";
import MiniStandings from "../../components/Tables/MiniStandings";
import MiniMatch from "../../components/MiniMatch";
import MiniScorers from "../../components/Tables/MiniScorers";
import io from "socket.io-client";
import TweetStream from "./TweetStream";

const Home = () => {
  const [tweets, setTweets] = useState([]);
  useEffect(() => {
    const getNewsTweets = async () => {
      try {
        const { data } = await getTweets();
        setTweets(data);
      } catch (error) {
        console.log(error);
      }
    };

    getNewsTweets();
  }, []);

  useEffect(() => {
    const socket = io("http://localhost:5001/", { transports: ["websocket"] });

    socket.on("connect", () => {
      console.log("Connected to Server");
    });

    socket.on("tweet", (tweet) => {
      console.log(tweet);
    });
  });

  const contentProps = useSpring({
    from: { opacity: 0, marginTop: -200 },
    to: { opacity: 1, marginTop: 0 },
    config: config.slow,
  });

  return (
    <div className="container mx-auto my-2 lg:my-6">
      <div className="flex flex-col lg:flex lg:flex-row lg:items-start xl:mx-0 ">
        <div className="sm:rounded-lg lg:w-2/3 xl:w-3/4">
          <div className="tweet grid grid-cols-2 gap-4">
            {tweets.map((tweet) => (
              <TweetStream key={tweet.id} tweet={tweet} />
            ))}
          </div>
        </div>
        <div className="bg-gray-200 m-2 px-4 py-4 sm:flex sm:flex-col sm:justify-around sm:my-4 lg:my-0 lg:w-1/3 lg:rounded-lg xl:w-1/4 xl:ml-5">
          {/* <animated.div style={contentProps}>
            <MiniMatch />
            <MiniStandings />
            <MiniScorers />
          </animated.div> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
