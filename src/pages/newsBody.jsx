import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getLatestNewsBody } from "../services/latestServices";
import { formatFixturesDate } from "../utils";
import { kiniscoresApi } from "../config.json";
import SkeletonNewsBody from "../components/Skeletons/News/SkeletonNewsbody"

const NewsBody = () => {
  const [news, setNews] = useState("");
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const getNewsBody = async () => {
      const { data: news } = await getLatestNewsBody(id);
      setNews(news);
      setLoading(false);
    };
    getNewsBody();
  }, [id]);

  const imageUrl = `${kiniscoresApi}/news/newsImage/${news._id}`;
  return (
    <div className="w-2/3 bg-gray-100 text-center mx-auto">
      {loading ? <SkeletonNewsBody/> : (
        <div className="bg-gray-100 py-6 my-4">
          <div className="w-3/4 mx-auto">
            <h1 className="text-2xl text-left text-blue-900 font-bold">
              {news.subTitle}
            </h1>
            <div className="font-semibold  text-gray-600 py-4 text-sm flex items-center w-1/2">
            <svg
            className="h-5 w-5 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
              <p className="border-r px-1 font-semibold">{formatFixturesDate(news.createdAt)}</p>
              <p className="px-1">{news.source}</p>
            </div>
          </div>
          <div className="flex flex-col w-3/4 mx-auto">
            <img src={imageUrl} alt="" />
            <p className="py-6 text-gray-800 text-left leading-9">
              {news.body}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewsBody;
