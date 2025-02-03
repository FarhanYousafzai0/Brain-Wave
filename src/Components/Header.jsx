import React from 'react';
import { brainwave } from '../assets';
import { navigation } from '../constants';
import { Link } from 'react-router-dom'; // If using react-router-dom

const Header = () => {
  return (
    <div className="fixed top-0 z-50 w-full backdrop-blur-sm lg:backdrop-blur-sm bg-n-8/90 border-b border-[#3213a2] lg:border-[#0E0C15]">
      <div className="flex items-center px-5 lg:px-7.5 lg:py-4 xl:px-12 max-lg:py-4">
        
        <a href="#hero" className="block w-[12rem] lg:mr-8">
          <img src={brainwave} alt="Brainwave Logo" width={190} height={40} />
        </a>

        <nav className="fixed top-[5rem] bottom-0 left-0 right-0 lg:static lg:flex lg:mx-auto lg:bg-transparent">
          <div className="flex z-2 flex-col items-center justify-center lg:flex-row">
            {navigation.map((item, index) => (
              <Link key={item.id} to={item.link} className="text-white">
                {item.title}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
