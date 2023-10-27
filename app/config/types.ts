export interface SideBarItemType {
  id: number;
  name: string;
  path: string;
  subpages?: {
    name: string;
    path: string;
  }[];
  icon: JSX.Element;
}
