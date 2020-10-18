import React from "react";
import Skeleton from "react-loading-skeleton";

const SkeletonMiniTable = () => {
  return (
    <div>
      <div className=" py-1 text-sm text-center font-bold mx-auto">
        <h1 className="text-blue-800">
          <Skeleton duration={1} height={20} width={290} />
        </h1>
      </div>
      <table className="table-auto container mx-auto">
        <thead className="bg-gray-500 text-gray-200 text-xs">
          <tr className="">
            <th className="px-2 py-1">
              {" "}
              <Skeleton height={20} width={30} />
            </th>
            <th className="px-2 w-full text-left py-2">
              <Skeleton height={20} width={50} />
            </th>
            <th className="px-2 py-1">
              <Skeleton height={20} width={30}/>
            </th>
            <th className="px-2 py-1">
              <Skeleton height={20} width={30}/>
            </th>
            <th className="px-2 py-1">
              <Skeleton height={20} width={30} />
            </th>
          </tr>
        </thead>
        <tbody className="text-sm text-center text-blue-900">
          {Array(5)
            .fill()
            .map((item, index) => (
              <tr key={index}>
                <td className="py-2 font-bold text-xs">
                  <Skeleton height={20} width={20} />
                </td>
                <td className=" flex items-center text-left text-sm py-2">
                  <Skeleton circle={true} height={20} width={20} />
                  <span className="px-2 text-xs font-bold">
                    <Skeleton height={20} width={50} />
                  </span>
                </td>
                <td className="px-2 font-bold text-xs py-2">
                  <Skeleton height={20} width={20} />
                </td>
                <td className="px-2 font-bold text-xs py-2">
                  <Skeleton height={20} width={20} />
                </td>
                <td className="px-2 font-bold text-xs py-2">
                  <Skeleton height={20} width={20} />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <div className="text-right text-xs p-2 font-bold  mb-8 text-blue-900">
        <Skeleton height={20} width={50} />
      </div>
    </div>
  );
};

export default SkeletonMiniTable;
