import React, { useEffect } from "react";
import { useStateValue } from "../state/GlobalStateProvider";
import getData from "../utils/getData"

const SampleComponent = props => {
  const [{ data }, dispatch] = useStateValue();

  useEffect(() => {
    async function getTime () {
      let data = await getData("/api/time");  
      data.time &&
        dispatch({
          type: "LAST_REQUEST_TIME",
          payload: data.time
        });
    }
    getTime();
    setInterval(() => {
      getTime();  
    }, 3000);
  }, [])

  return (
    <div>
      <h1>SampleComponent.js</h1>
      Page load time: {data && data.time}
      <style jsx>{`
        h1 {
          color: red;
        }
      `}</style>
    </div>
  );
};

export default SampleComponent;
