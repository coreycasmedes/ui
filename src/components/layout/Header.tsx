import { FunctionComponent } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";

import logo from "../../assets/logo.png";
import logob from "../../logo.png";

export const Header = () => {
  return (
    <div className="flex items-center justify-between w-full pt-4 pb-4">
      <div className="pt-2 pl-6 w-28">
        <img className="h-auto" src={logo} />
      </div>

      <div className="flex-grow flex justify-center">
        <NavigationMenu>
          <NavigationMenuList className="gap-8">
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/home"
                className={navigationMenuTriggerStyle()}
              >
                Home
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/travel"
                className={navigationMenuTriggerStyle()}
              >
                Travel
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/blog"
                className={navigationMenuTriggerStyle()}
              >
                Blog
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div className="w-28"></div>
    </div>
  );
};
