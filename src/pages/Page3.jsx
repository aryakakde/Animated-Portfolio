import React from 'react'

const Page3 = () => {
  return (
    <div className='h-screen relative bg-white flex items-center justify-center '>
        <img className='z-20 absolute h-[70vh] w-[60vw]' src="https://static.wixstatic.com/media/f1c650_23c4e7bcc6294676abdb81290a836c2b~mv2.png/v1/fill/w_1268,h_729,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/try.png" alt="" />
        <video autoPlay loop muted className='z-10 h-[60vh] w-[48vw] relative object-cover' src="https://video.wixstatic.com/video/f1c650_ec0546cb7b10485c8753983f298c6ea4/360p/mp4/file.mp4"></video>
        <div className='z-0 h-0.5 w-3/5 top-[40%] absolute bg-black'></div>
        <div className='z-0 h-0.5 w-4/5 top-[58%] absolute bg-black'></div>
        <div className='z-0 h-0.5 w-full top-[76%] absolute bg-black'></div>
    </div>
  )
}

export default Page3