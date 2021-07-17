import React from 'react';
import logo from '../images/logo.svg';

const NavBar = () => (
  <div className="flex justify-between p-4 shadow">
    <div className="flex justify-center align-center rounded-full p-1">
      <img src={logo} alt="LOGO" />
    </div>

    <div>
      <ul className="font-semibold text-gray-600">
        <li className="inline mx-4 hover:text-gray-800"><a href="www.ships.com">Trips</a></li>
        <li className="inline mx-4 hover:text-gray-800"><a href="www.ships.com">Cities</a></li>
        <li className="inline mx-4 px-4 py-2 border-2 border-purple-300 rounded bg-white hover:bg-purple-100 cursor-pointer"><a href="www.ships.com">Login</a></li>
      </ul>
    </div>
  </div>
);

export default NavBar;
