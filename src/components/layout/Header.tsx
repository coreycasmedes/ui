import { FunctionComponent } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";
import { MdOutlineDarkMode } from "react-icons/md";

export const Header: FunctionComponent = () => {
  return (
    // 1. Parent: relative for positioning, justify-center to center the nav
    <div className="relative flex w-full items-center justify-center py-4">
      {/* 2. Navigation: Stays centered naturally */}
      <NavigationMenu>
        <NavigationMenuList className="gap-8">
          <NavigationMenuItem>
            <NavigationMenuLink href="/home" asChild>
              <button className="shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-transparent border border-white text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
                Home
              </button>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="/travel" asChild>
              <button className="shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-transparent border not-odd:border-white text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
                Travel
              </button>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="/blog" asChild>
              <button className="shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-transparent border border-white text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
                Blog
              </button>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      {/* 3. Dark Mode Button: Positioned absolutely to the right */}
      <button className="absolute right-4 shadow-[0_0_0_3px_#000000_inset] px-2 py-2 bg-transparent border border-white text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400 flex items-center justify-center gap-2">
        <MdOutlineDarkMode color="white" size={20} />
      </button>
    </div>
  );
};
