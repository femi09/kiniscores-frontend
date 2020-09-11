import React from "react";
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

        <div className="w-full text-gray-900 text-sm  w-1/2 mb-2">
          {featuredNews.subTitle}
        </div>

      </div>
    </div>
  );
};

export default Hero;
