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

function dateReducer(state, action) {
  switch (action.type) {
    case "LAST_REQUEST_TIME":
      state.time = action.payload;
      return { ...state };
    default:
      return { ...state };
  }
}

function dataReducer(state, action) {
  switch (action.type) {
    case "DATA_XXXXX":
      state.dataXXX = action.payload;
      return { ...state };
    default:
      return { ...state };
  }
}

function socketDataReducer(state, action) {
  switch (action.type) {
    case "SOCKET_MESG":
      state.socketMesg = action.payload;
      return { ...state };
    default:
      return { ...state };
  }
}

export default function mainReducer ({ date, data, user, socketData }, action) {
  // middleware goes here, i.e calling analytics service, etc.
  console.log(action)
  return {
    date: dateReducer(date, action),
    data: dataReducer(data, action),
    user: userReducer(user, action),
    socketData: socketDataReducer(socketData, action),
    socket: socket,
  };
}

export {socket}