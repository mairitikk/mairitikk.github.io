import React, { useState } from 'react';
import drimt from '../../assets/logo2.png';
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from './navigation-menu';
import { Sheet, SheetContent, SheetTrigger } from './sheet';
import { Button } from './button';
import { MenuIcon } from 'lucide-react';

export function Navbar() {
  const [menu, setMenu] = useState("home"); // State to track the active menu item


  // Function to determine the active class for NavigationMenuLink
  const getNavLinkClass = (linkName) => {
    // Combine existing styles with conditional active styles
    return `${navigationMenuTriggerStyle()} text-xl lg:text-2xl relative
            ${menu === linkName ? 'text-blue-500 font-semibold' : 'text-gray-700 hover:text-gray-900'}
            ${menu === linkName ? 'after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-blue-500 after:transition-all after:duration-300 after:ease-in-out' : ''}
    `;
  };

  return (
    <nav className="flex items-center justify-between p-4 border-b">

      <div className="flex items-center">
        <a href="/">
          <img
            src={drimt}
            alt="DriMt Logo"
            className="h-20 w-auto mr-4"
          />
        </a>
      </div>

      <div className="hidden md:flex">
        <NavigationMenu>
          <NavigationMenuList className="flex space-x-4">

            <NavigationMenuItem>
              <NavigationMenuLink
                href="/" // Adjusted to '/' for home
                className={getNavLinkClass("home")} // Use the helper function for classes
                onClick={() => setMenu("home")} // Update state on click
              >
                Home
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                href="/skills" // Corrected href
                className={getNavLinkClass("skills")}
                onClick={() => setMenu("skills")}
              >
                About me
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                href="/projects" // Corrected href
                className={`${getNavLinkClass("projects")} font-chewy`} // Add font-chewy here
                onClick={() => setMenu("projects")}
              >
                Services
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                href="/about" // Corrected href
                className={getNavLinkClass("about")}
                onClick={() => setMenu("about")}
              >
                Portfolio
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                href="/contact" // Added a contact link
                className={getNavLinkClass("contact")}
                onClick={() => setMenu("contact")}
              >
                Contact
              </NavigationMenuLink>
            </NavigationMenuItem>

          </NavigationMenuList>
        </NavigationMenu>
        <Button
          variant="outline"
          className="
            px-10 py-5 rounded-full
            bg-gradient-to-r from-[#EBEFF5] to-[#3A3AF8]
            text-white
            hover:text-[#3A3AF8] hover:from-[#3A3AF8] hover:to-[#EBEFF5] transition-all duration-300
            border-none
            text-[18px]
            cursor-pointer
          "
        >
          Connect with me
        </Button>
      </div>


      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full max-w-xs"> {/* Adjusted max-w for mobile menu */}
            <div className="flex flex-col gap-4 py-6">
              <a href="/" className="mb-4">
                <img
                  src={drimt}
                  alt="DriMt Logo"
                  className="h-16 w-auto mx-auto"
                />
              </a>
              <NavigationMenu className="flex flex-col">
                <NavigationMenuList className="flex flex-col gap-2">
                  <NavigationMenuItem>
                    {/* For mobile, you might choose to apply active styles or not have underlines */}
                    <NavigationMenuLink
                      href="/"
                      className={`${navigationMenuTriggerStyle()} w-full justify-start ${menu === 'home' ? 'text-blue-500 font-semibold' : ''}`}
                      onClick={() => setMenu("home")}
                    >Home</NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink
                      href="/skills"
                      className={`${navigationMenuTriggerStyle()} w-full justify-start ${menu === 'skills' ? 'text-blue-500 font-semibold' : ''}`}
                      onClick={() => setMenu("skills")}
                    >Skills</NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink
                      href="/projects"
                      className={`${navigationMenuTriggerStyle()} w-full justify-start ${menu === 'projects' ? 'text-blue-500 font-semibold' : ''}`}
                      onClick={() => setMenu("projects")}
                    >Projects</NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink
                      href="/about"
                      className={`${navigationMenuTriggerStyle()} w-full justify-start ${menu === 'about' ? 'text-blue-500 font-semibold' : ''}`}
                      onClick={() => setMenu("about")}
                    >About me</NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink
                      href="/contact"
                      className={`${navigationMenuTriggerStyle()} w-full justify-start ${menu === 'contact' ? 'text-blue-500 font-semibold' : ''}`}
                      onClick={() => setMenu("contact")}
                    >Contact</NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}

export default Navbar;