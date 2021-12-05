import React from 'react';
import beerImg from './images/beers.png';
import newBeerImg from './images/new-beer.png';
import randomBeerImg from './images/random-beer.png';
import { Link } from 'react-router-dom';
export default function Home() {
  return (
    <div className="flex my-16">
      <div className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 max-w-xs mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 m-8 ">
        <Link
          to="/beers"
          className=" block text-2xl font-bold text-gray-800 dark:text-white"
        >
          <img className="object-cover w-full h-56" src={beerImg} />

          <div className="py-5 text-center">
            <h1>All Beers</h1>
          </div>
        </Link>
      </div>
      <div className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 max-w-xs mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 m-8">
        <Link
          to="/random-beer"
          className="block text-2xl font-bold text-gray-800 dark:text-white"
        >
          <img className="object-cover w-full h-56" src={randomBeerImg} />

          <div className="py-5 text-center">
            <h1>Random Beers</h1>
          </div>
        </Link>
      </div>
      <div className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 max-w-xs mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 m-8">
        <Link
          to="/new-beer"
          className="block text-2xl font-bold text-gray-800 dark:text-white"
        >
          <img className="object-cover w-full h-56" src={newBeerImg} />

          <div className="py-5 text-center">
            <h1>New Beers</h1>
          </div>
        </Link>
      </div>
    </div>
  );
}
