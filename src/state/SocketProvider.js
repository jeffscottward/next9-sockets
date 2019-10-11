import React, { createContext, useContext, useReducer } from "react";
import MainReducer, { socket } from "../state/MainReducer"

const InitialState = {
  socket: socket,
  socketData: {}
};

// COMPONENT
const StateContext = createContext();
export const SocketStateProvider = ({ children }) => (
  <StateContext.Provider
    value={useReducer(MainReducer, InitialState)}>
    {children}
  </StateContext.Provider>
);

// FUNCTION
export const useSocketValue = () => useContext(StateContext);

export function socketDispatch(obj) {
  const { socketIO, dispatch, type, payload } = obj;
  socketIO.emit(type, payload);
  dispatch({ 
    type: type,
    payload: payload
  });
};

export default SocketStateProvider;