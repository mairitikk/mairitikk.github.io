import React from 'react'
import profile_img from '../../assets/profile_mairi.svg'
const Hero = () => {
  return (
    <div className='flex items-center flex-col gap-9'>
          <img src={profile_img} alt="" className="mt-[150px] rounded-full bg-blue-200 p-2" />
          <h1 className='text-center w-[70%] text-[80px] font-semibold'><span className="text-gradient-logo w-[70%] text-[90px] font-semibold text-center">I'm Mairi Tikk</span>, web developer based in Germnay</h1>
          <p className='w-[50%] text-center text-2xl leading-[40px]'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, tenetur possimus sapiente suscipit eos excepturi explicabo! Cupiditate nisi veritatis, distinctio rerum magnam soluta reprehenderit officiis repellat temporibus facilis, corporis sed.</p>
          <div className="flex items-center gap-25 text-2x1 font-medium mb-[50px]">
              <div className="hero-connect">Connect with me</div>
              <div className="hero-ressumen">My resume</div>
    </div>
      </div>
  )
}

export default Hero
