import { AxiosInstance } from "axios";

export type CreateApolloClient = (
   url?: string,
   options?: CreateApolloClientOptions,
) => AxiosInstance;

export interface CreateApolloClientOptions {
   tokenCookieKey?: string;
   isPassenger?: boolean;
}
