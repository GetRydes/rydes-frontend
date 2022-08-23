import { RootActionProps } from "../reducers/root/types";

export const actionSetLoading = (payload: boolean): RootActionProps => ({
   type: "SET_LOADING",
   payload,
});
