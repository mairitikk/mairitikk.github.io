
import theme_pattern from '../../assets/theme_pattern4.png'
import profile_img from '../../assets/profile_mairi.svg'

const About = () => {
  return (
    //about me
    <div id="about" className="flex flex-col items-center justify-center gap-10 lg:gap-20 mt-10 mb-10 mx-5 sm:mx-10 lg:mx-[170px]">
      <div className="relative">
        <h1 className='px-4 text-4xl sm:text-6xl lg:text-8xl font-semibold text-center'>About me</h1>
        <img
          src={theme_pattern}
          alt="Decorative pattern"
          className='absolute bottom-[-5px] right-0 z-[-1] w-full h-16 sm:h-20 lg:h-28 object-cover'
        />
      </div>

      <div className="flex flex-col lg:flex-row gap-10 items-center lg:items-start">
        <div className="about-left w-2/3 sm:w-1/2 lg:w-auto flex justify-center"> 
          <img src={profile_img} alt="Profile" className="w-full h-auto max-w-xs lg:max-w-none" />
        </div>

        <div className="flex flex-col gap-8 lg:gap-10 text-center lg:text-left">
          <div className="flex flex-col gap-4 lg:gap-5 text-base sm:text-lg lg:text-[24px] font-medium">
            <p>I am a passionate and driven Junior Full Stack Developer with 2 years of hands-on experience crafting web applications. In my journey so far, I've had the exciting opportunity to contribute to various projects, building both robust back-end systems and engaging front-end user interfaces</p>
            <p> My enthusiasm for full-stack development drives me to continuously learn and apply new technologies, always striving to deliver efficient and user-friendly solutions.</p>
          </div>

          <div className="flex flex-col gap-4 lg:gap-5">
  <div className="flex gap-4 items-center transition-all duration-300 hover:scale-105">
    <p className='min-w-[100px] sm:min-w-[150px] text-lg sm:text-xl lg:text-2xl font-medium'>JavaScript</p>
  
    <hr className="outline-none border-none h-2 rounded-full bg-gradient-to-l from-[#EBEFF5] to-[#3A3AF8] w-1/2 sm:w-[50%]" />
  </div>
  <div className="flex gap-4 items-center transition-all duration-300 hover:scale-105">
    <p className='min-w-[100px] sm:min-w-[150px] text-lg sm:text-xl lg:text-2xl font-medium'>HTML & CSS</p>
    
    <hr className="outline-none border-none h-2 rounded-full bg-gradient-to-l from-[#EBEFF5] to-[#3A3AF8] w-[70%] sm:w-[70%]" />
  </div>
  <div className="flex gap-4 items-center transition-all duration-300 hover:scale-105">
    <p className='min-w-[100px] sm:min-w-[150px] text-lg sm:text-xl lg:text-2xl font-medium'>React JS</p>
  
    <hr className="outline-none border-none h-2 rounded-full bg-gradient-to-l from-[#EBEFF5] to-[#3A3AF8] w-[60%] sm:w-[60%]" />
  </div>
  <div className="flex gap-4 items-center transition-all duration-300 hover:scale-105">
    <p className='min-w-[100px] sm:min-w-[150px] text-lg sm:text-xl lg:text-2xl font-medium'>TypeScript</p>
    
    <hr className="outline-none border-none h-2 rounded-full bg-gradient-to-l from-[#EBEFF5] to-[#3A3AF8] w-1/2 sm:w-[50%]" />
  </div>
</div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row w-full justify-around gap-10 sm:gap-4 lg:mb-20">
        <div className="flex flex-col items-center gap-[5px] sm:gap-[10px] transition-all duration-500 hover:scale-110 sm:hover:scale-112">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gradient-logo2">2+</h1>
          <p className='text-base sm:text-lg lg:text-[22px] font-medium text-center'>YEARS OF EXPERIENCE</p>
        </div>
        
        <hr className="hidden sm:block h-20 w-[1px] bg-gray-300" />
        <div className="flex flex-col items-center gap-[5px] sm:gap-[10px] transition-all duration-500 hover:scale-110 sm:hover:scale-112">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gradient-logo2">5+</h1>
          <p className='text-base sm:text-lg lg:text-[22px] font-medium text-center'>PROJECTS COMPLETED</p>
        </div>
        <hr className="hidden sm:block h-20 w-[1px] bg-gray-300" />
        <div className="flex flex-col items-center gap-[5px] sm:gap-[10px] transition-all duration-500 hover:scale-110 sm:hover:scale-112">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gradient-logo2">5+</h1>
          <p className='text-base sm:text-lg lg:text-[22px] font-medium text-center'>TECHNOLOGIES MASTERED</p>
        </div>
      </div>
    </div>
  )
}

export default About