import React from "react";
import clx from "classnames";
import { IconType } from "react-icons";
import { AiFillCar } from "react-icons/ai";
import { GiNetworkBars } from "react-icons/gi";
import { MdRestaurant } from "react-icons/md";
import styles from "./TabHeader.module.scss";

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
      <div className={styles["tabslist"]} role="tablist">
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
         className={clx(styles["tab"], {
            [styles.active]: isActive,
         })}
         onClick={onClick}
      >
         <div className={styles["tab__content--container"]}>
            <div>
               <div className={styles["tab__content--container__icon"]}>
                  <Icon className={styles.icon} />
               </div>
               <span className={styles["tab__content--container__text"]}>{title}</span>
            </div>
         </div>
      </div>
   );
};

export default TabHeader;
