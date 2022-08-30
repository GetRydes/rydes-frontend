import { useEffect } from "react";
import { useSetCurrentUser } from "../../adapters/passenger/actions";
import { useAppContext } from "../../store";
import { Spinner } from "../components";
import DefaultLayout from "../layouts/default";

const PassengerProtectedRoute: React.FC = ({ children }) => {
   const [{ me, loading }] = useAppContext();
   const setCurrentUser = useSetCurrentUser();

   useEffect(() => {
      if (!me) setCurrentUser();
      // eslint-disable-next-line
   }, []);

   return loading ? (
      <DefaultLayout>
         <div
            style={{
               height: "calc(100vh - 111px)",
               display: "flex",
               alignItems: "center",
               justifyContent: "center",
               backgroundColor: "#f5f5f5",
            }}
         >
            <Spinner size={40} color="#000" />
         </div>
      </DefaultLayout>
   ) : (
      <>{children}</>
   );
};

export default PassengerProtectedRoute;
