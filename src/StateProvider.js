import React, {
  createContext,
  useContext,
  useReducer,
} from "react";

//Data Layer
export const StateContext = createContext();

//Build a provider
export const StartProvider = ({
  reducer,
  initialState,
  children,
}) => {
  return (
    <StateContext.Provider
      value={useReducer(reducer, initialState)}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateValue = () => useContext(StateContext);
