import React from "react";

const Hero = () => {
  return (
    <div className="w-full flex justify-around">
      <div className="w-1/2 overflow-hidden">
        <img src="./assets/Joel-Veltman.jpg" alt="" />
      </div>
      <div className="w-1/2 flex flex-col text-left justify-center items-start px-8 bg-gray-100 rounded-r">
        <div class="w-full text-gray-900 font-bold text-2xl mb-2">
          Brighton Sign Joel Veltman
        </div>

        <div className="w-full text-gray-900  text-xl w-1/2 mb-2">
          Versatile Dutch defender 28, moves to Anex stadium on three-year deal for
          undisclosed fee. 
        </div>

      </div>
    </div>
  );
};

export default Hero;
