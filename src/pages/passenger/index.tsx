import { Dispatch, useContext, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useSetCurrentUser } from "../../adapters/passenger/actions";
import { Spinner } from "../../common/components";
import DefaultLayout from "../../common/layouts/default";
import { AppStateContext } from "../../store";
import { ActionProps } from "../../store/actions/types";
import { StateProps } from "../../store/models/types";
import { passengerRoutes } from "./routes";

const PassengerPages = () => {
   const [{ me, loading }] = useContext<[StateProps, Dispatch<ActionProps>]>(AppStateContext);
   const setCurrentUser = useSetCurrentUser();

   useEffect(() => {
      if (!me) setCurrentUser();
      // eslint-disable-next-line
   }, []);

   return (
      <>
         {loading ? (
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
            <Routes>
               {passengerRoutes.map(({ Component, path }, index) => {
                  return <Route key={index} path={path} element={<Component />} />;
               })}
            </Routes>
         )}
      </>
   );
};

export default PassengerPages;
