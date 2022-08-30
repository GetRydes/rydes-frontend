export interface HeaderProps {
   hasMobileOverlayNav?: Boolean;
   navLinks: NavLink[];
   setShowProfileSelector: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface NavLink {
   name: string;
   path: string;
}
