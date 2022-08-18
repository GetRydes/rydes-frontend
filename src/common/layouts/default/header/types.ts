export interface HeaderProps {
   hasMobileOverlayNav?: Boolean;
   navLinks: NavLink[];
}

export interface NavLink {
   name: string;
   path: string;
}
