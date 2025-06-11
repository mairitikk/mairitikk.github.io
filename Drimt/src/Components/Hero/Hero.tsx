import React from 'react'
import profile_img from '../../assets/profile_mairi.svg'
import { Button } from '../Navbar/button'

const Hero = () => {
  return (
    <div className='
      flex flex-col items-center gap-6  /* Smaller default gap */
      px-4 sm:px-6 md:px-8 lg:px-12    /* Horizontal padding for smaller screens */
      text-center                      /* Center text for better flow on small screens */
    '>
      {/* Profile Image */}
      <img
        src={profile_img}
        alt="Mairi Tikk"
        className="
          mt-24 sm:mt-32 md:mt-40      /* Responsive top margin */
          rounded-full bg-blue-200 p-2
          w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 /* Responsive image size */
          object-cover                  /* Ensures image covers the area without distortion */
        "
      />

      {/* Heading */}
      <h1 className='
        chewy-regular
        text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl /* Responsive font size */
        font-semibold
        max-w-4xl                       /* Max width to prevent it from getting too wide */
        leading-tight sm:leading-snug md:leading-normal /* Responsive line height */
      '>
        <span className="
          text-gradient-logo
          block                     /* Make the span a block to handle text wrapping better */
          text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl /* Responsive font size for gradient part */
          font-semibold
        ">
          I'm Mairi Tikk
        </span>
        , web developer based in Germany
      </h1>

      {/* Paragraph */}
      <p className='
        max-w-2xl                       /* Max width for readability */
        text-base sm:text-lg md:text-xl lg:text-2xl /* Responsive font size */
        leading-normal sm:leading-relaxed md:leading-loose /* Responsive line height */
        mb-8 sm:mb-10 md:mb-12          /* Responsive bottom margin */
      '>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, tenetur possimus sapiente suscipit eos excepturi explicabo! Cupiditate nisi veritatis, distinctio rerum magnam soluta reprehenderit officiis repellat temporibus facilis, corporis sed.
      </p>

      {/* Buttons Container */}
      <div className="
        flex flex-col sm:flex-row     /* Stack vertically on small screens, row on larger */
        items-center gap-4 sm:gap-6 md:gap-8 /* Responsive gap between buttons */
        text-lg sm:text-xl md:text-2xl font-medium /* Responsive text size for the container, influences children */
        mb-12 sm:mb-16 md:mb-20          /* Responsive bottom margin for the whole section */
      ">
        {/* Connect with me button */}
        <Button
          className="
            px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 /* Responsive padding */
            rounded-full
            bg-gradient-to-r from-[#EBEFF5] to-[#3A3AF8]
            text-white hover:text-[#3A3AF8]
            border-none
            text-base sm:text-lg md:text-[18px] /* Responsive font size */
            cursor-pointer
            w-full sm:w-auto                 /* Full width on small screens, auto on larger */
          "
        >
          Connect with me
        </Button>

        {/* My resume button */}
        <Button
          variant="outline"
          className='
            chewy-regular
            px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 /* Responsive padding */
            rounded-full cursor-pointer
            relative isolate overflow-hidden group
            border-2 border-[#3A3AF8]
            text-[#3A3AF8] hover:text-white
            transition-colors duration-300
            text-base sm:text-lg md:text-[18px] /* Responsive font size */
            w-full sm:w-auto                 /* Full width on small screens, auto on larger */
          '
        >
          <span className="absolute inset-0 bg-gradient-to-r from-[#EBEFF5] to-[#3A3AF8] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
          <span className="relative z-10">My resume</span>
        </Button>
      </div>
    </div>
  )
}

export default Hero