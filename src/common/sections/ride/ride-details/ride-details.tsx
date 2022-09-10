import { useState } from "react";
import { Input } from "../../../elements";
import "./ride-details.scss";

const RideDetails = () => {
   const [formState, setFormState] = useState(0);

   const texts = ["Where can we pick you up?", "Where to?"];
   return (
      <div className="ride-details">
         <div className="ride-details--top">
            <div className="ride-details--drag__icon"></div>
            <div className="ride-details--text">{texts[formState]}</div>
         </div>
         <div className="ride-details--middle">
            <div className="input-fields">
               <Input onFocus={() => setFormState(0)} placeholder="Enter pickup location" />
               <Input
                  className="destination"
                  onFocus={() => setFormState(1)}
                  placeholder="Enter destination"
               />
               <div className="input-fields--icons"></div>
            </div>
         </div>
      </div>
   );
};

export default RideDetails;
