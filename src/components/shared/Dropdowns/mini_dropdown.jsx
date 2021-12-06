import React, { useState } from "react";
import { competitions } from "../../../utils/competitions";

const MiniDropdown = ({ handleCompetition, league }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="relative">
      <div className="flex bg-white justify-between text-sm leading-5 p-2 font-medium text-gray-700 items-center rounded-md shadow-sm">
        <div className="w-2/3">{league ? league : "Premier League"}</div>
        <div
          className="w-1/3 flex items-center justify-center cursor-pointer rounded-md hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition ease-in-out duration-150"
          id="options-menu"
          aria-haspopup="true"
          aria-expanded="true"
          onClick={() => setShow(!show)}
        >
          Others
          <svg
            className="ml-1 mr-1 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>

      <div
        className={`${
          show
            ? "z-40 absolute w-full mt-1 font-medium rounded-md shadow-lg"
            : "hidden z-40  mt-2 rounded-md shadow-lg"
        }`}
      >
        <div
          className="rounded-md bg-white shadow-xs"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          {competitions.map(({ id, name, slug }) => (
            <div
              onClick={() => {
                setShow(!show);
                handleCompetition(id, name, slug);
              }}
              key={id}
              className="flex cursor-pointer items-center py-1 px-2 border-t border-gray-100"
            >
              <span
                className="block px-2 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                role="menuitem"
              >
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MiniDropdown;