import React, { useEffect } from "react"
import getData from "../utils/getData";
import { useGlobalStateValue } from "../state/GlobalStateProvider";
import SocketProvider, { useSocketValue } from "../state/SocketProvider"

const SocketTest = () => {
  const [{socket}] = useSocketValue();
  const [{data}, dispatch] = useGlobalStateValue();

  useEffect(() => {
    socket.on("connect", socket => {
      console.log("socket connection CLIENT");
    });

    socket.on("SOCKET_MESG", msg => {
      console.log("MESG FROM SERVER");
      if (msg === "PONG") {
        console.log("HEARD A PONG");
        dispatch({
          type: "SOCKET_MESG",
          payload: "PONG"
        });
      }
    });
  }, [])

  const emitPing = async () => {
    socket.emit("SOCKET_MESG", "PING");
    dispatch({
      type: "SOCKET_MESG",
      payload: "PING"
    });
  };

  return (
    <div id="SocketTest">
      <button onClick={emitPing}>PING</button>
    </div>
  );
};

const TableSockets = props => {
  const [{ data }] = useGlobalStateValue();
  return (
    <SocketProvider>
      <div>
        <h1>TableSockets.js</h1>
        <div>Last Socket Message: {data.socketMesg}</div>
        <SocketTest />
        <style jsx>{`h1 {color: green;}`}</style>
      </div>
    </SocketProvider>
  );
}

export default TableSockets
