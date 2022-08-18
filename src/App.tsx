import { ApolloProvider } from "@apollo/client";
import { driverClient } from "./adapters/clients/graphql/client";
import Router from "./router";
import "./App.scss";
import { AppProvider } from "./store";

const App = () => {
   return (
      <ApolloProvider client={driverClient}>
         <AppProvider>
            <Router />
         </AppProvider>
      </ApolloProvider>
   );
};

export default App;
