import React from "react";
import Skeleton from "react-loading-skeleton";

const SkeletonMatch = () => {
  return (
    <div className="grid grid-cols-3 py-6 bg-gray-100">
      <div className="flex items-center col-span-2 justify-between">
        <div className="flex flex-col justify-start text-xs items-start font-bold text-blue-900 left">
          <div className="flex justify-between items-center p-3 team-name">
            <Skeleton circle={true} height={20} width={20} />
            <p className="px-2">
              <Skeleton height={20} width={100}/>
            </p>
          </div>
          <div className="flex justify-between items-center p-3 team-name">
            <Skeleton circle={true} height={20} width={20} />
            <p className="px-2">
              <Skeleton height={20} width={100}/>
            </p>
          </div>
        </div>

        <div className="text-xs font-bold text-blue-900 middle border-r-2">
          <p className="p-3">
            {" "}
            <Skeleton height={20} width={20} />
          </p>
          <p className="p-3">
            {" "}
            <Skeleton height={20} width={20} />
          </p>
        </div>
      </div>
      <div className="text-xs text-center font-semibold text-blue-900 right">
        <p className="p-3">
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

        <div className="font-bold flex items-center justify-center">
        <Skeleton circle={true} height={20} width={20} />
          <p className="px-2"><Skeleton height={20} width={100} /></p>
        </div>
      </div>
    </div>
  );
};

export default SkeletonMatch;
