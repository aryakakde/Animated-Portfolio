import React, { useRef, useState } from 'react'
import PageOneBottom from '../components/PageOneBottom'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import TiltText from '../components/TiltText';

const Page1 = () => {

  const tiltRef = useRef(null)
  const [xVal, setXVal] = useState(0)
  const [yVal, setYVal] = useState(0)

  const mouseMoving = (e) => {

    setXVal((e.clientX - tiltRef.current.getBoundingClientRect().x - tiltRef.current.getBoundingClientRect().width/2)/70)
    setYVal(-(e.clientY - tiltRef.current.getBoundingClientRect().y - tiltRef.current.getBoundingClientRect().height/2)/20)
  }

  useGSAP(function(){
    gsap.to(tiltRef.current,{
      transform : `rotateX(${yVal}deg) rotateY(${xVal}deg)`,
      duration : 3,
      ease:'power4.out'
    })
  },[xVal,yVal])

  return (
    <div id="page1"
    onMouseMove={ (e) => {
      mouseMoving(e)
    }}
    className='bg-white h-screen p-4 relative'>
        <div id='page1-in' className='relative shadow-xl p-16 shadow-gray-700 h-full w-full bg-cover bg-black rounded-[40px] bg-[url(https://static.wixstatic.com/media/f1c650_678c0ceab5194893872c60fa3be4bcdc~mv2.jpg/v1/fill/w_1857,h_840,fp_0.69_0.64,q_85,usm_0.66_1.00_0.01,enc_auto/ANZO.jpg)]'>
            <img className='h-[10vh]' src="https://static.wixstatic.com/media/f1c650_35a00b1fe6ce403eb237970ec8d34f79~mv2.png/v1/fill/w_101,h_101,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Frame%2053.png" alt="" />
            <TiltText abc={tiltRef}/>
            <PageOneBottom  />
        </div>
    </div>
  )
}

export default Page1