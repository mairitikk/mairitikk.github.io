import React from 'react'
import theme_pattern from '../../assets/theme_pattern4.png'
import profile_img from '../../assets/profile_mairi.svg'

const About = () => {
  return (
    //about me
    <div className="flex flex-col items-center justify-center gap-10 lg:gap-20 mt-10 mb-10 mx-5 sm:mx-10 lg:mx-[170px]">
      <div className="relative">
        <h1 className='px-4 text-4xl sm:text-6xl lg:text-8xl font-semibold text-center'>About me</h1>
        <img
          src={theme_pattern}
          alt="Decorative pattern"
          className='absolute bottom-[-5px] right-0 z-[-1] w-full h-16 sm:h-20 lg:h-28 object-cover'
        />
      </div>

      <div className="flex flex-col lg:flex-row gap-10 items-center lg:items-start">
        <div className="about-left w-2/3 sm:w-1/2 lg:w-auto flex justify-center"> {/* Added flex justify-center for image */}
          <img src={profile_img} alt="Profile" className="w-full h-auto max-w-xs lg:max-w-none" /> {/* Added max-w-xs for smaller screens */}
        </div>

        <div className="flex flex-col gap-8 lg:gap-10 text-center lg:text-left">
          <div className="flex flex-col gap-4 lg:gap-5 text-base sm:text-lg lg:text-[24px] font-medium">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem, excepturi iste. Quae consequuntur aperiam harum facilis non alias labore, sed tenetur placeat nam asperiores dignissimos dicta, expedita consectetur natus fuga.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A facilis nisi facere, sequi molestiae soluta inventore dolores laudantium quisquam velit nemo culpa libero doloribus, quia nam ducimus dolor ad. Eligendi!</p>
          </div>

          <div className="flex flex-col gap-4 lg:gap-5">
            <div className="flex gap-4 items-center transition-all duration-300 hover:scale-105">
              <p className='min-w-[100px] sm:min-w-[150px] text-lg sm:text-xl lg:text-2xl font-medium'>HTML & CSS</p>
              <hr className="outline-none border-none flex-grow h-2 rounded-full bg-gradient-to-l from-[#EBEFF5] to-[#3A3AF8]" style={{ width: '50%' }}/>
            </div>
            <div className="flex gap-4 items-center transition-all duration-300 hover:scale-105">
              <p className='min-w-[100px] sm:min-w-[150px] text-lg sm:text-xl lg:text-2xl font-medium'>React JS</p>
              <hr className="outline-none border-none flex-grow h-2 rounded-full bg-gradient-to-l from-[#EBEFF5] to-[#3A3AF8]" style={{ width: '70%' }}/>
            </div>
            <div className="flex gap-4 items-center transition-all duration-300 hover:scale-105">
              <p className='min-w-[100px] sm:min-w-[150px] text-lg sm:text-xl lg:text-2xl font-medium'>JavaScript</p>
              <hr className="outline-none border-none flex-grow h-2 rounded-full bg-gradient-to-l from-[#EBEFF5] to-[#3A3AF8]" style={{ width: '60%' }}/>
            </div>
            <div className="flex gap-4 items-center transition-all duration-300 hover:scale-105">
              <p className='min-w-[100px] sm:min-w-[150px] text-lg sm:text-xl lg:text-2xl font-medium'>TypeScript</p>
              <hr className="outline-none border-none flex-grow h-2 rounded-full bg-gradient-to-l from-[#EBEFF5] to-[#3A3AF8]" style={{ width: '50%' }}/>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row w-full justify-around gap-10 sm:gap-4 lg:mb-20">
        <div className="flex flex-col items-center gap-[5px] sm:gap-[10px] transition-all duration-500 hover:scale-110 sm:hover:scale-112">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gradient-logo2">10+</h1>
          <p className='text-base sm:text-lg lg:text-[22px] font-medium text-center'>YEARS OF EXPERIENCE</p>
        </div>
        {/* You might want to remove these HRs or style them differently for mobile */}
        <hr className="hidden sm:block h-20 w-[1px] bg-gray-300" />
        <div className="flex flex-col items-center gap-[5px] sm:gap-[10px] transition-all duration-500 hover:scale-110 sm:hover:scale-112">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gradient-logo2">90+</h1>
          <p className='text-base sm:text-lg lg:text-[22px] font-medium text-center'>PROJECTS COMPLETED</p>
        </div>
        <hr className="hidden sm:block h-20 w-[1px] bg-gray-300" />
        <div className="flex flex-col items-center gap-[5px] sm:gap-[10px] transition-all duration-500 hover:scale-110 sm:hover:scale-112">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gradient-logo2">15+</h1>
          <p className='text-base sm:text-lg lg:text-[22px] font-medium text-center'>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  )
}

export default About