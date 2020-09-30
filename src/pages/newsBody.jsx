import React from "react";

const NewsBody = () => {

  return (
    <div className="w-2/3 bg-gray-100 text-center mx-auto">
      <div className="bg-gray-100 py-6 my-4">
        {/* Header */}
        <div className="w-3/4 mx-auto">
          <h1 className="text-2xl text-left text-blue-900 font-bold">
            Man United made progress on Sancho Transfer Negotiations
          </h1>
          <div className="font-semibold px-1 text-gray-600 py-4 text-sm flex items-center w-1/3">
            <img className="w-4 h-4" src="./assets/clock-24.png" alt="" />
            <p className="border-r px-1">26 September 2020</p>
            <p className="px-1">Man City</p>
          </div>
        </div>
        <div className="flex flex-col w-3/4 mx-auto">
          <img src="./assets/jadon-sancho.jpg" alt="" />
          <p className="py-6 text-gray-800 text-left leading-9">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            nemo fugit, illo deleniti porro repudiandae laboriosam dicta quasi
            saepe! Nostrum voluptates qui nihil ipsum perspiciatis doloribus
            voluptas blanditiis soluta vel facilis! Perferendis ut, quia odio
            facere delectus voluptatum quod consequatur, sunt dolore iure
            officiis ipsam aperiam. Debitis nisi dicta quos!
          </p>
        </div>
        {/* Body */}
      </div>
    </div>
  );
};

export default NewsBody;
