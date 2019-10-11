import io from "socket.io-client";

// Create Socket
const socket = io();

function userReducer(state, action) {
  switch (action.type) {
    case "LOGIN":
      state.loggedIn = action.payload;
      return { ...state };
    default:
      return { ...state };
  }
}

function dataReducer(state, action) {
  switch (action.type) {
    case "LAST_REQUEST_TIME":
      state.time = action.payload;
      return { ...state };
    case "SOCKET_MESG":
      state.socketMesg = action.payload;
      return { ...state };
    default:
      return { ...state };
  }
}

export default function mainReducer ({ data, user, socket }, action) {
  // middleware goes here, i.e calling analytics service, etc.
  console.log(action)
  return {
    data: dataReducer(data, action),
    user: userReducer(user, action),
    socket: socket,
  };
}

export { socket }