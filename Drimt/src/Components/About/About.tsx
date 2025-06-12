import React from 'react'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/profile_img.svg'
const About = () => {
  return (
    <div>
          <div className="about-title">
              <h1>About me</h1>
              <img src={ theme_pattern} alt="" />
          </div>
          <div className="about-sections">
              <div className="about-left">
                  <img src={profile_img} alt="" />
              </div>
              <div className="about-right">
                  <div className="about-para">
                      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem, excepturi iste. Quae consequuntur aperiam harum facilis non alias labore, sed tenetur placeat nam asperiores dignissimos dicta, expedita consectetur natus fuga.</p>
                      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A facilis nisi facere, sequi molestiae soluta inventore dolores laudantium quisquam velit nemo culpa libero doloribus, quia nam ducimus dolor ad. Eligendi!</p>
                  </div>
                  <div className="about-skills">
                      <div className="about-skill">
                          <p>HTML & CSS</p>
                          <hr className= "w-1/2" />
                      </div>
                      <div className="about-skill">
                          <p>React JS</p>
                          <hr className= "w-[70%] mx-auto"  />
                      </div>
                      <div className="about-skill">
                          <p>JavaScript</p>
                          <hr className= "w-[60%] mx-auto"  />
                      </div>
                      <div className="about-skill">
                          <p>TypeScript</p>
                          <hr className= "w-1/2" />
                      </div>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default About
