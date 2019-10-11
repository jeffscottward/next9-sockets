import React, { useEffect } from "react"
import getData from "../utils/getData";
// import { useStateValue } from "../state/StateProvider";
import SocketProvider, { useSocketValue, socketDispatch } from "../state/SocketProvider"

const SocketTest = () => {
  const [{socket, socketData}, dispatch] = useSocketValue();

  useEffect(() => {
    socket.on("connect", socket => {
      console.log("socket connection CLIENT");
    });

    socket.on("SOCKET_MESG", msg => {
      console.log("MESG FROM SERVER");
      if (msg === "PONG") {
        console.log("HEARD A PONG");
      }
    });
  }, [])

  const emitPing = async () => {
    socketDispatch({
      socketIO: socket,
      dispatch: dispatch,
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
  // const [{ date }, dispatch] = useStateValue()

  // useEffect(() => {
  //   async function getTime () {
  //     let data = await getData("/api/time");  
  //     data.time &&
  //       dispatch({
  //         type: "LAST_REQUEST_TIME",
  //         payload: data.time
  //       });
  //   }
  //   getTime()
  // }, [])

  return (
    <SocketProvider>
      <div>
        <h1>TableSockets.js</h1>
        {/* <div>Last Request Time: {date && date.time}</div> */}
        <SocketTest />
        <style jsx>{`h1 {color: green;}`}</style>
      </div>
    </SocketProvider>
  );
}

export default TableSockets
