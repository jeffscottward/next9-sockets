import React, { createContext, useContext, useReducer } from "react";
import MainReducer from "../state/MainReducer";
export const StateContext = createContext();

const GlobalInitialState = {
  date: {},
  data: {}
};

export const GlobalStateProvider = ({ children }) => (
  <StateContext.Provider value={useReducer(MainReducer, GlobalInitialState)}>
    {children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);

export default GlobalStateProvider;