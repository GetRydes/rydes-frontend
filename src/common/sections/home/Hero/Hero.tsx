import { useState } from "react";
import { Link } from "react-router-dom";
import { PASSENGER_ROUTE_PREFIX } from "../../../../utils/constants";
import { Input } from "../../../elements";
import "./Hero.scss";
import TabHeader from "./TabHeader";

const Hero = () => {
   const [activeTab, setActiveTab] = useState(0);

   return (
      <section className="hero">
         <div className="hero__inner">
            <div className="hero__inner-bg">
               <div className="hero__inner-bg--inner">
                  <img
                     src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_1903,h_644/v1613521692/assets/d9/ce6c00-32b0-4b93-9f0d-6f927d93da08/original/Rider_Home_bg_desktop2x.png"
                     alt="Rider"
                  />
               </div>
            </div>
            <div className="hero__inner-content">
               <div className="hero__inner-content--container">
                  <div style={{ width: "100%" }}>
                     <div className="hero__inner-content--container__tabs">
                        <TabHeader activeTab={activeTab} setActiveTab={setActiveTab} />
                     </div>
                     <div className="hero__inner-content--container__tabs--content">
                        <div className="tab__item">
                           <div className="tab__item--container">
                              <div className="tab__item--container__grid">
                                 <div className="tab__item--container__inner">
                                    <div className="tab__item--container__content">
                                       <div className="title">
                                          <h2>Request a ride now</h2>
                                       </div>
                                       <div className="location__fields">
                                          <Input placeholder="Enter pickup location" />
                                          <Input
                                             classname="destination"
                                             placeholder="Enter destination"
                                          />
                                          <div className="location__fields--icons"></div>
                                       </div>
                                       <Link to={`${PASSENGER_ROUTE_PREFIX}/ride`}>
                                          <div className="action__buttons">
                                             <div className="action__buttons--request">
                                                <div>Request now</div>
                                             </div>
                                          </div>
                                       </Link>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Hero;
