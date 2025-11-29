

import React from 'react';
import {User } from "lucide-react";

const Header: React.FC = () => {
  return (
    <div className="min-h-screen max-w-8xl mx-auto bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Menu Button */}
            <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            {/* Logo */}
            <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center gap-2">
              <img className='h-40 text-[140px] w-40' src="https://www.redbull.com/v3/resources/images/client/header/redbullcom-logo_double-with-text.svg" alt="" />
            </div>

            {/* Right side */}
            <div className="flex items-center gap-2">
              {/* Navigation */}
              

              {/* Search */}
              <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>

              {/* User */}
              <User />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-16 min-h-screen flex items-center bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 w-full py-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Side - Text */}
            <div className="space-y-8">
              <h1 className="text-6xl font-bold text-gray-900 leading-tight">
                Red Bull<br />
                Energy Drink
              </h1>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Red Bull Energy Drink dünya miqyasında yüksək səviyyəli <br /> 
                atletlər, məşğul peşəkar, universitet tələbələri və uzun <br />
                səyahətlərdə olan səyahətçilər tərəfindən 
                qiymətləndirilən içkidir.
              </p>

              <button className="bg-blue-900 text-white px-8 py-3 rounded-full font-medium text-sm">
                Ətraflı
              </button>

              {/* Dots */}
              <div className="flex gap-3 pt-4">
                <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                <div className="w-8 h-2 rounded-full bg-gray-800"></div>
                <div className="w-2 h-2 rounded-full bg-gray-400"></div>
              </div>
            </div>

            {/* Right Side - Can */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative  right-70">
                <img 
                  src="https://media.officedepot.com/images/f_auto,q_auto,e_sharpen,h_450/products/729770/729770_p/729770" 
                  alt="Red Bull Can" 
                  className=" text-6xl h-127  object-contain"
                />
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
};

export default Header;