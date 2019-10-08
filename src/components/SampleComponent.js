import React, { useEffect } from "react";
import Moment from "moment";
import axios from "axios";

import { useStateValue } from "../state/state";

const SampleComponent = props => {
  const [{ date }, dispatch] = useStateValue();

  useEffect(() => {
    const currentLoadTime = Moment().format("MMMM Do YYYY, h:mm a")
    async function getData(url) {
      const posts = await axios.get(url);
      console.log(posts.data);
      return posts;
    }
    getData("'https://jsonplaceholder.typicode.com/comments");
    dispatch({
      type: "SET_DATE_LOADED",
      payload: {
        loadTime: currentLoadTime
      }
    });
  }, []);

  return (
    <div>
      <h1>SampleComponent.js</h1>
      Page load time: {date && date.loadTime}
      <style jsx>{`
        h1 {
          color: green;
        }
      `}</style>
    </div>
  );
};

export default SampleComponent;
