import React from "react";
import {kiniscoresApi} from '../config.json'

const Hero = ({featuredNews}) => {
  const imageUrl = `${kiniscoresApi}/news/newsImage/${featuredNews._id}`
  return (
    <div className="w-full h-full flex justify-around">
      <div className="w-2/3 overflow-hidden">
        <img className="w-full" src={imageUrl} alt="" />
      </div>
      <div className="w-1/3 flex flex-col text-left justify-center items-start px-8 bg-gray-200 rounded-r">
        <div className="w-full text-gray-900 font-bold text-2xl mb-2">
          {featuredNews.headline}
        </div>

        <div className="w-full text-gray-900  text-xl w-1/2 mb-2">
          {featuredNews.subTitle}
        </div>

      </div>
    </div>
  );
};

export default Hero;
