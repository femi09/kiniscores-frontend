import React from "react";

const NewsCard = () => {
  return (
    <div className="my-8 max-w-xs bg-gray-100 overflow-hidden">
      <img
        className="w-full"
        src="./assets/Nathan-Ake.jpg"
        alt="Sunset in the mountains"
      />
      <div className="py-4 text-left">
        <div className="font-bold">Man city bid $40m bid for Nathan Ake accepted </div>
      </div>
      <div className="flex items-start">
          <img className="w-4 h-4"src="./assets/clock-16.png" alt=""/>
        <span className="inline-block border-r-2 px-2 text-sm font-semibold text-gray-700">
          8h
        </span>
        <span className="inline-block px-2 text-xs font-semibold text-gray-700">
          premierleague
        </span>
      </div>
    </div>
  );
};

export default NewsCard;
