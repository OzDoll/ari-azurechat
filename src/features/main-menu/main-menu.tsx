import { MenuTrayToggle } from "@/features/main-menu/menu-tray-toggle";
import {
  Menu,
  MenuBar,
  MenuItem,
  MenuItemContainer,
  menuIconProps,
} from "@/ui/menu";
import {
  Book,
  Home,
  MessageCircle,
  Boxes,
  Sheet,
  Bot,
  AreaChart,
  Origami,
  Album,
} from "lucide-react";
import { getCurrentUser } from "../auth-page/helpers";
import { MenuLink } from "./menu-link";
import { UserProfile } from "./user-profile";

export const MainMenu = async () => {
  const user = await getCurrentUser();

  return (
    <Menu>
      <MenuBar>
        <MenuItemContainer>
          <MenuItem tooltip="Home" asChild>
            <MenuLink href="/chat" ariaLabel="Go to the Home page">
              <Home {...menuIconProps} />
            </MenuLink>
          </MenuItem>
          <MenuTrayToggle />
        </MenuItemContainer>
        <MenuItemContainer>
          <MenuItem tooltip="Chat">
            <MenuLink href="/chat" ariaLabel="Go to the Chat page">
              <MessageCircle {...menuIconProps} />
            </MenuLink>
          </MenuItem>
          <MenuItem tooltip="prompts">
            <MenuLink href="/prompt" ariaLabel="Go to the Prompt Library configuration page">
              <Book {...menuIconProps} />
            </MenuLink>
          </MenuItem>
          <MenuItem tooltip="Lida">
            <MenuLink href="/lida" ariaLabel="Go to the Lida visualization page">
                 <AreaChart {...menuIconProps} />
               </MenuLink>
            </MenuItem>
          <MenuItem tooltip="Taskweaver">
           <MenuLink href="/taskweaver" ariaLabel="Go to Taskweaver planner page">
                 <Origami {...menuIconProps} />
               </MenuLink>
          </MenuItem>
          <MenuItem tooltip="About">
            <MenuLink href="/about" ariaLabel="Go to the About page">
                 <Album {...menuIconProps} />
               </MenuLink>
          </MenuItem>  
          {user.isAdmin && (
             <>
             <MenuItem tooltip="Persona">
               <MenuLink href="/persona" ariaLabel="Go to the Persona configuration page">
                 <Bot {...menuIconProps} />
               </MenuLink>
             </MenuItem>
             <MenuItem tooltip="Extensions">
               <MenuLink href="/extensions" ariaLabel="Go to the Extensions configuration page">
                 <Boxes {...menuIconProps} />
               </MenuLink>
             </MenuItem>
             <MenuItem tooltip="Reporting">
               <MenuLink href="/reporting" ariaLabel="Go to the Admin reporting">
                 <Sheet {...menuIconProps} />
               </MenuLink>
             </MenuItem>
           </>
          )}
        </MenuItemContainer>
        <MenuItemContainer>
          <MenuItem tooltip="Profile">
            <UserProfile />
          </MenuItem>
        </MenuItemContainer>
      </MenuBar>
    </Menu>
  );
};
