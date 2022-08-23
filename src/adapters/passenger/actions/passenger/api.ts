import passengerClient from "../../../clients/rest/passenger";

export const getAuthenticatedPassenger = () => passengerClient.get("/auth/me");
