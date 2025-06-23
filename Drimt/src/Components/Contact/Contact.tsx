import React from 'react'
import theme_pattern from '../../assets/theme_pattern4.png'

const Contact = () => {
  return (
   <section className="flex flex-col items-center justify-center gap-10 lg:gap-20 mt-10 mb-10 mx-5 sm:mx-10 lg:mx-[170px]">
      <div className="relative flex flex-col items-center mb-10 mt-20">
        <h1 className='px-4 text-4xl sm:text-6xl lg:text-8xl font-semibold text-center'>Get in touch</h1>
        <img
          src={theme_pattern}
          alt="Decorative pattern"
          className='absolute bottom-[-5px] right-0 z-[-1] w-full h-16 sm:h-20 lg:h-28 object-cover'
        />
      </div>
      </section>
      )
}

export default Contact
