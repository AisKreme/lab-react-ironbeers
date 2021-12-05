import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  const [toggle, setToggle] = useState(false);

  let handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <nav className="bg-yellow-400 shadow dark:bg-gray-800">
      <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
        <div className="flex items-center justify-between">
          <div>
            <Link
              to="/"
              className="text-2xl font-bold text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300 "
            >
              Ironbeers
            </Link>
          </div>

          <div className="flex md:hidden">
            <button
              onClick={handleToggle}
              type="button"
              className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
              aria-label="toggle-menu"
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                <path
                  fill-rule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        <div className={'items-center md:flex ' + (!toggle ? 'hidden' : '')}>
          <div className="flex flex-col md:flex-row md:mx-6">
            <Link
              to="/beers"
              className="my-1 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
            >
              All Beers
            </Link>
            <Link
              to="/random-beer"
              className="my-1 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
            >
              Random Beers
            </Link>
            <Link
              to="/new-beer"
              className="my-1 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
            >
              New Beers
            </Link>
            <div class="flex justify-center md:block"></div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
