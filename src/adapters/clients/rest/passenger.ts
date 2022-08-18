import config from "../../../utils/config";
import { PASSENGER_ACCESS_TOKEN } from "../../../utils/constants";
import TokenService from "../../../utils/token";
import createAxiosClient from "./api";

const passengerClient = createAxiosClient(config.AURORA_REST_URL);

passengerClient.interceptors.request.use(
   (config) => {
      const token = TokenService.getLocalAccessToken();
      if (token) {
         config.headers = config.headers
            ? {
                 ...config.headers,
                 Authorization: `Bearer ${token}`,
              }
            : {};
      }
      return config;
   },
   (error) => {
      return Promise.reject(error);
   },
);

passengerClient.interceptors.response.use(
   (res) => {
      return res;
   },
   async (err) => {
      const originalConfig = err.config;
      if (originalConfig.url !== "/api/v1/auth/login" && err.response) {
         // Access Token was expired
         if (err.response.status === 401 && !originalConfig._retry) {
            originalConfig._retry = true;
            try {
               const rs = await passengerClient.post("/api/v1/auth/token/refresh", {
                  refreshToken: TokenService.getLocalRefreshToken(),
               });
               const {
                  data: { accessToken },
               } = rs.data;
               TokenService.updateLocalToken(PASSENGER_ACCESS_TOKEN, accessToken);
               return passengerClient(originalConfig);
            } catch (_error) {
               return Promise.reject(_error);
            }
         }
      }
      return Promise.reject(err);
   },
);

export default passengerClient;
