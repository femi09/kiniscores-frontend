import React from "react";
import Skeleton from "react-loading-skeleton";

const SkeletonMatch = () => {
  return (
    <div className="grid grid-cols-3 py-6 bg-gray-100">
      <div className="flex items-center col-span-2 justify-between mx-4">
        <div className="flex flex-col justify-start text-xs items-start font-bold text-blue-900 left">
          <div className="flex justify-between items-center p-2 team-name">
            <Skeleton circle={true} height={20} width={20} />
            <p className="px-2">
              <Skeleton height={20} width={100}/>
            </p>
          </div>
          <div className="flex justify-between items-center p-2 team-name">
            <Skeleton circle={true} height={20} width={20} />
            <p className="px-2">
              <Skeleton height={20} width={100}/>
            </p>
          </div>
        </div>

        <div className="text-xs font-bold text-blue-900 middle">
          <p className="py-2 my-1 px-3">
            {" "}
            <Skeleton height={25} width={25} />
          </p>
          <p className="py-2 my-1 px-3">
            {" "}
            <Skeleton height={25} width={25} />
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center text-xs text-center font-semibold text-blue-800 right border-l-2">
        <p className="py-2 px-3">
          {" "}
          <Skeleton height={20} width={20} />
        </p>
        <div className="p-3 flex justify-around items-center">
          <Skeleton circle={true} height={20} width={20} />
          <p className="px-2">
            {" "}
            <Skeleton height={20} width={100} />
          </p>
        </div>

        <div className="font-bold mx-4 flex items-center justify-center">
        <Skeleton circle={true} height={20} width={20} />
          <p className="p-1 rounded-lg"><Skeleton height={25} width={40} /></p>
        </div>
      </div>
    </div>
  );
};

export default SkeletonMatch;
