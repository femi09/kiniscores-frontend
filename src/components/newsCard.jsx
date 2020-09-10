import React from "react";
import {kiniscoresApi} from '../config.json'

const NewsCard = ({news}) => {
  const imageUrl = `${kiniscoresApi}/news/newsImage/${news._id}`
  return (
    <div className="my-8 flex flex-col justify-between max-w-xs bg-gray-100 overflow-hidden">
      <img
        src={imageUrl}
        alt="news"
      />
      <div className="py-4 text-left">
        <div className="px-4 font-bold text-sm">{news.headline} </div>
      </div>
      <div className="flex items-center justify-start">
        <img className="w-4 h-4"src="./assets/clock-16.png" alt=""/>
        <p className="inline-block border-r-2 px-2 text-sm font-semibold text-gray-700">
          8h
        </p>
        <p className="inline-block px-2 text-xs font-semibold text-gray-700">
          {news.source}
        </p>
      </div>
    </div>
  );
};

export default NewsCard;