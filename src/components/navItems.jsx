import React from 'react'

const NavItems = () => {
    return ( 
        <div className="bg-gray-200 p-4 flex-row items-center">
            <ul className="flex center justify-center align-center">
                <li className="px-8 text-blue-800 font-semibold cursor-pointer hover:text">Matches</li>
                <li className="px-8 text-blue-800 font-semibold cursor-pointer hover:text">Standings</li>
                <li className="px-8 text-blue-800 font-semibold cursor-pointer hover:text">Players</li>
                <li className="px-8 text-blue-800 font-semibold cursor-pointer hover:text-">Teams</li>
                <li className="px-8 text-blue-800 font-semibold cursor-pointer hover:text-white">Scorers</li>
            </ul>
        </div>
     );
}
 
export default NavItems;