import React from 'react';
import { useNavigate } from 'react-router-dom'; // Only useNavigate is needed for programmatic navigation
import profile_img from '../../assets/profile_mairi.svg';
import { Button } from '../navbar/button'; // Assuming this path is correct

const Hero = () => {
  const navigate = useNavigate();

  // Function to handle navigation and scrolling for both buttons
  const handleButtonClick = (e, path, sectionId) => {
    e.preventDefault(); // Prevent default button behavior

    // Navigate to the new path with the hash
    navigate(`${path}#${sectionId}`);

    // After navigation, attempt to scroll to the element.
    // A small delay is crucial as the target component/element
    // might not be in the DOM immediately after the route change.
    setTimeout(() => {
      const targetElement = document.getElementById(sectionId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      } else {
        console.warn(`Element with ID '${sectionId}' not found for scrolling.`);
      }
    }, 100); // Adjust delay if scrolling is inconsistent
  };


  return (
    <div id="home" className='
      flex flex-col items-center gap-6
      px-4 sm:px-6 md:px-8 lg:px-12
      text-center
    '>
      {/* Profile Image */}
      <img
        src={profile_img}
        alt="Mairi Tikk"
        className="
          mt-8 sm:mt-12 md:mt-16
          rounded-full bg-blue-200 p-2
          w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 xl:w-80 xl:h-80
          object-cover
        "
      />

      {/* Heading */}
      <h1 className='
        chewy-regular
        text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl
        font-semibold
        max-w-4xl
        leading-tight sm:leading-snug md:leading-normal
      '>
        <span className="
          text-gradient-logo
          block
          text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl
          font-semibold
        ">
          I'm Mairi Tikk,
        </span>
        junior-web developer based in Germany
      </h1>

      {/* Paragraph */}
      <p className='
        max-w-2xl
        text-base sm:text-lg md:text-xl lg:text-2xl
        leading-normal sm:leading-relaxed md:leading-loose
        mb-8 sm:mb-10 md:mb-12'>I am an aspiring Full-Stack Developer with a few years of hands-on, self-directed practice in building and deploying web applications. My passion lies in bringing ideas to life through code, from crafting engaging front-end experiences to developing robust back-end solutions.
      </p>

      {/* Buttons Container */}
      <div className="
        flex flex-col sm:flex-row
        items-center gap-4 sm:gap-6 md:gap-8
        text-lg sm:text-xl md:text-2xl font-medium
        mb-12 sm:mb-16 md:mb-20
      ">
        {/* Connect with me button: Goes to /contact#contact */}
        <Button
          onClick={(e) => handleButtonClick(e, '/contact', 'contact')} // Call handler for contact
          className="
            px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5
            rounded-full
            bg-gradient-to-r from-[#EBEFF5] to-[#3A3AF8]
            text-white hover:text-[#3A3AF8]
            border-none
            text-base sm:text-lg md:text-[18px]
            cursor-pointer
            w-full sm:w-auto
          "
        >
          Connect with me
        </Button>

        {/* My resume button: Goes to /portfolio#portfolio (assuming MyWork is your portfolio) */}
        <Button
          variant="outline"
          onClick={(e) => handleButtonClick(e, '/portfolio', 'portfolio')} // Call handler for portfolio
          className='
            chewy-regular
            px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5
            rounded-full cursor-pointer
            relative isolate overflow-hidden group
            border-2 border-[#3A3AF8]
            text-[#3A3AF8] hover:text-white
            transition-colors duration-300
            text-base sm:text-lg md:text-[18px]
            w-full sm:w-auto
          '
        >
          <span className="absolute inset-0 bg-gradient-to-r from-[#EBEFF5] to-[#3A3AF8] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
          <span className="relative z-10">My resume</span>
        </Button>
      </div>
    </div>
  );
};

export default Hero;