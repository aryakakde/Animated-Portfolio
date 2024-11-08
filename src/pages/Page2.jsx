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
        { y: 100, rotateX: -40, opacity: 0 },
        {
          y: 0,
          rotateX: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 70%',
            end: 'top 40%',
            toggleActions: 'play none none reverse',
            // markers:true
          },
          delay: index * 0.2,
          onComplete: () => {
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
      <div id="section2" className="bg-white text-center p-2 text-black">
        <div className="rotate-text mt-5 pt-32" ref={(el) => (sectionsRef.current[0] = el)}>
          <h3 className="text-[42vw] text-black font-[anzo4] leading-[35vw]">IMPACTFUL</h3>
        </div>
        <div className="rotate-text" ref={(el) => (sectionsRef.current[1] = el)}>
          <h3 className="text-[42vw] text-black font-[anzo4] leading-[35vw]">BUILD</h3>
        </div>
        <div className="rotate-text" ref={(el) => (sectionsRef.current[2] = el)}>
          <h3 className="text-[42vw] text-black font-[anzo4] leading-[35vw]">IS THE</h3>
        </div>
        <div className="rotate-text" ref={(el) => (sectionsRef.current[3] = el)}>
          <h3 className="text-[42vw] text-black font-[anzo4] leading-[35vw]">BUILD</h3>
        </div>
        <div className="rotate-text" ref={(el) => (sectionsRef.current[4] = el)}>
          <h3 className="text-[42vw] text-black font-[anzo4] leading-[35vw]">THAT</h3>
        </div>
        <div className="rotate-text" ref={(el) => (sectionsRef.current[5] = el)}>
          <h3 className="text-[42vw] text-black font-[anzo4] leading-[35vw]">WORKS!</h3>
        </div>
        <div className="h-1 w-2/3 relative left-1/2 -translate-x-1/2 mt-40 bg-black"></div>
      </div>
    </>
  );
};
export default Page2;