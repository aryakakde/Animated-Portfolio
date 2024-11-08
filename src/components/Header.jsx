import React from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css';
import { Link } from 'react-router-dom';

const Header = () => {
  useGSAP(() => {
    gsap.to('#banner img', {
      rotate: 360,
      duration: 5,
      repeat: -1,
      ease: 'linear',
    });
  });

  return (
    <div className="fixed right-0 w-[15vw] h-full z-50 py-10 flex flex-col justify-between items-center bg-transparent">
      {/* Button Section */}
      <div className="flex items-center justify-center space-x-4">
        <Link to="/Page9">
          <button className="bg-black text-white rounded-full px-8 py-2 border-4 text-[1.2vw] hover:bg-gray-700 transition duration-300 ease-in-out">
            Hire me
          </button>
        </Link>
        <i className="ri-more-2-line text-[1.5vw]"></i>
      </div>

      {/* Rotating Banner */}
      <div id="banner" className="flex flex-col items-center">
        <img
          className="w-[5vw] h-[5vw] mb-6 object-contain"
          src="https://static.wixstatic.com/media/f1c650_ed71078001ef401889b71537cca76dc4~mv2.png/v1/fill/w_128,h_128,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/cssda-wotd-white.png"
          alt="Rotating Banner 1"
        />
        <img
          className="w-[5vw] h-[5vw] object-contain"
          src="https://static.wixstatic.com/media/f1c650_64de2af00f41462e8aecc3d04537f9b4~mv2.png/v1/fill/w_127,h_127,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/EN_legend_large.png"
          alt="Rotating Banner 2"
        />
      </div>
    </div>
  );
};

export default Header;