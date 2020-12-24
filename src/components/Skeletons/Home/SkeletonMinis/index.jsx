import React from "react";
import SkeletonHero from "./SkeletonNews/SkeletonHero";
import SkeletonMiniMatch from "./SkeletonMinis/SkeletonMinimatch";
import SkeletonMiniTable from "./SkeletonMinis/SkeletonMinitable";
import SkeletonNews from "./SkeletonNews/SkeletonNews";
import SkeletonMiniscorers from "./SkeletonMinis/SkeletonMiniscorers";

const SkeletonHome = () => {
  return (
    <div className="m-2 sm:px-4 py-4 sm:flex sm:flex-col sm:justify-around sm:my-4 lg:my-0 lg:w-1/3 lg:rounded-lg xl:w-1/4 xl:ml-5">
      <SkeletonMiniMatch />
      <SkeletonMiniTable />
      <SkeletonMiniscorers />
    </div>
  );
};

export default SkeletonHome;
