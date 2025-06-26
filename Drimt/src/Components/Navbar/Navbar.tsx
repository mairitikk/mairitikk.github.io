import React, { useState, useEffect } from 'react'; // Import useEffect
import { Link, useLocation, useNavigate } from 'react-router-dom'; // Import Link, useLocation, useNavigate

import drimt from '../../assets/logo2.png';
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from './navigation-menu';
import { Sheet, SheetContent, SheetTrigger } from './sheet';
import { Button } from './button';
import { MenuIcon } from 'lucide-react';

export function Navbar() {
  const [menu, setMenu] = useState("home");
  const location = useLocation(); // Hook to get current location object
  const navigate = useNavigate(); // Hook to navigate programmatically

  // Effect to update 'menu' state when URL hash changes (e.g., after initial load or direct URL access)
  useEffect(() => {
    const path = location.pathname.split('/')[1] || 'home'; // Get first part of path or 'home'
    const hash = location.hash ? location.hash.substring(1) : ''; // Get hash without '#'

    // Prioritize hash for active state if it exists for the current path
    if (hash && [`about`, `services`, `portfolio`, `contact`].includes(hash)) {
      setMenu(hash);
    } else if (path === '') { // For '/' path, set to 'home'
      setMenu('home');
    } else {
      setMenu(path);
    }
  }, [location]); // Re-run when location changes

  // Function to handle navigation and scrolling
  const handleNavLinkClick = (e, path, sectionId) => {
    e.preventDefault(); // Prevent default link behavior

    // Update menu state
    setMenu(sectionId || path.substring(1) || 'home'); // Use sectionId if provided, else path

    // Navigate to the new path (this updates the URL)
    // If navigating to the same page with a different hash, use a full path string
    if (location.pathname === path.replace(/#.*$/, '')) {
      // If already on the page, just scroll
      const targetElement = document.getElementById(sectionId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      } else {
        // Fallback for cases where element might not be immediately available
        // or for routes like /home without a specific section
        navigate(path);
      }
    } else {
      // Navigate to a new page and then scroll (useEffect will handle initial scroll)
      navigate(path);
    }
    // Optionally close the mobile sheet after clicking a link
    // const sheetCloseButton = document.querySelector('[data-state="open"] [data-radix-sheet-content] button');
    // if (sheetCloseButton) sheetCloseButton.click();
  };

  // Function to determine the active class for NavigationMenuLink
  const getNavLinkClass = (linkName) => {
    return `${navigationMenuTriggerStyle()} text-xl lg:text-2xl relative
            ${menu === linkName ? 'text-blue-500 font-semibold' : 'text-gray-700 hover:text-gray-900'}
            ${menu === linkName ? 'after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-blue-500 after:transition-all after:duration-300 after:ease-in-out' : ''}
    `;
  };

  return (
    <nav className="flex items-center justify-between p-4 border-b">
      <div className="flex items-center">
        <Link to="/">
          <img
            src={drimt}
            alt="DriMt Logo"
            className="h-20 w-auto mr-4"
          />
        </Link>
      </div>

      <div className="hidden md:flex">
        <NavigationMenu>
          <NavigationMenuList className="flex space-x-4">

            <NavigationMenuItem>
              <NavigationMenuLink
                asChild // Use asChild to pass props to the Link component
                onClick={(e) => handleNavLinkClick(e, '/', 'home')}
                className={getNavLinkClass("home")}
              >
                <Link to="/">Home</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                onClick={(e) => handleNavLinkClick(e, '/about#about', 'about')}
                className={getNavLinkClass("about")}
              >
                <Link to="/about#about">About me</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                onClick={(e) => handleNavLinkClick(e, '/services#services', 'services')}
                className={`${getNavLinkClass("services")} font-chewy`}
              >
                <Link to="/services#services">Services</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                onClick={(e) => handleNavLinkClick(e, '/portfolio#portfolio', 'portfolio')}
                className={getNavLinkClass("portfolio")}
              >
                <Link to="/portfolio#portfolio">Portfolio</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                onClick={(e) => handleNavLinkClick(e, '/contact#contact', 'contact')}
                className={getNavLinkClass("contact")}
              >
                <Link to="/contact#contact">Contact</Link>
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

      {/* Mobile Menu */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full max-w-xs">
            <div className="flex flex-col gap-4 py-6">
              <Link to="/" onClick={() => setMenu('home')} className="mb-4">
                <img
                  src={drimt}
                  alt="DriMt Logo"
                  className="h-16 w-auto mx-auto"
                />
              </Link>
              <NavigationMenu className="flex flex-col">
                <NavigationMenuList className="flex flex-col gap-2">
                  <NavigationMenuItem>
                    <NavigationMenuLink
                      asChild
                      onClick={(e) => handleNavLinkClick(e, '/', 'home')}
                      className={`${navigationMenuTriggerStyle()} w-full justify-start ${menu === 'home' ? 'text-blue-500 font-semibold' : ''}`}
                    >
                      <Link to="/">Home</Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink
                      asChild
                      onClick={(e) => handleNavLinkClick(e, '/about#about', 'about')}
                      className={`${navigationMenuTriggerStyle()} w-full justify-start ${menu === 'about' ? 'text-blue-500 font-semibold' : ''}`}
                    >
                      <Link to="/about#about">About me</Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink
                      asChild
                      onClick={(e) => handleNavLinkClick(e, '/services#services', 'services')}
                      className={`${navigationMenuTriggerStyle()} w-full justify-start ${menu === 'services' ? 'text-blue-500 font-semibold' : ''}`}
                    >
                      <Link to="/services#services">Services</Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink
                      asChild
                      onClick={(e) => handleNavLinkClick(e, '/portfolio#portfolio', 'portfolio')}
                      className={`${navigationMenuTriggerStyle()} w-full justify-start ${menu === 'portfolio' ? 'text-blue-500 font-semibold' : ''}`}
                    >
                      <Link to="/portfolio#portfolio">Portfolio</Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink
                      asChild
                      onClick={(e) => handleNavLinkClick(e, '/contact#contact', 'contact')}
                      className={`${navigationMenuTriggerStyle()} w-full justify-start ${menu === 'contact' ? 'text-blue-500 font-semibold' : ''}`}
                    >
                      <Link to="/contact#contact">Contact</Link>
                    </NavigationMenuLink>
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