import React from "react";
import ship from "../images/ship.jpg";
import Nav from "../containers/Nav";
const Home = () => (
  <div className="flex-col justify-center flex item-start">
    <div className="w-full mx-auto">
      <div className="relative overflow-hidden h-screen">
        <img src={ship} className="absolute h-full w-full object-cover" />
        <div className="inset-0 bg-black opacity-25 absolute"></div>

        <div class="container w-200 mx-auto px-6 md:px-12 relative z-10 flex items-center py-32 xl:py-30">
          <div class="w-full flex flex-col items-center relative z-10 gap-30">
            <h1 class="font-extrabold text-7xl text-center sm:text-6xl text-white leading-tight mt-4 mx-20 mb-10">
              Acess ships travel schedule and book a ticket for you next trip
            </h1>
            <div class="flex justify-around items-center relative z-10 mt-30 h-10 justify-around bg-white md:opacity-50 py-10 px-10">
              <div>
                <button
                  type="button"
                  class="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                >
                  Valider
                </button>
              </div>
              <div>
                <button
                  type="button"
                  class="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                >
                  Valider
                </button>
              </div>
              <div>
                <button
                  type="button"
                  class="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                >
                  Valider
                </button>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="blue"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
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
