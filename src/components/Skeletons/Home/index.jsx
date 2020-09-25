import React from "react";
import SkeletonHero from "./SkeletonHero";
import SkeletonMiniMatch from "./SkeletonMinimatch";
import SkeletonMiniTable from "./SkeletonMinitable";
import SkeletonNews from "./SkeletonNews";
import { SkeletonTheme } from "react-loading-skeleton";
import SkeletonMiniscorers from "./SkeletonMiniscorers";

const SkeletonHome = () => {
  return (
    <div>
      <div className="flex items-start">
        {/* Major */}
        <div className="w-3/4 rounded-lg">
          <div className="mb-4">
            <SkeletonTheme>
              <SkeletonHero />
            </SkeletonTheme>
          </div>
          <div className="bg-gray-200 grid grid-cols-4 gap-4 ">
            {Array(11)
              .fill()
              .map((item, index) => (
                <SkeletonNews />
              ))}
          </div>
        </div>
        <div className="flex flex-col justify-around px-4 py-4 ml-5 bg-gray-100 w-1/4 rounded-lg">
          {/* Minor */}

          <SkeletonMiniMatch />
          <SkeletonMiniTable />
          <SkeletonMiniscorers />
        </div>
      </div>
    </div>
  );
};

export default SkeletonHome;
