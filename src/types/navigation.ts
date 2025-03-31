import { ReactElement } from "react";

export interface IMenuItems {
  id: number;
  title: string;
  icon: ReactElement;
  url: string;
}
export interface INavigation {
  menuItems: IMenuItems[];
}
