import axios from "axios";
import config from "../../../utils/config";
import TokenService from "../../../utils/token";
import { CreateApolloClient } from "./types";

const createAxiosClient: CreateApolloClient = (url, options) => {
   const token = TokenService.getLocalAccessToken(options && options.isPassenger);

   const client = axios.create({
      baseURL: url ?? config.AURORA_REST_URL,
      headers: {
         "Content-Type": "application/json",
         Authorization: `Bearer ${token ?? ""}`,
      },
   });

   return client;
};

export default createAxiosClient;
