import React, { Fragment } from "react";
import Skeleton from "react-loading-skeleton";
import SkeletonCupTable from "./SkeletonCupTable";

const CupStandingsSkeleton = () => {
  return (
    <div>
      <Fragment>
        <div className="relative xl:w-2/3 xl:mx-auto">
          <div className="my-2 py-2 text-center font-bold sm:shadow-sm sm:mx-4 lg:mx-6 xl:w-2/3 xl:mx-auto">
            <h1 className="text-blue-800">
              <Skeleton height={30} width={`60%`} />
            </h1>
          </div>
        </div>

        {Array(8)
          .fill()
          .map((items, index) => (
            <SkeletonCupTable key={index} />
          ))}
      </Fragment>
    </div>
  );
};

export default CupStandingsSkeleton;
