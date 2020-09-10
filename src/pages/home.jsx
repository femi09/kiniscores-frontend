import React from "react";
import { useSpring, useTransition, animated, config } from "react-spring";
import { useState, useEffect } from "react";
import Hero from "../components/hero";
import NewsCard from "../components/newsCard";
import MiniTable from "../components/miniTable";
import MiniMatch from "../components/miniMatch";
import MiniScorers from "../components/miniScorers";
import { getLatestNews } from "../services/latestServices";

const Home = () => {
  const [show, set] = useState(false);
  const [latestNews, setLatestNews] = useState([]);
  const [featuredNews, setFeaturedNews] = useState([])
  useEffect(() => {
    const setShow = () => {
      set(true);
    };
    setShow();

    const getNews = async () => {
      const { data: news } = await getLatestNews()
      console.log(news)
      let featuredNews =news.filter(news => news.isFeatured === true)
      console.log(featuredNews[0])
      setFeaturedNews(featuredNews[0])
      setLatestNews(news);
    };
    getNews();
  }, []);
  const transitions = useTransition(show, null, {
    config: config.slow,
    from: { opacity: 0, marginLeft: -200 },
    enter: { opacity: 1, marginLeft: 0 },
    leave: { opacity: 0 },
  });

  const contentProps = useSpring({
    from: { opacity: 0, marginTop: -200 },
    to: { opacity: 1, marginTop: 0 },
    config: config.slow,
  });
  return (
    <div className="container mx-auto text-center">
      <div className="flex">
        {/* Major */}
        <div className="grid grid-col-2 grid-gap-2 rounded-lg w-3/4 m-6">
          {transitions.map(
            ({ item, key, props }) =>
              item && (
                <animated.div key={key} style={props}>
                  <Hero featuredNews={featuredNews} />
                </animated.div>
              )
          )}

          <animated.div style={contentProps}>
            <div className="bg-gray-200 grid grid-cols-4 gap-4">
              {latestNews.map((news) => (
                <NewsCard news={news} key={news._id} />
              ))}
            </div>
          </animated.div>
        </div>

        <div className="flex flex-col justify-around px-6 py-4 my-6 bg-gray-200 w-1/4">
          <animated.div style={contentProps}>
            <MiniMatch />
            <MiniTable />
            <MiniScorers />
          </animated.div>
        </div>
      </div>
    </div>
  );
};

export default Home;