import React from "react";
import ship from "../images/home-backgroung.jpg";
import SearchWidget from "./SearchWidget";
import Header from "./Nav";
// import Nav from './Nav';
const heading =
  "Acess ships travel schedule and book a ticket for you next trip";

const Home = () => (
  <div className="min-h-full bg-gray-100 font-bold">
    <div className="h-screen flex flex-col">
      <div className="relative overflow-hidden h-screen">
        <Header />
        <div
          className="relative flex items-center justify-center h-full
          bg-cover bg-center bg-fixed bg-no-repeat
          "
          style={{ backgroundImage: `url(${ship})` }}
        >
          {heading && (
            <h1 className="relative -top-48 px-2.5 mx-auto text-white uppercase z-10 text-center text-3xl md:text-6xl">
              {heading}
            </h1>
          )}
          <div className="flex flex-row justify-center mx-auto w-full absolute flex-wrap z-50">
            <div>
              <button
                type="button"
                class="py-2 px-4 flex justify-center items-center  bg-white hover:bg-gray-500 hover:text-white focus:ring-white focus:ring-offset-white-200 text-gray-500 w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="gray"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                Follow
              </button>
            </div>
            <div>
              <button
                type="button"
                class="py-2 px-4 flex justify-center items-center  bg-white hover:bg-gray-500 hover:text-white focus:ring-white focus:ring-offset-white-200 text-gray-500 w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2"
              >
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
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                Follow
              </button>
            </div>
            <div>
              <button
                type="button"
                class="py-2 px-4 flex justify-center items-center  bg-white hover:bg-gray-500 hover:text-white focus:ring-white focus:ring-offset-white-200 text-gray-500 w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2"
              >
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
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                Follow
              </button>
            </div>
            <div>
              <button
                type="button"
                class="py-2 px-4 flex justify-center items-center  bg-white hover:bg-gray-500 hover:text-white focus:ring-white focus:ring-offset-white-200 text-gray-500 w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2"
              >
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
              </button>
            </div>
          </div>

          <h1 className="relative text-center right-1/2 top-24 text-white z-20 text-3xl">
            Explorer
          </h1>
          <div className="flex flex-row justify-center absolute bottom-24 mx-auto w-full">
            <div className="w-40 bg-white h-28 mx-5 rounded-xl z-10 opacity-80 flex justify-center items-center text-gray-500 text-2xl">
              Cities
            </div>
            <div className="w-40 bg-white h-28 mx-5 rounded-xl z-10 opacity-80 flex justify-center items-center text-gray-500 text-2xl">
              Ships
            </div>
            <div className="w-40 bg-white h-28 mx-5 rounded-xl z-10 opacity-80 flex justify-center items-center text-gray-500 text-2xl">
              Trips
            </div>
          </div>

          <div className="z-0 absolute -top-0 left-0 h-full w-full opacity-30 bg-black" />
        </div>
      </div>
    </div>
  </div>
);
Home.defaultProps = {
  heading: "",
};
export default Home;
