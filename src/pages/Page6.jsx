import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Page6 = () => {
  useEffect(() => {
    // Shuffle the buttons
    const buttons = Array.from(document.querySelectorAll('.skill-btn'));
    for (let i = buttons.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [buttons[i], buttons[j]] = [buttons[j], buttons[i]]; // Swap elements
    }

    // Animate heading to appear within half the page
    gsap.fromTo(
      '.Skill-heading',
      { opacity: 0, y: 50 }, // Initial state: hidden and slightly below
      {
        opacity: 1,
        y: 0,
        duration: 2,
        scrollTrigger: {
          trigger: '.Skill-heading',
          start: 'top 70%', // Start when the top of the heading reaches 75% of the viewport
          end: 'top 50%', // End when the top of the heading reaches 50% of the viewport
          scrub: true,
          // markers: true, // Optional for debugging
        },
      }
    );

    // Animate buttons randomly on scroll
    gsap.fromTo(
      buttons,
      { opacity: 0, y: 30 }, // Initial state: hidden and slightly below
      {
        opacity: 1,
        y: 0,
        duration: 2,
        stagger: {
          amount: 1, // Total duration of staggered animations
          from: 'random', // Random order
          ease: 'power1.inOut',
        },
        scrollTrigger: {
          trigger: '.skill-btn', // Trigger buttons animation when in view
          start: 'top 80%', // Start animation when buttons are 80% into the viewport
          end: 'bottom 30%', // End animation at the center of the viewport
          scrub: true,
        },
      }
    );
  }, []);


  return (
    <div className='h-screen p-10 bg-white relative'>
      <div className='h-full w-full bg-black rounded-[50px] overflow-hidden'>
        <video
          autoPlay
          loop
          muted
          className='w-full object-cover'
          src="https://video.wixstatic.com/video/11062b_cb0c4d13153f4008920bb26beda8de0f/480p/mp4/file.mp4"
        ></video>
        {/* Skills Heading */}
        <h1 className='Skill-heading font-[anzo4] text-[7vw] absolute inset-0 flex justify-center top-[4vw] text-white' style={{ letterSpacing: '5px' }}>
          Skills
        </h1>

        {/* Skills Buttons */}
        <div className='absolute bottom-[18vh] left-1/2 transform -translate-x-1/2 flex flex-wrap justify-center gap-5 w-11/12'>
          <a
            href="#_"
            className="skill-btn flex items-center justify-center h-[7vh] px-14 py-5 mt-4 text-[2vw] font-semibold text-center text-gray-200 no-underline align-middle transition-all duration-300 ease-in-out bg-transparent border-2 border-yellow-300 border-solid rounded-full"
          >
            HTML
          </a>
          <a
            href="#_"
            className="skill-btn flex items-center justify-center h-[7vh] px-14 py-5 mt-4 text-[2vw] font-semibold text-center text-gray-200 no-underline align-middle transition-all duration-300 ease-in-out bg-transparent border-2 border-green-300 border-solid rounded-full"
          >
            CSS
          </a>
          <a
            href="#_"
            className="skill-btn flex items-center justify-center h-[7vh] px-14 py-5 mt-4 text-[2vw] font-semibold text-center text-gray-200 no-underline align-middle transition-all duration-300 ease-in-out bg-transparent border-2 border-pink-300 border-solid rounded-full"
          >
            JavaScript
          </a>
          <a
            href="#_"
            className="skill-btn flex items-center justify-center h-[7vh] px-14 py-5 mt-4 text-[2vw] font-semibold text-center text-gray-200 no-underline align-middle transition-all duration-300 ease-in-out bg-transparent border-2 border-blue-300 border-solid rounded-full"
          >
            React.js
          </a>
          <a
            href="#_"
            className="skill-btn flex items-center justify-center h-[7vh] px-14 py-5 mt-4 text-[2vw] font-semibold text-center text-gray-200 no-underline align-middle transition-all duration-300 ease-in-out bg-transparent border-2 border-gray-400 border-solid rounded-full"
          >
            Bootstrap
          </a>
          <a
            href="#_"
            className="skill-btn flex items-center justify-center h-[7vh] px-14 py-5 mt-4 text-[2vw] font-semibold text-center text-gray-200 no-underline align-middle transition-all duration-300 ease-in-out bg-transparent border-2 border-purple-300 border-solid rounded-full"
          >
            Tailwind
          </a>
          <a
            href="#_"
            className="skill-btn flex items-center justify-center h-[7vh] px-14 py-5 mt-4 text-[2vw] font-semibold text-center text-gray-200 no-underline align-middle transition-all duration-300 ease-in-out bg-transparent border-2 border-orange-300 border-solid rounded-full"
          >
            GSAP
          </a>
          <a
            href="#_"
            className="skill-btn flex items-center justify-center h-[7vh] px-14 py-5 mt-4 text-[2vw] font-semibold text-center text-gray-200 no-underline align-middle transition-all duration-300 ease-in-out bg-transparent border-2 border-red-300 border-solid rounded-full"
          >
            Git
          </a>
          <a
            href="#_"
            className="skill-btn flex items-center justify-center h-[7vh] px-14 py-5 mt-4 text-[2vw] font-semibold text-center text-gray-200 no-underline align-middle transition-all duration-300 ease-in-out bg-transparent border-2 border-lime-300 border-solid rounded-full"
          >
            GitHub
          </a>
          <a
            href="#_"
            className="skill-btn flex items-center justify-center h-[7vh] px-14 py-5 mt-4 text-[2vw] font-semibold text-center text-gray-200 no-underline align-middle transition-all duration-300 ease-in-out bg-transparent border-2 border-emerald-300 border-solid rounded-full"
          >
            ChatGPT
          </a>
          <a
            href="#_"
            className="skill-btn flex items-center justify-center h-[7vh] px-14 py-5 mt-4 text-[2vw] font-semibold text-center text-gray-200 no-underline align-middle transition-all duration-300 ease-in-out bg-transparent border-2 border-teal-300 border-solid rounded-full"
          >
            Typing
          </a>
          <a
            href="#_"
            className="skill-btn flex items-center justify-center h-[7vh] px-14 py-5 mt-4 text-[2vw] font-semibold text-center text-gray-200 no-underline align-middle transition-all duration-300 ease-in-out bg-transparent border-2 border-cyan-300 border-solid rounded-full"
          >
            Client Collaboration
          </a>
          <a
            href="#_"
            className="skill-btn flex items-center justify-center h-[7vh] px-14 py-5 mt-4 text-[2vw] font-semibold text-center text-gray-200 no-underline align-middle transition-all duration-300 ease-in-out bg-transparent border-2 border-rose-300 border-solid rounded-full"
          >
            Team Communication
          </a>
          <a
            href="#_"
            className="skill-btn flex items-center justify-center h-[7vh] px-14 py-5 mt-4 text-[2vw] font-semibold text-center text-gray-200 no-underline align-middle transition-all duration-300 ease-in-out bg-transparent border-2 border-fuchsia-300 border-solid rounded-full"
          >
            Problem-Solving
          </a>
          <a
            href="#_"
            className="skill-btn flex items-center justify-center h-[7vh] px-14 py-5 mt-4 text-[2vw] font-semibold text-center text-gray-200 no-underline align-middle transition-all duration-300 ease-in-out bg-transparent border-2 border-violet-300 border-solid rounded-full"
          >
            Responsive Web Design
          </a>
          <a
            href="#_"
            className="skill-btn flex items-center justify-center h-[7vh] px-14 py-5 mt-4 text-[2vw] font-semibold text-center text-gray-200 no-underline align-middle transition-all duration-300 ease-in-out bg-transparent border-2 border-sky-300 border-solid rounded-full"
          >
            API Integration
          </a>
        </div>
      </div>
    </div>
  );
};

export default Page6;
