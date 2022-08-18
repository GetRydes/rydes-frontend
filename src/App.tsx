import { ApolloProvider } from "@apollo/client";
import { driverClient } from "./adapters/graphql/client";
import Router from "./router";
import "./App.scss";

const App = () => {
   return (
      <ApolloProvider client={driverClient}>
         <Router />
      </ApolloProvider>
   );
};

export default App;
