import { ActionProps } from "./types";

export const actionSetLoading = (payload: boolean): ActionProps => ({
   type: "SET_LOADING",
   payload,
});
