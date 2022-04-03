import { ReactChild, ReactFragment, ReactPortal, ReactElement } from "react";

export interface menuOption {
  name: string;
  active: boolean;
  icon: ReactElement;
  link: string;
}

export interface menuOptions {
  name: string;
  active: boolean;
  icon: ReactElement;
  link: string;
  subMenu?: menuOption[];
}
export interface DashboardLayoutProps {
  children:
    | boolean
    | ReactChild
    | ReactFragment
    | ReactPortal
    | null
    | undefined;
}

export interface SidebarProps {
  intialMenuOptions: menuOptions[];
  isMd: boolean;
  setDrawerOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface TopNavProps {
  isMd: boolean;
  setDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
