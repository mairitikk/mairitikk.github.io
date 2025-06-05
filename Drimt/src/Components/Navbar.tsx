import {

  
  NavigationMenuItem,
  NavigationMenuLink,
  
  
} from "../Components/ui/navigation-menu"
import { Link } from "lucide-react"



export function Navbar() {
    return (
         <NavigationMenuItem>
      <NavigationMenuLink asChild>
        <Link href="/docs">Documentation</Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
   
  )
}
export default Navbar