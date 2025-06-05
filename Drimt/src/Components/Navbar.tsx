
import drimt from '../assets/logo2.png'
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from './ui/navigation-menu';



export function Navbar() {
    return (
        <nav className="flex items-center justify-between p-4 border-b">
            {/* Logo Section (left side) */}
            <div className="flex items-center">
                <img
                    src={drimt}
                    alt="DriMt Logo"
                    className="h-20 w-auto mr-4" 
                />
              
            </div>

            
            <NavigationMenu>
                <NavigationMenuList className="flex space-x-4"> 
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
        </nav>
    );
}
export default Navbar