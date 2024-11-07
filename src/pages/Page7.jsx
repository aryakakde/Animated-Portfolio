const Page7 = () => {
    return (
      <>
        {/* Wrapper for Page7 content with overflow-hidden */}
        <div className='relative overflow-hidden flex items-center justify-center bg-emerald-400'>
          
          {/* Background Image with adjusted position and size */}
          <div 
            className='absolute inset-0 z-10 h-full w-full bg-fixed bg-cover' 
            style={{ 
              backgroundImage: "url('https://static.wixstatic.com/media/f1c650_8b19a36c22b44b04aa056d2f4482aeac~mv2.jpeg/v1/fill/w_729,h_1466,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/f1c650_8b19a36c22b44b04aa056d2f4482aeac~mv2.jpeg')",
              backgroundPosition: 'center 10%',
              backgroundSize: '50% auto'
            }}
          >
          </div>
    
          {/* Foreground Image */}
          <img 
            className='relative z-20 h-[150vh] w-full' 
            src="https://static.wixstatic.com/media/f1c650_360814da288f418991547fa9d5e08904~mv2.png/v1/fill/w_1920,h_1477,al_c,q_95,usm_0.66_1.00_0.01,enc_auto/Subtract.png" 
            alt="" 
          />
  
          {/* "HARD" Text positioned on the right side */}
          <div className='absolute right-20 top-1/2 transform -translate-y-1/2 z-30'>
            <span className="px-2 text-black text-[25vh] font-[anzo4] ">HARD</span>
          </div>
        </div>
      </>
    );
  }
  
  export default Page7;
  