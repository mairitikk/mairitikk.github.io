import React from 'react';
import drimt from '../assets/logo2.png';
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from './ui/navigation-menu';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'; // Import Sheet components
import { Button } from './ui/button'; // Import Button component
import { MenuIcon } from 'lucide-react'; // Import a hamburger icon

export function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 border-b">
      {/* Logo Section (always visible) */}
      <div className="flex items-center">
        <a href="/"> {/* Wrap logo in a link to homepage */}
          <img
            src={drimt}
            alt="DriMt Logo"
            className="h-20 w-auto mr-4"
          />
        </a>
      </div>

      {/* Desktop Navigation (visible on md and larger screens) */}
      <div className="hidden md:flex"> {/* Hide on small, show on medium+ */}
        <NavigationMenu>
          <NavigationMenuList className="flex space-x-4">
            <NavigationMenuItem>
              <NavigationMenuLink href="/home" className={`${navigationMenuTriggerStyle()} text-xl`}>
    Home</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/home" className={`${navigationMenuTriggerStyle()} text-xl`}>
    Skills
</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/home" className={`${navigationMenuTriggerStyle()} text-xl`}>
    Projects
</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/home" className={`${navigationMenuTriggerStyle()} text-xl`}>
    About me
</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/home" className={`${navigationMenuTriggerStyle()} text-xl`}>
    Contact
</NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Mobile Navigation (visible on small screens) */}
      <div className="md:hidden"> {/* Show on small, hide on medium+ */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full max-w-full sm:max-w-full">
            <div className="flex flex-col gap-4 py-6">
              {/* Optional: Re-add logo at the top of the mobile menu */}
              <a href="/" className="mb-4">
                <img
                  src={drimt}
                  alt="DriMt Logo"
                  className="h-16 w-auto mx-auto" // Center logo in mobile menu
                />
              </a>
              <NavigationMenu className="flex flex-col"> {/* Adjust menu for vertical stacking */}
                <NavigationMenuList className="flex flex-col gap-2"> {/* Stack items vertically */}
                  <NavigationMenuItem>
                    <NavigationMenuLink href="/home" className={navigationMenuTriggerStyle()}>Home</NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink href="/skills" className={navigationMenuTriggerStyle()}>Skills</NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink href="/projects" className={navigationMenuTriggerStyle()}>Projects</NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink href="/about" className={navigationMenuTriggerStyle()}>About me</NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink href="/contact" className={navigationMenuTriggerStyle()}>Contact</NavigationMenuLink>
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