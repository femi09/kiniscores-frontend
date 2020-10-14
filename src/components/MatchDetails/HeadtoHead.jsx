import React from "react";

const HeadtoHead = () => {
  return (
    <div className="bg-gray-100 py-8">
      <div className="text-center font-bold text-2xl text-blue-900">
        <h1>Head to Head</h1>
      </div>
      <div>
        <div className="py-2">
          <div className="flex justify-around text-blue-900 text font-bold py-2">
            <div className="flex justify-between items-center">
              <p className="mr-1">Liverpool</p>
              <img src="/assets/64.png" className="w-6 h-6" alt="" />
            </div>
            <div className="mr-2"></div>
            <div className="flex justify-between items-center">
              <img src="/assets/57.png" className="w-6 h-6" alt="" />
              <p className="ml-1">Arsenal</p>
            </div>
          </div>
        </div>

        <div className="flex justify-around text-sm font-semibold text-blue-900">
          <div className="flex flex-col items-end">
            <div className="flex p-2 items-center">
              <div className="mx-3 text-xl">22</div>
              <div className="">Total Wins</div>
            </div>

            <div className="flex p-1 items-center">
              <div className="mx-3 text-xl">15</div>
              <div className="w-2/3">Home</div>
            </div>

            <div className="flex p-2 items-center">
              <div className="mx-3 text-xl">7</div>
              <div className="">Away</div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div>Played</div>
            <div className="text-6xl font-bold text-blue-900">57</div>
            <div>
              Draws
              <span className="text-xl font-bold mx-1">19</span>
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col items-start">
              <div className="flex p-1 items-center">
                <div className="">Total Wins</div>
                <div className="mx-3 text-xl">16</div>
              </div>

              <div className="flex p-1 items-center">
                <div className="">Home</div>
                <div className="mx-3 text-xl">10</div>
              </div>

              <div className="flex p-1 items-center">
                <div className="">Away</div>
                <div className="mx-3 text-xl">6</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeadtoHead;
