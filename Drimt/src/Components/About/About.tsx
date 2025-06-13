import React from 'react'
import theme_pattern from '../../assets/theme_pattern4.png'
import profile_img from '../../assets/profile_mairi.svg'
const About = () => {
    return (
      //about me 
    <div className="flex flex-col items-center justify-center gap-20 mt-20 mb-20 ml-[170px] mr-[170px]">
          <div className="relative">
              <h1 className='px-[30px] text-[80px] font-semibold'>About me</h1>
              <img src={theme_pattern}
    alt="Decorative pattern" className=' absolute bottom-[-5px] right-0 z-[-1] w-full h-28 object-cover'
  />
          </div>
          <div className="flex gap-10">
              <div className="about-left">
                  <img src={profile_img} alt="" />
              </div>
              <div className="flex flex-col gap-10">
                  <div className="flex flex-col gap-5 text-[24px] font-medium">
                      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem, excepturi iste. Quae consequuntur aperiam harum facilis non alias labore, sed tenetur placeat nam asperiores dignissimos dicta, expedita consectetur natus fuga.</p>
                      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A facilis nisi facere, sequi molestiae soluta inventore dolores laudantium quisquam velit nemo culpa libero doloribus, quia nam ducimus dolor ad. Eligendi!</p>
                  </div>
          <div className="flex flex-col gap-5">
  <div className="flex gap-4 items-center transition-all duration-300 hover:scale-105">
  <p className='min-w-[150px] text-2xl font-medium'>HTML & CSS</p>
  <hr className="outline-none border-none w-1/2 h-2 rounded-full bg-gradient-to-l from-[#EBEFF5] to-[#3A3AF8]" />
</div>
  <div className="flex gap-4 items-center transition-all duration-300 hover:scale-105">
    <p className='min-w-[150px] text-2xl font-medium'>React JS</p>
    <hr className="outline-none border-none w-[70%] h-2 rounded-full bg-gradient-to-l from-[#EBEFF5] to-[#3A3AF8]" /> 
  </div>
  <div className="flex gap-4 items-center transition-all duration-300 hover:scale-105">
    <p className='min-w-[150px] text-2xl font-medium'>JavaScript</p>
    <hr className="outline-none border-none w-[60%] h-2 rounded-full bg-gradient-to-l from-[#EBEFF5] to-[#3A3AF8]" /> 
  </div>
  <div className="flex gap-4 items-center transition-all duration-300 hover:scale-105">
    <p className='min-w-[150px] text-2xl font-medium'>TypeScript</p>
    <hr className="outline-none border-none w-1/2 h-2 rounded-full bg-gradient-to-l from-[#EBEFF5] to-[#3A3AF8]" /> 
  </div>
</div>
              </div>
          </div>
          <div className="flex w-full justify-around mb-20">
              <div className="flex flex-col items-center gap-[10px] transition-all duration-500">
                  <h1 className="text-[60px] font-bold text-gradient-logo2">10+</h1>
                  <p className='text-[22px] font-medium'>YEARS OF EXPERIENCE</p>
              </div>
              <hr />
               <div className="flex flex-col items-center gap-[10px] transition-all duration-500">
                  <h1 className="text-[60px] font-bold text-gradient-logo2">90+</h1>
                  <p className='text-[22px] font-medium'>PROJECTS COMPLETED</p>
              </div>
              <hr />
               <div className="flex flex-col items-center gap-[10px] transition-all duration-500">
                  <h1 className="text-[60px] font-bold text-gradient-logo2">15+</h1>
                  <p className='text-[22px] font-medium'>HAPPY CLIENTS</p>
              </div>
          </div>
    </div>
  )
}

export default About
