import React from 'react'
import profile_img from '../../assets/profile_img.svg'
const Hero = () => {
  return (
    <div className='flex items-center flex-col gap-9'>
          <img src={profile_img} alt="" className='mt-[150px]' />
          <h1 className='text-center w-[70%] text-[80px] font-semibold'><span>I'm Mairi Tikk</span>, web developer based in Germnay</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, tenetur possimus sapiente suscipit eos excepturi explicabo! Cupiditate nisi veritatis, distinctio rerum magnam soluta reprehenderit officiis repellat temporibus facilis, corporis sed.</p>
          <div className="hero-action">
              <div className="hero-connect">Connect with me</div>
              <div className="hero-ressumen">My resume</div>
    </div>
      </div>
  )
}

export default Hero
