import React, { createContext, useContext, useReducer } from "react";
import MainReducer, { socket } from "../state/MainReducer"
const StateContext = createContext();

const InitialState = {
  socket: socket
};

// COMPONENT
export const SocketStateProvider = ({ children }) => (
  <StateContext.Provider value={useReducer(MainReducer, InitialState)}>
    {children}
  </StateContext.Provider>
);

export const useSocketValue = () => useContext(StateContext);

export default SocketStateProvider;