import React from "react";
import Skeleton from "react-loading-skeleton";

const SkeletonNews = () => {
  return (
    <div className="flex flex-col justify-between max-w-xs bg-gray-100 overflow-hidden">
      <Skeleton height={120} width={500} />
      <div className="py-1">
        <div className="px-2 font-bold text-sm">
          <Skeleton height={20}/>
        </div>
      </div>
      <div className="flex items-center justify-start p-2">
        <Skeleton circle={true} height={20} width={20} />

        <p className="inline-block border-r-2 px-2 text-sm font-semibold text-gray-700">
        <Skeleton height={20} width={20}/>
        </p>
        <p className="inline-block px-2 text-xs font-semibold text-gray-700">
          <Skeleton height={20} width={50} />
        </p>
      </div>
    </div>
  );
};

export default SkeletonNews;
