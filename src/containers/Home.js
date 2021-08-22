import React from "react";
import ship from "../images/ship.jpg";
import Nav from "../containers/Nav";
const Home = () => (
  <div className="flex-col justify-center flex item-start">
    <div className="w-full mx-auto">
      <div className="bg-indigo-900 relative overflow-hidden h-screen">
        <Nav className="absolute" />
        <img src={ship} className="absolute h-full w-full object-cover" />
      </div>
    </div>
  </div>
);

export default Home;
