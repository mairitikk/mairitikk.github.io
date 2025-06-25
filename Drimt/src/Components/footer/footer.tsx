import footer_logo from '../../assets/logo2.png'
import user_icon from '../../assets/user_icon.svg'
import { Input } from "@/components/ui/input"

const Footer = () => { 
  return (
    // Main container for the entire footer
    <footer className="py-10 px-4 md:px-8 lg:px-16">
      {/* Footer Top Section */}
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 pb-8">
        {/* Footer Top Left - Logo and Text */}
        <div className="flex flex-col items-center md:items-start gap-4 text-center md:text-left">
          <img src={footer_logo} alt="footer logo" className="h-10 w-auto" />
          <p className="max-w-xs">I am an aspiring Full-Stack Developer</p>
        </div>

        {/* Footer Top Right - Email Input and Subscribe Button */}
        <div className="flex flex-col items-center md:items-end w-full md:w-auto">
          {/* New flex container for Input and Button */}
          <div className="flex w-full max-w-sm gap-2"> {/* Added gap-2 for spacing between input and button */}
            {/* Input Wrapper with Icon */}
            <div className="flex items-center bg-gray-800 rounded-md p-2 flex-grow"> {/* flex-grow makes it take available space */}
              <img src={user_icon} alt="user icon" className="h-5 w-5 mr-2 text-gray-400" />
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-grow bg-transparent border-none focus:ring-0 focus:outline-none text-gray-200 placeholder-gray-500"
              />
            </div>
            {/* Subscribe Button */}
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-md transition-colors duration-300 whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
         </div>

      {/* Horizontal Line */}
      <hr className="border-t border-gray-700 my-8" />

      {/* Footer Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
        {/* Footer Bottom Left - Copyright */}
        <p className="text-center md:text-left">
          &copy; {new Date().getFullYear()} Mairi Tikk. All rights reserved.
        </p>

        {/* Footer Bottom Right - Links */}
        <div className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-2">
          <p className="hover:text-white cursor-pointer transition-colors duration-200">Term of Services</p>
          <p className="hover:text-white cursor-pointer transition-colors duration-200">Privacy Policy</p>
          <p className="hover:text-white cursor-pointer transition-colors duration-200">Connect with me</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

