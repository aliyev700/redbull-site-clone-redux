import React, { useState, useRef, useEffect } from 'react';

const OccasionCarousel = () => {
  const [currentTime, setCurrentTime] = useState(2); // 0=night, 1=late-evening, 2=afternoon, 3=noon, 4=before-noon
  const railRef = useRef<HTMLDivElement>(null);

  const occasions = [
    {
      id: 'rrn:content:occasions:ecd1ce61-033d-43cc-ac93-6a0348b4d5c2:en-INT',
      title: 'RIDING THROUGH YOUR WORKDAY?',
      image: 'https://img.redbull.com/images/e_trim:1:transparent/c_limit,w_400,h_400/bo_5px_solid_rgb:00000000/q_auto:best,f_auto/redbullcom/2023/11/13/ccspxinxfzxmfp7pyv9h/riding-through-your-workday',
      clickable: true
    },
    {
      id: 'rrn:content:occasions:f5be52ba-85d6-433c-8292-6b9b5fbcfbd7:en-INT',
      title: 'ADVENTURE AWAITS',
      image: 'https://img.redbull.com/images/e_trim:1:transparent/c_limit,w_400,h_400/bo_5px_solid_rgb:00000000/q_auto:best,f_auto/redbullcom/2023/11/13/krladhsvad3ndrik19eh/adventure-awaits',
      clickable: true
    },
    {
      id: 'rrn:content:occasions:56e9840b-458c-43d0-928b-17c4892165e7:en-INT',
      title: 'AIMING HIGH THIS TERM?',
      image: 'https://img.redbull.com/images/e_trim:1:transparent/c_limit,w_400,h_400/bo_5px_solid_rgb:00000000/q_auto:best,f_auto/redbullcom/2023/11/16/cjirm0gf8fginxfa9tcx/aiming-high-this-term',
      clickable: false
    },
    {
      id: 'rrn:content:occasions:2747fd8d-9a6d-423f-ad75-bd8b4b7f8735:en-INT',
      title: 'PLAYER 2 WANTED?',
      image: 'https://img.redbull.com/images/e_trim:1:transparent/c_limit,w_400,h_400/bo_5px_solid_rgb:00000000/q_auto:best,f_auto/redbullcom/2023/11/13/dop9zlvdxdmzud2nnijf/player-2-wanted',
      clickable: true
    },
    {
      id: 'rrn:content:occasions:802193ba-fa0c-4797-8dca-11d42cb818f3:en-INT',
      title: 'THE PERFECT FINISHING TOUCH',
      image: 'https://img.redbull.com/images/e_trim:1:transparent/c_limit,w_400,h_400/bo_5px_solid_rgb:00000000/q_auto:best,f_auto/redbullcom/2023/11/13/qnoxtvo2zoyj1n9ykuiw/the-perfect-finishing-touch',
      clickable: true
    }
  ];

  const mountainscapeImages = [
    'https://img.redbull.com/c_scale,w_1298/q_auto,f_auto/v1/redbullcom/static/cartoons/mountainscape-night',
    'https://img.redbull.com/c_scale,w_1298/q_auto,f_auto/v1/redbullcom/static/cartoons/mountainscape-late-evening',
    'https://img.redbull.com/c_scale,w_1298/q_auto,f_auto/v1/redbullcom/static/cartoons/mountainscape-afternoon',
    'https://img.redbull.com/c_scale,w_1298/q_auto,f_auto/v1/redbullcom/static/cartoons/mountainscape-noon',
    'https://img.redbull.com/c_scale,w_1298/q_auto,f_auto/v1/redbullcom/static/cartoons/mountainscape-before-noon'
  ];

  const cityscapeImages = [
    'https://img.redbull.com/c_scale,w_1298/q_auto,f_auto/v1/redbullcom/static/cartoons/cityscape-before-noon',
    'https://img.redbull.com/c_scale,w_1298/q_auto,f_auto/v1/redbullcom/static/cartoons/cityscape-noon',
    'https://img.redbull.com/c_scale,w_1298/q_auto,f_auto/v1/redbullcom/static/cartoons/cityscape-afternoon',
    'https://img.redbull.com/c_scale,w_1298/q_auto,f_auto/v1/redbullcom/static/cartoons/cityscape-late-evening',
    'https://img.redbull.com/c_scale,w_1298/q_auto,f_auto/v1/redbullcom/static/cartoons/cityscape-night'
  ];

  const scrollLeft = () => {
    if (railRef.current) {
      railRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (railRef.current) {
      railRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full max-w-8xl mx-auto min-h-screen bg-gradient-to-b from-blue-400 via-blue-300 to-orange-200 overflow-hidden">
      {/* Header */}
      <div className="relative z-30 pt-16 pb-8 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-2">
          Ready to take off?
        </h1>
        <p className="text-lg text-gray-700">
          Red Bull gives you wiiings
        </p>
      </div>

      {/* Sun/Moon */}
      <div className="absolute top-16 right-24 z-10">
        <img 
          src="https://img.redbull.com/w_100/q_auto:low,f_auto/v1/redbullcom/static/cartoons/sun" 
          alt="" 
          className="w-24 h-24"
        />
      </div>

      {/* Clouds layer */}
      <div className="absolute top-32 left-0 w-full h-48 z-10 pointer-events-none">
        <div className="relative w-full h-full opacity-30">
          <div className="absolute w-64 h-32 bg-white rounded-full blur-2xl top-0 left-20 animate-float" style={{ animationDelay: '0s' }} />
          <div className="absolute w-80 h-36 bg-white rounded-full blur-2xl top-8 left-64 animate-float" style={{ animationDelay: '2s' }} />
          <div className="absolute w-72 h-32 bg-white rounded-full blur-2xl top-4 right-32 animate-float" style={{ animationDelay: '4s' }} />
          <div className="absolute w-56 h-28 bg-white rounded-full blur-2xl top-12 right-80 animate-float" style={{ animationDelay: '1s' }} />
        </div>
      </div>

      {/* Mountainscape - Background */}
      <div className="absolute bottom-0 left-0 w-full z-5 pointer-events-none">
        <div className="relative w-full">
          {mountainscapeImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`mountainscape-${index}`}
              className={`absolute bottom-0 left-0 w-full object-cover transition-opacity duration-1000 ${
                index === currentTime ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ height: '40vh' }}
            />
          ))}
        </div>
      </div>

      {/* Cityscape - Foreground */}
      <div className="absolute bottom-0 left-0 w-full z-20 pointer-events-none">
        <div className="relative w-full">
          {cityscapeImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`cityscape-${index}`}
              className={`absolute bottom-0 left-0 w-full object-cover transition-opacity duration-1000 ${
                index === currentTime ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ height: '35vh' }}
            />
          ))}
        </div>
      </div>

     

      {/* Occasion Rail */}
      <div className="relative z-30 px-4 py-16">
        <div className="relative max-w-7xl mx-auto">
        

          <div
            ref={railRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth px-8"
          >
            {occasions.map((occasion) => (
              <div
                key={occasion.id}
                data-content-id={occasion.id}
                className={`flex-shrink-0 ${occasion.clickable ? 'cursor-pointer' : ''}`}
              >
                <img
                  src={occasion.image}
                  srcSet={`${occasion.image}, ${occasion.image.replace('w_400', 'w_800')} 2x`}
                  alt={occasion.title}
                  title={occasion.title}
                  className={`w-64 h-64 object-cover rounded-lg transition-transform duration-300 ${
                    occasion.clickable ? 'hover:scale-105' : ''
                  }`}
                />
              </div>
            ))}
          </div>

          
        </div>

        {/* CTA Button */}
        <div className="text-center mt-8">
          <a
            target="_self"
            className="inline-block px-8 py-3 bg-white hover:bg-gray-50 text-blue-600 text-sm font-semibold rounded-full shadow-lg transition-all"
          >
            Learn more
          </a>
        </div>
      </div>

      {/* Atmosphere overlay */}
      <div className="absolute inset-0 pointer-events-none z-25 bg-gradient-to-t from-transparent via-transparent to-white/10" />

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default OccasionCarousel;