import React from 'react'
import theme_pattern from '../../assets/theme_pattern4.png'
import profile_img from '../../assets/profile_img.svg'
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
          <div className="flex gap-5">
              <div className="about-left">
                  <img src={profile_img} alt="" />
              </div>
              <div className="flex flex-col gap-10">
                  <div className="flex flex-col gap-20 text-[24px] font-medium">
                      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem, excepturi iste. Quae consequuntur aperiam harum facilis non alias labore, sed tenetur placeat nam asperiores dignissimos dicta, expedita consectetur natus fuga.</p>
                      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A facilis nisi facere, sequi molestiae soluta inventore dolores laudantium quisquam velit nemo culpa libero doloribus, quia nam ducimus dolor ad. Eligendi!</p>
                  </div>
                  <div className="flex flex-col gap-5">
                      <div className="flex gap-[50px] items-center transition-all duration-300">
                          <p>HTML & CSS</p>
                          <hr className= "w-1/2" />
                      </div>
                      <div className="flex gap-[50px] items-center transition-all duration-300">
                          <p>React JS</p>
                          <hr className= "w-[70%] mx-auto"  />
                      </div>
                      <div className="flex gap-[50px] items-center transition-all duration-300">
                          <p>JavaScript</p>
                          <hr className= "w-[60%] mx-auto"  />
                      </div>
                      <div className="flex gap-[50px] items-center transition-all duration-300">
                          <p>TypeScript</p>
                          <hr className= "w-1/2" />
                      </div>
                  </div>
              </div>
          </div>
          <div className="about-achievments">
              <div className="about-achievement">
                  <h1>10+</h1>
                  <p>YEARS OF EXPERIENCE</p>
              </div>
              <hr />
               <div className="about-achievement">
                  <h1>90+</h1>
                  <p>PROJECTS COMPLETED</p>
              </div>
              <hr />
               <div className="about-achievement">
                  <h1>15+</h1>
                  <p>HAPPY CLIENTS</p>
              </div>
          </div>
    </div>
  )
}

export default About
