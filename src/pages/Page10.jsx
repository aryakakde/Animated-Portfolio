import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Page10 = () => {

  useEffect(() => {
    gsap.to(".scrolltexts", {
      color: "rgba(255, 255, 255, 1)", // Fully opaque white
      duration: 1,
      stagger: 0.5, // Delay between each item animation
      ease: "power1.out", // Smooth easing
      scrollTrigger: {
        trigger: ".scrolltexts",
        start: "top 80%", // Adjust start point as needed
        end: "bottom 60%",
        scrub: 1, // Sync animation with scroll for a smoother effect
        toggleActions: "play none none reverse",
        // markers: true // Uncomment for debugging
      },
    });
  }, []);

  return (
    <div className='h-screen p-10 bg-white relative'>
      <div className='h-full w-full bg-black rounded-[50px] overflow-hidden relative'>
        <video
          autoPlay
          loop
          muted
          className='w-3/12 top-[16vw] ml-6 absolute right-8 '
          src="https://video.wixstatic.com/video/11062b_1a4b9f19c7d04747b5bf18c406ce3f55/720p/mp4/file.mp4"
        ></video>
        {/* Skills Heading */}
        <h1 className='scrolltexts font-[anzo4] text-[5vw] absolute inset-0 flex justify-start top-[5vw] left-[3vw] text-[rgba(255,254,254,0.13)]' style={{ letterSpacing: '5px' }}>
          Experience
        </h1>
        <h2 className="scrolltexts text-3xl absolute top-[13vw] left-[3vw] text-[rgba(255,254,254,0.13)]">
        Freelance Front End Developer
        </h2>
        <h3 className="scrolltexts font-[alag-anzo2] text-[1.3vw] absolute top-[17vw] left-[3vw] w-2/3 text-[rgba(255,254,254,0.13)]">
        Developed responsive websites for clients using HTML, CSS, JavaScript, React.js, and Tailwind CSS.
        </h3>
        <h3 className="scrolltexts font-[alag-anzo2] text-[1.3vw] absolute top-[21vw] left-[3vw] w-2/3 text-[rgba(255,254,254,0.13)]">
        Collaborated with clients to gather requirements and deliver tailored web solutions with smooth UX/UI. 
        </h3>
        <h3 className="scrolltexts font-[alag-anzo2] text-[1.3vw] absolute top-[25vw] left-[3vw] w-2/3 text-[rgba(255,254,254,0.13)]">
        Integrated third-party APIs and libraries to enhance functionality and streamline client-side logic. 
        </h3>
        <h3 className="scrolltexts font-[alag-anzo2] text-[1.3vw] absolute top-[29vw] left-[3vw] w-2/3 text-[rgba(255,254,254,0.13)]">
        Managed projects efficiently using Git and GitHub, ensuring version control and team collaboration.
        </h3>
        <h3 className="scrolltexts text-xl absolute bottom-[4vw] left-[3vw] text-[rgba(255,254,254,0.13)]">
        12/2023 – Present
        </h3>

      </div>
    </div>
  )
}

export default Page10