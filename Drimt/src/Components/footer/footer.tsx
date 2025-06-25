import footer_logo from '../../assets/logo2.png'
import user_icon from '../../assets/user_icon.svg'
import { Input } from "@/components/ui/input"

const Footer = () => { 
  return (
    // Main container for the entire footer
    <footer className="bg-gray-900 text-gray-300 py-10 px-4 md:px-8 lg:px-16">
      {/* Footer Top Section */}
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 pb-8">
        {/* Footer Top Left - Logo and Text */}
        <div className="flex flex-col items-center md:items-start gap-4 text-center md:text-left">
          <img src={footer_logo} alt="footer logo" className="h-10 w-auto" />
          <p className="max-w-xs">I am an aspiring Full-Stack Developer</p>
        </div>

        {/* Footer Top Right - Email Input and Subscribe Button */}
        <div className="flex flex-col items-center md:items-end gap-4 w-full md:w-auto">
          <div className="flex items-center bg-gray-800 rounded-md p-2 w-full max-w-sm">
            <img src={user_icon} alt="user icon" className="h-5 w-5 mr-2 text-gray-400" />
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-grow bg-transparent border-none focus:ring-0 focus:outline-none text-gray-200 placeholder-gray-500"
            />
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-md transition-colors duration-300 w-full max-w-sm">
            Subscribe
          </button>
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

