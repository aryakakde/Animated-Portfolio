import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Page8 = () => {
  useEffect(() => {
    gsap.to(".scrolltext", {
      color: "rgba(255, 255, 255, 1)", // Fully opaque white
      duration: 1,
      stagger: 0.5, // Delay between each item animation
      ease: "power1.out", // Smooth easing
      scrollTrigger: {
        trigger: ".scrolltext",
        start: "top 40%", // Adjust start point as needed
        end: "bottom 20%",
        scrub: 1, // Sync animation with scroll for a smoother effect
        toggleActions: "play none none reverse",
        // markers: true // Uncomment for debugging
      },
    });
  }, []);
 
  return (

    <div className="h-full p-10 bg-white relative flex">
      <div className="h-full w-full bg-black rounded-[50px] overflow-hidden flex">
        {/* Video Section */}
        <video
          autoPlay
          loop
          muted
          className="h-96 w-1/5 py-5 items-center mt-14"
          src="https://video.wixstatic.com/video/11062b_b42f6deed88e48509affdc02c3eb5b45/720p/mp4/file.mp4"
        ></video>

        {/* Text Section */}
        <div className="flex-1 flex justify-center flex-col pb-10 pt-10">
          <h1 className="scrolltext text-3xl font-semibold mb-2 text-[rgba(255,254,254,0.3)]">
            Projects
          </h1>
          <div className="mb-2">
            <h2 className="scrolltext text-xl text-[rgba(255,254,254,0.13)]">
              1) Employee Management System
            </h2>
            <h3 className="scrolltext text-[rgba(255,254,254,0.13)]">
              Description: Developed an employee management system with
              role-based dashboards for administrators and employees, focusing
              on efficient task tracking and user-specific views.
            </h3>
            <h3 className="scrolltext text-[rgba(255,254,254,0.13)]">
              Technologies Used: React, JavaScript, Tailwind CSS, Local
              Storage.
            </h3>
          </div>
          <hr className="scrolltext mb-2 text-[rgba(255,254,254,0.13)]" />
          <div>
            <h2 className="scrolltext text-xl text-[rgba(255,254,254,0.13)]">
              2) Real-Time School Management System
            </h2>
            <h3 className="scrolltext text-[rgba(255,254,254,0.13)]">
              Description: Developed a real-time school management system for
              the School of Brilliant Ralegaon, facilitating efficient school
              operations management and enhancing user experience.
            </h3>
            <h3 className="scrolltext text-[rgba(255,254,254,0.13)]">
              Technologies Used: HTML, CSS, JavaScript, Bootstrap.
            </h3>
          </div>
          <hr className="scrolltext mb-2 mt-2 text-[rgba(255,254,254,0.13)]" />
          <div>
            <h2 className="scrolltext text-xl text-[rgba(255,254,254,0.13)]">
              3) Animated Portfolio
            </h2>
            <h3 className="scrolltext text-[rgba(255,254,254,0.13)]">
              Description: Built a visually engaging and interactive portfolio
              to showcase projects and skills, using animations to enhance user
              experience and interactivity.
            </h3>
            <h3 className="scrolltext text-[rgba(255,254,254,0.13)]">
              Technologies Used: React.js, HTML, Tailwind CSS, GSAP, JavaScript,
              CSS.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page8;
