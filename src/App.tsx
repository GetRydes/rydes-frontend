import { ApolloProvider } from "@apollo/client";
import { driverClient } from "./adapters/clients/graphql/client";
import Router from "./router";
import "./App.scss";
import { AppProvider } from "./store";
import { ToastContainer } from "react-toastify";

const App = () => {
   return (
      <ApolloProvider client={driverClient}>
         <AppProvider>
            <Router />
            <ToastContainer position="bottom-right" theme="dark" />
         </AppProvider>
      </ApolloProvider>
   );
};

export default App;
