import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Page4 = () => {
  useEffect(() => {
    gsap.to(".scroll-text", {
      color: "rgba(255, 255, 255, 1)", // Fully opaque white
      duration: 1,
      stagger: 0.5, // Delay between each item animation
      ease: "power1.out", // Smooth easing
      scrollTrigger: {
        trigger: ".scroll-text",
        start: "top 40%", // Adjust start point as needed
        end: "bottom 20%",
        scrub: 1, // Sync animation with scroll for a smoother effect
        toggleActions: "play none none reverse",
        // markers:true
      },
    });
  }, []);

  useEffect(() => {
    gsap.to(".scroll-text-2", {
      color: "#fff", // Fully opaque white
      duration: 1,
      stagger: 0.5, // Delay between each item animation
      ease: "power1.out", // Smooth easing
      scrollTrigger: {
        trigger: ".scroll-text-2",
        start: "top 60%", // Adjust start point as needed
        end: "bottom 40%",
        scrub: 1, // Sync animation with scroll for a smoother effect
        toggleActions: "play none none reverse",
        // markers:true
      },
    });
  }, []);

  useEffect(() => {
    gsap.to(".scroll-text-what", {
      color: "#9B9B9B", // Fully opaque white
      duration: 1,
      stagger: 0.5, // Delay between each item animation
      ease: "power1.out", // Smooth easing
      scrollTrigger: {
        trigger: ".scroll-text-what",
        start: "top 60%", // Adjust start point as needed
        end: "bottom 30%",
        scrub: 1, // Sync animation with scroll for a smoother effect
        toggleActions: "play none none reverse",
        // markers:true
      },
    });
  }, []);

  return (
    <div className="h-screen p-4 bg-white relative">
      <div className="h-full w-full bg-black rounded-[50px] overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="w-full object-cover"
          src="/src/assets/moon.mp4"
        ></video>

        {/* right div  */}
        <div>
        <h1 className="scroll-text font-[anzo4] text-[10vw] absolute left-24 top-[2vw] text-[rgba(255,254,254,0.13)]">
          ABOUT ME
        </h1>
        <h3 className="scroll-text font-[anzo3] text-[1.6vw] absolute left-24 top-[15vw] w-1/3 text-[rgba(255,255,255,0.13)]">
          A dedicated front-end developer with 1 year of freelancing experience,
          specializing in creating user-friendly, responsive web applications.
        </h3>
        <h3 className="scroll-text font-[anzo3] text-[1.6vw] absolute left-24 top-[26vw] w-1/3 text-[rgba(255,255,255,0.13)]">
          I am skilled in HTML, CSS, JavaScript, React.js, Bootstrap, Tailwind
          CSS, Git, and GitHub.
        </h3>
        <h3 className="scroll-text font-[anzo3] text-[1.6vw] absolute left-24 top-[32vw] w-1/3 text-[rgba(255,255,255,0.13)]">
          I understand modern front-end development
          practices and am passionate about delivering high-quality,
          maintainable code.
        </h3>
        </div>

        {/* left div  */}
        <div>
        <h1 className="scroll-text-what font-[anzo4] text-[17vw] absolute text-right right-8 top-0 text-[rgba(255,254,254,0.13)]">
        WHAT
        </h1>
        <h3 className="scroll-text-2 font-[anzo4] text-[17vw] absolute text-right right-12 top-[13vw] text-[rgba(255,255,255,0.13)]">
          I DO
        </h3>
        <h3 className="scroll-text-2 font-[anzo5] text-[1.6vw] absolute text-right right-12 bottom-[9.5vw] w-1/3 text-[rgba(255,255,255,0.13)]">
          I DEVELOP AND DESIGN
        </h3>
        <h3 className="scroll-text-2 font-[anzo3] text-[1.6vw] absolute text-right right-12 bottom-[7.2vw] w-1/3 text-[rgba(255,255,255,0.13)]">
         MORDEN, IMPACTFUL AND LUXURIOUS 
        </h3>
        <h3 className="scroll-text-2 font-[anzo5] text-[1.3vw] font-medium absolute text-right right-12 bottom-[3.5vw] w-1/3 text-[rgba(255,255,255,0.13)]">
        websites that seamlessly bridge your goals with needs of your clients
        </h3>
        </div>
       
      </div>
    </div>
  );
};
export default Page4;
