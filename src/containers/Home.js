import React from 'react';
import ship from '../images/home-backgroung.jpg';
import SearchWidget from './SearchWidget';
// import Nav from './Nav';

const Home = () => (
  <div className="flex-col justify-center flex item-start">
    <div className="w-full mx-auto">
      <div className="relative overflow-hidden h-screen">
        <img src={ship} alt="background_cover" className="absolute h-full w-full object-cover" />
        <div className="inset-0 bg-black opacity-25 absolute" />

        <div className="container mx-auto relative z-10 flex flex-col items-center py-32 xl:py-40">
          <div className="w-full flex flex-col items-center relative z-10 gap-30">
            <h1 className="font-extrabold text-7xl text-center sm:text-6xl text-white leading-tight mt-4 mx-20 mb-10">
              Acess ships travel schedule and book a ticket for you next trip
            </h1>
          </div>
          <div>
            <SearchWidget />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
