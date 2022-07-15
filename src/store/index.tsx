import React, {
  createContext,
  useReducer,
  useMemo,
  ReactNode,
  Dispatch,
  Reducer,
} from "react";
import { ActionProps } from "./actions/types";
import { StateProps } from "./models/types";
import stateReducer from "./reducers";

export const AppStateContext = createContext<
  null | [StateProps, Dispatch<ActionProps>]
>(null);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer<Reducer<StateProps, ActionProps>>(
    stateReducer,
    {
      me: null,
      form: {},
      blog: null,
      restaurant: null,
      loading: false,
    }
  );

  const store = useMemo(
    (): [StateProps, Dispatch<ActionProps>] => [state, dispatch],
    [state]
  );

  return (
    <AppStateContext.Provider value={store}>
      {children}
    </AppStateContext.Provider>
  );
};
