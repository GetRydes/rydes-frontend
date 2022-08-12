import React from "react";
import { IconType } from "react-icons";
import { AiFillCar } from "react-icons/ai";
import { GiNetworkBars } from "react-icons/gi";
import { MdRestaurant } from "react-icons/md";

interface TabHeaderItemProps {
   Icon: IconType;
   title: string;
}

const TabHeader = () => {
   const tabHeaders = [
      { title: "Ride", icon: AiFillCar },
      { title: "Drive", icon: GiNetworkBars },
      { title: "Eat", icon: MdRestaurant },
   ];
   return (
      <div className="hero__inner-content--container__tabslist" role="tablist">
         {tabHeaders.map(({ icon, title }, index) => (
            <TabHeaderItem Icon={icon} title={title} key={index} />
         ))}
      </div>
   );
};

const TabHeaderItem: React.FC<TabHeaderItemProps> = ({ Icon, title }) => {
   return (
      <div
         role="tab"
         tabIndex={0}
         id="0"
         aria-selected={false}
         className="hero__inner-content--container__tab"
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
