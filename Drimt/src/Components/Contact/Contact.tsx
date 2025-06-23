import React from 'react'
import theme_pattern from '../../assets/theme_pattern4.png'
import { Mail, Phone, MapPin } from "lucide-react";

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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 max-w-6xl mx-auto">
        {/* Left Section: Let's Talk */}
        <div className="space-y-8">
          <h3 className="text-5xl font-bold text-[#3A3AF8]">Let's talk</h3>
          <p className="text-gray-500 text-lg">
            I'm currently available to take on new projects, so feel free to
            send me a message about anything that you want me to work on.
            You can contact anytime.
          </p>

          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Mail className="h-6 w-6 text-gray-500" />
              <p className="text-gray-500 text-lg">greatstackdev@gmail.com</p>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="h-6 w-6 text-gray-500" />
              <p className="text-gray-500 text-lg">+772-825-524</p>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="h-6 w-6 text-gray-500" />
              <p className="text-gray-500 text-lg">CA, United States</p>
            </div>
          </div>
        </div>

</div>
      </section>
      )
}

export default Contact
