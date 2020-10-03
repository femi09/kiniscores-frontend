import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import { kiniscoresApi } from "../config.json";

const NewsCard = ({ news, getNewsBody }) => {
  const imageUrl = `${kiniscoresApi}/news/newsImage/${news._id}`;
  return (
    <div className="flex flex-col justify-between max-w-xs bg-gray-100 overflow-hidden">
      <Link to={`/news/${news._id}`}>
        <img src={imageUrl} alt="news" />
      </Link>
      <div className="py-1">
        <div className="px-2 font-bold text-sm">
          <Link to={`/news/${news._id}`}>
            <p onClick={() => getNewsBody(news._id)}>{news.headline}</p>
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-start p-2">
        <svg
          className="h-4 w-4 text-gray-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <p className="inline-block border-r-2 px-2 text-xs font-bold text-gray-700">
          {moment(news.createdAt).fromNow(true)}
        </p>
        <p className="inline-block px-2 text-xs font-semibold text-gray-700">
          {news.source}
        </p>
      </div>
    </div>
  );
};

export default NewsCard;
