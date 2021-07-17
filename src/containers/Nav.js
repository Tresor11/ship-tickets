import React from 'react';
import logo from '../images/logo.svg';

const NavBar = () => (
  <div className="flex justify-between p-4">
    <div className="flex justify-center align-center bg-purple-500 rounded-full p-1">
      <img src={logo} alt="LOGO" />
    </div>

    <div>
      <ul className="font-semibold text-gray-600">
        <li className="inline mx-2"><a href="www.ships.com">Trips</a></li>
        <li className="inline mx-2"><a href="www.ships.com">Cities</a></li>
        <li className="inline mx-2 px-4 py-2 border-2 border-purple-500 rounded bg-white hover:bg-purple-100 cursor-pointer"><a href="www.ships.com">Login</a></li>
      </ul>
    </div>
  </div>
);

export default NavBar;
