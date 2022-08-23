import Cookies from "universal-cookie";
import { ApolloClient, from, InMemoryCache, NormalizedCacheObject } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { createUploadLink } from "apollo-upload-client";
import config from "../../../utils/config";

export const createApolloClient = (url?: string): ApolloClient<NormalizedCacheObject> => {
   const httpLink = createUploadLink({
      uri: url ?? config.COLOSSUS_GRAPHQL_URL,
   });

   const authLink = setContext((_, { headers }) => {
      const token = new Cookies().get("token");
      return {
         headers: {
            ...headers,
            authorization: `Bearer ${token ?? ""}`,
         },
      };
   });

   const client = new ApolloClient({
      link: from([authLink, httpLink]),
      cache: new InMemoryCache(),
      connectToDevTools: true,
   });
   return client;
};

export const driverClient = createApolloClient(config.COLOSSUS_GRAPHQL_URL);

export const paymentClient = createApolloClient(config.CANARY_GRAPHQL_URL);
