import React from "react";
const TeamsInfo = () => {
  return (
    <div
      className="flex flex-col justify-between"
      style={{
        backgroundImage: "url('/assets/pitch.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        objectFit: "center"
      }}
    >
      {/* upper */}
      <div className="flex bg-blue-900 bg-opacity-75 px-4 py-2 my-3 justify-between text-gray-100 text-xs font-bold">
        <div className="flex justify-between">
          <p className="mr-4">Monday, 28 September 2020</p>
          <p>Anfield Stadium, Liverpool</p>
        </div>
        <div>
          <p>Anthony Taylor</p>
        </div>
      </div>
      <div className="flex justify-between items-center bg-blue-900 mt-16">
        {/* TeamA */}
        <div className="flex items-cente font-bold text-xl text-white px-4">
          <img className="" src="/assets/t14.png" alt="" />
          <p className="p-2">Liverpool</p>
        </div>

        {/* ScoreBoard */}
        <div className="flex text-3xl p-2 font-bold text-white bg-red-500 score">
          <p className="px-1">3</p>
          <p className="px-1">-</p>
          <p className="px-1">1</p>
        </div>

        {/* TeamB */}
        <div className="flex items-center font-bold text-xl text-white px-4">
          <p className="p-2">Arsenal</p>
          <img className="" src="/assets/t3.png" alt="" />
        </div>
      </div>
      <div className="bg-blue-800 bg-opacity-50 text-white p-4">
        <div className="flex justify-around text-xs font-semibold mx-auto p-4 mx-4 border-b">
          <div className="w-1/3 text-left">
            <p>Sadio Mane 28'</p>
            <p>Andrew Robertson 34'</p>
            <p>Diogo Jota 85'</p>
          </div>
          <div className="w-1/3 text-center pl-4">
            <p>FT</p>
            <p>Kick-Off: 20:00</p>
          </div>
          <div className="w-1/3 text-right">
            <p>Alexander Lacazette 25'</p>
          </div>
        </div>
        <div className="flex justify-around text-xs font-semibold mx-auto p-4 mx-4">
          <div className="w-1/3 text-left">
            <p>Trent-Alexander Arnold'</p>
          </div>
          <div className="w-1/3 text-center pl-4">
            <p>Assits</p>
          </div>
          <div className="w-1/3 text-right"></div>
        </div>
      </div>
    </div>
  );
};

export default TeamsInfo;
