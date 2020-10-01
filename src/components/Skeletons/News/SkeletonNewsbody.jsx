import React from "react";
import Skeleton from "react-loading-skeleton";

const SkeletonNewsBody = () => {
  return (
    <div className="bg-gray-100 py-6 my-4">
      <div className="w-3/4 mx-auto">
        <h1 className="text-2xl text-left text-blue-900 font-bold">
          <Skeleton height={20} />
          <Skeleton height={20} />
        </h1>
        <div className="font-semibold px-1 text-gray-600 py-4 text-sm flex items-center w-1/3">
          <Skeleton circle={true} height={20} width={20} />
          <p className="border-r px-1">
            <Skeleton height={20} width={100} />
          </p>
          <p className="px-1">
            <Skeleton height={20} width={100} />
          </p>
        </div>
      </div>
      <div className="flex flex-col w-3/4 mx-auto">
        <Skeleton width={`100%`} height={350} />
        <p className="py-6 text-gray-800 text-left leading-9">
          <Skeleton width={`100%`} height={20} />
          <Skeleton width={`100%`} height={20} />
          <Skeleton width={`100%`} height={20} />
          <Skeleton width={`90%`} height={20} />
        </p>
      </div>
    </div>
  );
};

export default SkeletonNewsBody;
