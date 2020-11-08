import React from "react";
import SkeletonHero from "./SkeletonHero";
import SkeletonMiniMatch from "./SkeletonMinimatch";
import SkeletonMiniTable from "./SkeletonMinitable";
import SkeletonNews from "./SkeletonNews";
import SkeletonMiniscorers from "./SkeletonMiniscorers";

const SkeletonHome = () => {
  return (
    <div className="container mx-auto my-2 lg:my-6">
      <div className="flex flex-col lg:flex lg:flex-row lg:items-start xl:mx-0">
        {/* Major */}
        <div className="sm:rounded-lg lg:w-2/3 xl:w-3/4">
          <div className="mb-4">
            <SkeletonHero />
          </div>
          <div className="px-2 sm:mx-2 sm:px-0 sm:grid sm:grid-cols-4 sm:gap-2 lg:grid-cols-3 lg:gap-4 xl:grid-cols-4  xl:mx-0">
            {Array(11)
              .fill()
              .map((item, index) => (
                <SkeletonNews key={index} />
              ))}
          </div>
        </div>
        <div className="m-2 sm:px-4 py-4 sm:flex sm:flex-col sm:justify-around sm:my-4 lg:my-0 lg:w-1/3 lg:rounded-lg xl:w-1/4 xl:ml-5">
          <SkeletonMiniMatch />
          <SkeletonMiniTable />
          <SkeletonMiniscorers />
        </div>
      </div>
    </div>
  );
};

export default SkeletonHome;
