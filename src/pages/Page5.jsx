import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Page2 = () => {
  const sectionsRef = useRef([]);

  useEffect(() => {
    sectionsRef.current.forEach((section, index) => {
      gsap.fromTo(
        section,
        { y: 100, rotateX: -40, opacity: 0 }, // Initial state: text is below, rotated -40 degrees, and invisible
        {
          y: 0,
          rotateX: 0, // Final state: rotates back to 0 degrees
          opacity: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 90%',
            end: 'top 60%',
            toggleActions: 'play none none reverse',
          },
          delay: index * 0.2,
          onComplete: () => {
            // Pulsing opacity effect after text settles
            gsap.to(section, {
              opacity: 0.9,
              repeat: -1,
              yoyo: true,
              duration: 1,
              ease: 'power1.inOut',
            });
          },
        }
      );
    });
  }, []);

  return (
    <>
      <div id="section2" className="bg-white text-center p-32 text-black">
        <div className="rotate-text mt-4" ref={(el) => (sectionsRef.current[0] = el)}>
          <h3 className="text-[42vw] text-black font-[anzo4] leading-[35vw]">HELPING</h3>
        </div>
        <div className="rotate-text" ref={(el) => (sectionsRef.current[1] = el)}>
          <h3 className="text-[42vw] text-black font-[anzo4] leading-[35vw]">MY</h3>
        </div>
        <div className="rotate-text" ref={(el) => (sectionsRef.current[2] = el)}>
          <h3 className="text-[42vw] text-black font-[anzo4] leading-[35vw]">CLIENTS</h3>
        </div>
        <div className="rotate-text" ref={(el) => (sectionsRef.current[3] = el)}>
          <h3 className="text-[42vw] text-black font-[anzo4] leading-[35vw]">TO</h3>
        </div>
        <div className="rotate-text" ref={(el) => (sectionsRef.current[4] = el)}>
          <h3 className="text-[42vw] text-black font-[anzo4] leading-[35vw]">ACHIEVE</h3>
        </div>
        <div className="rotate-text" ref={(el) => (sectionsRef.current[5] = el)}>
          <h3 className="text-[42vw] text-black font-[anzo4] leading-[35vw]">THEIR</h3>
        </div>
        <div className="rotate-text" ref={(el) => (sectionsRef.current[6] = el)}>
          <h3 className="text-[42vw] text-black font-[anzo4] leading-[35vw]">DREAMS!</h3>
        </div>
        <div className="h-1 w-2/3 relative left-1/2 -translate-x-1/2 mt-20 bg-black"></div>
      </div>
    </>
  );
};

export default Page2;
