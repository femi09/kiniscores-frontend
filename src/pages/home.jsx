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
      let featuredNews =news.filter(news => news.isFeatured === true)
      setFeaturedNews(featuredNews[2])
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
    <div className="container mx-auto my-6">
      <div className="flex items-start">
        {/* Major */}
        <div className="rounded-lg w-3/4">
          {transitions.map(
            ({ item, key, props }) =>
              item && (
                <animated.div key={key} style={props} className="mb-4">
                  <Hero featuredNews={featuredNews} />
                </animated.div>
              )
          )}

          <animated.div style={contentProps}>
            <div className="bg-gray-200 grid grid-cols-4 gap-4 ">
              {latestNews.map((news) => (
                <NewsCard news={news} key={news._id} />
              ))}
            </div>
          </animated.div>
        </div>

        <div className="flex flex-col justify-around px-4 py-4 ml-5 bg-gray-200 w-1/4 rounded-lg">
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
