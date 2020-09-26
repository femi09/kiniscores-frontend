import React from "react";
import SkeletonMatch from "./SkeletonMatch";
import SkeletonMatchDay from "./SkeletonMatchDay";

const SkeletonMatches = () => {
  return (
    <>
      <div className="py-4 text-gray-800 text-center font-bold shadow-lg">
        <SkeletonMatchDay />
      </div>
      <div className="grid grid-cols-2 gap-2">
        {Array(10)
          .fill()
          .map((item, index) => (
            <SkeletonMatch key={index} />
          ))}
      </div>
    </>
  );
};

export default SkeletonMatches;
