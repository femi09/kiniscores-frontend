import React from "react";
import Skeleton from "react-loading-skeleton";

const SKeletonHero = () => {
  return (
    <div className="flex justify-between">
      <div className="w-1/2 rounded-l-lg">
        <Skeleton height={314} width={`100%`} />
      </div>
      <div className=" w-1/2 flex flex-col items-start text-left justify-center px-6 rounded-r-lg">
        <div className="w-full text-gray-900 font-bold text-xl mb-2">
          <Skeleton height={25} width={`90%`} />
        </div>

        <div className="w-full text-gray-900 text-sm  w-1/2 mb-2">
          <Skeleton  height={20} width={360} />
          <Skeleton  height={20} width={360} />
        </div>
      </div>
    </div>
  );
};

export default SKeletonHero;
