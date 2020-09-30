import React from "react";
import moment from "moment"
import {kiniscoresApi} from '../config.json'

const Hero = ({featuredNews}) => {
  const imageUrl = `${kiniscoresApi}/news/newsImage/${featuredNews._id}`
  return (
    <div className="flex justify-around">
      <div className="w-1/2 rounded-">
        <img className="rounded-l-lg" src={imageUrl} alt="" />
      </div>
      <div className=" w-1/2 flex flex-col text-left justify-center items-start px-6 bg-yellow-500 rounded-r-lg">
        <div className="w-full text-gray-900 font-bold text-xl mb-2">
          {featuredNews.headline}
        </div>

        <div className="w-full text-gray-900 text-sm w-1/2 mb-2">
          {featuredNews.subTitle}
        </div>
        <div className="flex justify-start p-2">
        <img className="w-4 h-4" src="./assets/clock-16.png" alt="" />
        <p className="inline-block border-r-2 px-2 text-xs font-bold text-gray-700">
          {moment(featuredNews.createdAt).fromNow(true)}
        </p>
        <p className="inline-block px-2 text-xs font-semibold text-gray-700">
          {featuredNews.source}
        </p>
      </div>
      </div>
    </div>
  );
};

export default Hero;
