import React from 'react'

const TiltText = (props) => {
  return (
    <div id="tiltDiv" ref={props.abc} className='lg:mt-24 md:mt-10'>
      <h1 className='text-[4.2vw] uppercase font-[anzo5] leading-[4vw]'>I am <span className='font-[anzo5] text-black'>arya kakade</span>™</h1>
      <h1 className='text-[7.5vw] font-[anzo1] leading-[7vw]'>DEVELOPER</h1>
      <h1 className='text-[4.2vw] uppercase font-[anzo5] leading-[4vw]'>To Hire</h1>
  </div>
  )
}

export default TiltText