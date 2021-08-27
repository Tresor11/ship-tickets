import React, { useState } from "react";
import { connect } from "react-redux";
import logo from "../images/logo.svg";
import fetchShips from "../actions/fetchShips";
import { Link } from "react-router-dom";
const NavBar = (props) => {
  const { fetchShips, store } = props; //eslint-disable-line
  const handleClick = (e) => {
    e.preventDefault();
    fetchShips();
  };
  const [active, setActive] = useState(false);

  const onClick = () => {
    setActive(!active);
  };
  return (
    <header className="bg-white relative">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-2.5">
        <div className="w-14">
          <img src={logo} alt="" className="w-full" />
        </div>
        <div onClick={onClick} className={`md:hidden uppercase`}>
          Menu
        </div>
        <nav
          className={`
        ${!active && "hidden"} 
        absolute flex flex-col bg-white top-full w-full left-0 z-20
        md:static md:w-auto md:flex
        `}
        >
          <ul className="md:flex-row md:flex">
            <li className="list-none md:mr-5">
              <a
                className="
              flex w-full text-base uppercase hover:text-red-600 cursor-pointer
              pt-2.5 px-2.5
              "
              >
                Page
              </a>
            </li>
            <li className="list-none md:mr-5">
              <a
                className="
              flex w-full text-base uppercase hover:text-red-600 cursor-pointer
              pt-2.5 px-2.5
              "
              >
                Trips
              </a>
            </li>
            <li className="list-none md:mr-5">
              <a
                className="
              flex w-full text-base uppercase hover:text-red-600 cursor-pointer
              pt-2.5 px-2.5
              "
                href="www."
              >
                Page
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

const mapStateToProps = (store) => ({ store });
const mapDispatchToProps = {
  fetchShips,
};
export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
