import React from 'react';
import Skeleton from "react-loading-skeleton";

const SkeletonStandingTable = () => {
    return ( 
        <div>
      <div className="shadow-lg py-4 text-center font-bold w-2/3 mx-auto">
        <h1 className="text-blue-800"><Skeleton height={30} width={`60%`} /></h1>
      </div>
      <table className="table-auto container mx-auto w-2/3 bg-gray-100">
        <thead className="bg-blue-900 text-gray-200 text-sm">
          <tr className="">
            <th className="px-2 py-2"><Skeleton height={20} width={40} /></th>
            <th className="px-2 w-1/2 text-left py-2"><Skeleton height={20} width={70} /></th>
            <th className="px-4 py-2"><Skeleton height={20} width={40} /></th>
            <th className="px-4 py-2"><Skeleton height={20} width={30} /></th>
            <th className="px-4 py-2"><Skeleton height={20} width={30} /></th>
            <th className="px-4 py-2"><Skeleton height={20} width={30} /></th>
            <th className="px-4 py-2"><Skeleton height={20} width={30} /></th>
            <th className="px-4 py-2"><Skeleton height={20} width={30} /></th>
            <th className="px-4 py-2"><Skeleton height={20} width={30} /></th>
            <th className="px-4 py-2"><Skeleton height={20} width={30} /></th>
            <th className="px-4 py-2"><Skeleton height={20} width={30} /></th>
          </tr>
        </thead>
        <tbody className="text-sm font-bold text-center text-blue-900">
          {Array(20).fill().map((item, index) => (
            <tr key={index}>
              <td className="py-2"><Skeleton height={20} width={20} /></td>
              <td className=" flex text-left py-2">
              <Skeleton circle={true} height={20} width={20} />
                <Skeleton height={20} width={100} />
              </td>
              <td className="px-4 py-2"><Skeleton height={20} width={20} /></td>
              <td className="px-4 py-2"><Skeleton height={20} width={20} /></td>
              <td className="px-4 py-2"><Skeleton height={20} width={20} /></td>
              <td className="px-4 py-2"><Skeleton height={20} width={20} /></td>
              <td className="px-4 py-2"><Skeleton height={20} width={20} /></td>
              <td className="px-4 py-2"><Skeleton height={20} width={20} /></td>
              <td className="px-4 py-2"><Skeleton height={20} width={20} /></td>
              <td className="px-4 py-2"><Skeleton height={20} width={20} /></td>
              <td className="px-4 py-2"><Skeleton height={20} width={20} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
     );
}
 
export default SkeletonStandingTable;