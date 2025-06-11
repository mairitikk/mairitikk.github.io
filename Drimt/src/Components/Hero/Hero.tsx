import React from 'react'
import profile_img from '../../assets/profile_mairi.svg'
import { Button } from '../Navbar/button'
const Hero = () => {
  return (
    <div className='flex items-center flex-col gap-9'>
          <img src={profile_img} alt="" className="mt-[150px] rounded-full bg-blue-200 p-2" />
          <h1 className='chewy-regular text-center w-[70%] text-[80px] font-semibold'><span className="text-gradient-logo w-[70%] text-[90px] font-semibold text-center">I'm Mairi Tikk</span>, web developer based in Germnay</h1>
          <p className='w-[50%] text-center text-2xl leading-[40px]'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, tenetur possimus sapiente suscipit eos excepturi explicabo! Cupiditate nisi veritatis, distinctio rerum magnam soluta reprehenderit officiis repellat temporibus facilis, corporis sed.</p>
          <div className="flex items-center gap-25 text-2x1 font-medium mb-[50px]">
              <Button className=" text-white hover:text-black border-none text-[18px] bg-gradient-to-r from-[#EBEFF5] to-[#3A3AF8] px-10 py-5 rounded-full cursor-pointer">Connect with me</Button>
              <Button variant="outline" className='chewy-regular text-[18px] rounded-full cursor-pointer px-10 py-5 '>My resume</Button>
    </div>
      </div>
  )
}

export default Hero
