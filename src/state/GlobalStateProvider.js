import React, { createContext, useContext, useReducer } from "react";
import MainReducer from "../state/MainReducer";
const StateContext = createContext();

const InitialState = {
  date: {},
  data: {}
};
// COMPONENT
export const GlobalStateProvider = ({ children }) => (
  <StateContext.Provider value={useReducer(MainReducer, InitialState)}>
    {children}
  </StateContext.Provider>
);

export const useGlobalStateValue = () => useContext(StateContext);

export default GlobalStateProvider;