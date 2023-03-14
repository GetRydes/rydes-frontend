import { Link } from "react-router-dom";
import { Button } from "../../../elements";
import { RegisterForm } from "./form-container";

export const Complete = () => {
   return (
      <RegisterForm.ItemContainer onGoBack={() => {}} heading="">
         <>You are all set</>
         <Link to="/passenger/ride">
         <Button>
            Book your first ride
         </Button>
         </Link>
      </RegisterForm.ItemContainer>
   );
};
