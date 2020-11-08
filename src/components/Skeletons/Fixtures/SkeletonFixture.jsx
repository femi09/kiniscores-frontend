import React from "react";
import Skeleton from "react-loading-skeleton";

const SkeletonFixture = () => {
  return (
    <div>
      <div className="shadow-lg bg-gray-200 text-center mx-4 mt-8 p-2 sm:p-6">
        <div className="bg-gray-400 text-gray-800 text-center text-xl p-2 font-bold">
          <Skeleton height={30} width={`80%`} />
        </div>
        {Array(4)
          .fill()
          .map((item, index) => (
            <div key={index} className="flex items-center my-4">
              <div className="w-full xl:w-3/4 bg-gray-400 py-4 px-2 sm:p-4">
                <div className="flex items-center text-lg font-bold">
                  <div className="text-center w-1/3">
                    <p className="sm:ml-2">
                      <Skeleton height={30} width={`100%`} />
                    </p>
                  </div>

                  <div className="w-1/3 flex items-center justify-center mx-6">
                    <Skeleton circle={true} height={30} width={30} />
                    <p className="text-sm text-white sm:mx-1 px-1 sm:mx-4 sm:px-2 py-1">
                      <Skeleton height={30} width={50} />
                    </p>
                    <Skeleton circle={true} height={30} width={30} />
                  </div>

                  <div className="w-1/3 text-center">
                    <Skeleton height={30} width={`100%`} />
                  </div>
                </div>
              </div>
              <div className="hidden sm:block w-1/5 bg-gray-400 text-sm text-center p-4 font-bold">
                <p className="text-m">
                  <Skeleton height={20} width={50} />{" "}
                </p>
                <p>
                  <Skeleton height={20} width={100} />
                </p>
              </div>
              <div className="hidden sm:block w-1/5 bg-gray-400 p-2 text-xs font-bold">
                <h1 className="font-bold text-sm">
                  <Skeleton height={20} width={50} />
                </h1>
                <p>
                  <Skeleton height={20} width={100} />{" "}
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default SkeletonFixture;
