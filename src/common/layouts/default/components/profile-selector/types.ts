export interface ProfileSelectorProps {
   showProfileSelector: boolean;
   setShowProfileSelector: React.Dispatch<React.SetStateAction<{ name: string; visible: boolean }>>;
   options: ProfileSelectorOption[];
}

export interface ProfileSelectorOption {
   text: string;
   route: string;
}
