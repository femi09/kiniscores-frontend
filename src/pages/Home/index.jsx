import React from "react";
import { useState, useEffect } from "react";
import SkeletonHome from "../../components/Skeletons/Home";
import Hero from "./Hero";
import NewsCard from "./NewsCard";
import MiniStandings from "../../components/Tables/MiniStandings";
import MiniMatch from "../../components/MiniMatch";
import MiniScorers from "../../components/Tables/MiniScorers";
import { getLatestNews } from "../../services/latestServices";

const Home = () => {
  const [latestNews, setLatestNews] = useState([]);
  const [featuredNews, setFeaturedNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const getNews = async () => {
      const { data: news } = await getLatestNews();
      let featuredNews = news[0];
      setFeaturedNews(featuredNews);
      let latestNews = news.filter((news) => news !== featuredNews);
      setLatestNews(latestNews);
      setLoading(false);
    };
    getNews();
  }, []);

  const getNewsBody = (newsId) => {
    console.log(newsId);
  };

  
  return (
    <div className="container mx-auto my-2 lg:my-6">
      {loading ? (
        <SkeletonHome />
      ) : (
        <div className="flex flex-col lg:flex lg:flex-row lg:items-start xl:mx-0 ">
          {latestNews !== 0 && (
            <div className="sm:rounded-lg lg:w-2/3 xl:w-3/4">
              <div className="mb-2">
              <Hero featuredNews={featuredNews} />
              </div>
                <div className="px-2 sm:mx-2 sm:px-0 sm:bg-gray-200 sm:grid sm:grid-cols-4 sm:gap-2 lg:grid-cols-3 lg:gap-4 xl:grid-cols-4  xl:mx-0">
                  {latestNews.map((news) => (
                    <NewsCard
                      news={news}
                      key={news._id}
                      getNewsBody={getNewsBody}
                    />
                  ))}
                </div>
            </div>
          )}

          <div className="bg-gray-200 m-2 px-4 py-4 sm:flex sm:flex-col sm:justify-around sm:my-4 lg:my-0 lg:w-1/3 lg:rounded-lg xl:w-1/4 xl:ml-5">
              <MiniMatch />
              <MiniStandings />
              <MiniScorers />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
