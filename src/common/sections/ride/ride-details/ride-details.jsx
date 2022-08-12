import React, { useState } from "react";
import { Input } from "../../../elements";

const RideDetails = () => {
   const [formState, setFormState] = useState(0);

   const texts = ["Where can we pick you up?", "Where to?"];
   return (
      <div className="ride-details">
         <div className="ride-details--text">{texts[formState]}</div>
         <div className="input-fields">
            <Input onFocus={() => setFormState(0)} placeholder="Enter pickup location" />
            <Input
               classname="destination"
               onFocus={() => setFormState(1)}
               placeholder="Enter destination"
            />
            <div className="input-fields--icons"></div>
         </div>
      </div>
   );
};

export default RideDetails;
