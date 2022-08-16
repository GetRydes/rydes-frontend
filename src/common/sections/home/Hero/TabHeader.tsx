import React from "react";
import { IconType } from "react-icons";
import { AiFillCar } from "react-icons/ai";
import { GiNetworkBars } from "react-icons/gi";
import { MdRestaurant } from "react-icons/md";

interface TabHeaderItemProps {
   Icon: IconType;
   title: string;
   index: number;
   onClick: () => void;
   isActive: boolean;
}

interface TabHeaderProps {
   activeTab: number;
   setActiveTab: React.Dispatch<React.SetStateAction<number>>;
}

const TabHeader: React.FC<TabHeaderProps> = ({ activeTab, setActiveTab }) => {
   const tabHeaders = [
      { title: "Ride", icon: AiFillCar },
      { title: "Drive", icon: GiNetworkBars },
      { title: "Eat", icon: MdRestaurant },
   ];
   return (
      <div className="hero__inner-content--container__tabslist" role="tablist">
         {tabHeaders.map(({ icon, title }, index) => (
            <TabHeaderItem
               Icon={icon}
               title={title}
               key={index}
               index={index}
               onClick={() => setActiveTab(index)}
               isActive={activeTab === index}
            />
         ))}
      </div>
   );
};

const TabHeaderItem: React.FC<TabHeaderItemProps> = ({ Icon, title, index, onClick, isActive }) => {
   return (
      <div
         role="tab"
         tabIndex={index}
         id="0"
         aria-selected={false}
         className={`hero__inner-content--container__tab${isActive ? " active" : ""}`}
         onClick={onClick}
      >
         <div className="tab__content--container">
            <div>
               <div className="tab__content--container__icon">
                  <Icon className="icon" />
               </div>
               <span className="tab__content--container__text">{title}</span>
            </div>
         </div>
      </div>
   );
};

export default TabHeader;
