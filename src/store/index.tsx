import React, { createContext, useReducer, useMemo, ReactNode, Dispatch, Reducer } from "react";
import { ActionProps } from "./actions/types";
import { StateProps } from "./models/types";
import stateReducer from "./reducers";

export const initialStoreState = { me: null, form: {}, loading: false };

export const AppStateContext = createContext<[StateProps, Dispatch<ActionProps>]>([
   initialStoreState,
   () => {},
]);

export const AppProvider = ({ children }: { children: ReactNode }) => {
   const [state, dispatch] = useReducer<Reducer<StateProps, ActionProps>>(
      stateReducer,
      initialStoreState,
   );

   const store = useMemo((): [StateProps, Dispatch<ActionProps>] => [state, dispatch], [state]);

   return <AppStateContext.Provider value={store}>{children}</AppStateContext.Provider>;
};
