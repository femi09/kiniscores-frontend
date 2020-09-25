import React from "react";
import Skeleton from "react-loading-skeleton";

const SkeletonScoreresTable = () => {
  return (
    <div>
      <div className="shadow-lg text-center py-4 font-bold w-1/2 mx-auto">
        <h1 className="text-blue-900">
          <Skeleton height={30} width={`60%`} />
        </h1>
      </div>
      <table className="table-auto container mx-auto w-1/2 bg-gray-100">
        <thead className="bg-blue-900 text-gray-200 text-sm">
          <tr>
            <th className="px-2 text-left py-2">
              <Skeleton height={20} width={40} />
            </th>
            <th className="px-2 text-left py-2">
              <Skeleton height={20} width={70} />
            </th>
            <th className="py-2 text-left">
              <Skeleton height={20} width={40} />
            </th>
            <th className="px-4 py-2">
              <Skeleton height={20} width={40} />
            </th>
          </tr>
        </thead>
        <tbody className="text-sm font-bold text-blue-900">
          {Array(20).fill().map((items, index) => (
            <tr key={index} className="border-b-4">
              <td className="px-4 py-2">
                <Skeleton height={20} width={20} />
              </td>
              <td className="px-4 py-2">
                <Skeleton height={20} width={100} />
              </td>
              <td className="flex text-left py-2">
                <Skeleton circle={true} height={20} width={20} />
                <Skeleton height={20} width={100} />
              </td>
              <td className="px-4 text-center py-2">
                <Skeleton height={20} width={20} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SkeletonScoreresTable;
