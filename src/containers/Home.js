import React from "react";
import ship from "../images/ship.jpg";
import Nav from "../containers/Nav";
const Home = () => (
  <div className="flex-col justify-center flex item-start">
    <div className="w-full mx-auto">
      <div className="relative overflow-hidden h-screen">
        <img src={ship} className="absolute h-full w-full object-cover" />
        <div className="inset-0 bg-black opacity-25 absolute"></div>

        <div class="container mx-auto px-6 md:px-12 relative z-10 flex items-center py-32 xl:py-40">
          <div class="w-full flex flex-col items-center relative z-10 gap-30">
            <h1 class="font-extrabold text-7xl text-center sm:text-6xl text-white leading-tight mt-4 mx-20 mb-10">
              Acess ships travel schedule and book a ticket for you next trip
            </h1>
            <div class="flex flex-row items-center relative z-20 bg-white p-20w-auto mt-30">
              <div className="h-10 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
