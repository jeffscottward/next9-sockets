import React, { useEffect } from "react";
import { get } from "axios";
import io from "socket.io-client";
const socket = io();

import { useStateValue } from "../state/state";

      



const TableSockets = props => {
  const [{ date }, dispatch] = useStateValue();

  

  useEffect(() => {    
    console.log("useEFFECT trigger");
        
    async function getData(url, params) {
      let data = await get(url);
      data.data.time && (
        dispatch({
          type: "LAST_REQUEST_TIME",
          payload: data.data.time
        })
      )
      data.data.test &&
        dispatch({
          type: "MESSAGE_REQUEST",
          payload: data.data.test
        });
    }
    // setInterval(() => {
      getData("/api/time");  
      getData("/api/message");
    // }, 1000);
    
      socket.open()
      socket.on("connection", socket => {
        console.log("socket connection CLIENT");
      });

      socket.on("pong message", msg => {
        console.log("PONG FROM SERVER");
      });

  }, []);



  const emitPing = () => {
    console.log("PING GOING TO SERVER");
    socket.emit("ping message", "PING");
  }

  return (
    <div>
      <h1>TableSockets.js</h1>
      Last Request Time: {date && date.time}
      <button onClick={emitPing}>PING</button>
      <style jsx>{`
        h1 {
          color: green;
        }
      `}</style>
    </div>
  );
};

export default TableSockets;
