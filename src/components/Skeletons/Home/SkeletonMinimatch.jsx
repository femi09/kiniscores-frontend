import React from "react";
import Skeleton from "react-loading-skeleton";

const SkeletonMiniMatch = () => {
  return (
    <div className="sm:w-2/3 sm:mx-auto lg:w-full">
      <div className="py-1 text-sm text-center font-bold m-auto">
        <h1 className="text-blue-800 ">
          <Skeleton height={20}/>
        </h1>
      </div>
      <p className="bg-gray-500 text-xs text-center py-1 font-bold text-white">
        <Skeleton height={20} width={`80%`}/>
      </p>
      <div className="py-8 border-b">
        {Array(3).fill().map((item, index) => (
          <div
            key={index}
            className="w-full flex items-center text-xs text-blue-800 font-bold mb-6"
          >
            <div>
              <p className="text-sm">
                <Skeleton height={30} />
              </p>
            </div>
            <div className="text-center w-1/2">
              <Skeleton height={20}  width={70}/>
            </div>

            <div className="w-1/8 flex items-center justify-center mx-1">
              <Skeleton circle={true} height={20} width={20} />
              <p className="text-xs text-white mx-1 px-1 py-1">
                <Skeleton  width={40} height={20} />
              </p>
              <Skeleton circle={true} height={20} width={20} />
            </div>
            <div className="w-1/2 text-center">
              <Skeleton height={20} width={70} />
            </div>
          </div>
        ))}
      </div>
      <div className="text-right text-xs px-2 py-1 font-bold mb-8 text-blue-900">
        <Skeleton height={20} width={50} />
      </div>
    </div>
  );
};

export default SkeletonMiniMatch;
