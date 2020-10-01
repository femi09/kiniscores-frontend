import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import { kiniscoresApi } from "../config.json";

const Hero = ({ featuredNews }) => {
  const imageUrl = `${kiniscoresApi}/news/newsImage/${featuredNews._id}`;
  return (
    <div className="flex justify-around">
      <div className="w-1/2 rounded-">
        <Link to={`/news/${featuredNews._id}`}>
          <img className="rounded-l-lg" src={imageUrl} alt="" />
        </Link>
      </div>
      <div className="relative w-1/2 flex flex-col text-left justify-center items-start px-6 bg-yellow-500 rounded-r-lg">
        <div className="w-full text-gray-900 font-bold text-xl mb-2">
          <Link to={`/news/${featuredNews._id}`}>{featuredNews.headline}</Link>
        </div>

        <div className="w-full text-gray-900 text-sm w-1/2 mb-2">
          <Link to={`/news/${featuredNews._id}`}>{featuredNews.subTitle}</Link>
        </div>

        <div className="flex items-center absolute bottom-0 py-2">
          <svg
            className="h-4 w-4 text-gray-600"
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
          <p className="border-r-2 border-yellow-400 px-2 text-xs font-bold text-gray-700">
            {moment(featuredNews.createdAt).fromNow(true)}
          </p>
          <p className="px-2 text-xs font-semibold text-gray-700">
            {featuredNews.source}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
