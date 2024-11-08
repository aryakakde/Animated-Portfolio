import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import astroImage from '../assets/astro.avif'; // Adjust path based on the file location

const Page9 = () => {
  return (
    <>
      {/* Wrapper for Page7 content with overflow-hidden */}
      <div className="relative overflow-hidden flex items-center justify-center bg-emerald-400">
        {/* Background Image with adjusted position and size */}
        <div
          className="absolute inset-0 z-10 h-full w-full bg-fixed bg-cover"
          style={{
            backgroundImage: `url(${astroImage})`,
            backgroundPosition: 'center 10%',
            backgroundSize: '50% auto',
          }}          
        ></div>

        {/* Foreground Image */}
        <img
          className="relative z-20 h-[150vh] w-full mr-1"
          src="https://static.wixstatic.com/media/f1c650_710941ddfbe8422c9739a586a079bbe6~mv2.png/v1/fill/w_1920,h_1477,al_c,q_95,usm_0.66_1.00_0.01,enc_auto/Subtract.png"
          alt=""
        />

        {/* Contact Links */}
        <div className="absolute center-0 bottom-4 transform -translate-y-1/2 z-30">
          <span className="px-2 text-black text-[4vh] font-[anzo3] ml-3">
            <FontAwesomeIcon icon={faPhone} className="mr-2 bg-green-600 p-1 h-5 w-5" />
            <span className="underline mr-2 text-black">7030416936</span> &nbsp;  &nbsp;
            <a
              href="mailto:kakadearya699@gmail.com"
              className="underline hover:text-blue-500 mr-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faEnvelope} className="mr-2 bg-black px-[0.1vw] h-6 w-6"/>
              kakadearya699@gmail.com
            </a>
            &nbsp;  &nbsp;
            <a
              href="https://github.com/aryakakde"
              className="underline hover:text-blue-500 mr-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} className="mr-2 bg-black rounded-full p-[0.1vw] h-6 w-6"/>
              GitHub
            </a>
            &nbsp;  &nbsp;
            <a
              href="https://www.linkedin.com/in/arya-kakade2001/" // Replace with your LinkedIn URL
              className="underline hover:text-blue-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} className="mr-2 bg-blue-700 px-[0.2vw] h-6 w-5" />
              LinkedIn
            </a>
          </span>
        </div>
      </div>
    </>
  );
};

export default Page9;
