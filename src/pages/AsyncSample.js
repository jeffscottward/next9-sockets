import React, {useState} from "react";
import Layout from "../components/Layout";
import axios from "axios";

const Settings = (props) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  
  const getData = async () => {
    console.log('getData')
    let myURL = "'https://jsonplaceholder.typicode.com/posts";
    
    let myAsyncFunc = async url => {
      const payload = await window.fetch(url);
      const payloadJSON = await payload.json();
      const dataArraySorted = 
        payloadJSON.sort((a, b) => 
          a.userId - b.userId
        )
      const reversedArray = dataArraySorted.reverse();
      console.log({ reversedArray });
      // Simulated network delay
      // It is very fast without this :)
      setTimeout(()=>{
        console.log("setTimeout");
        setData(reversedArray);
        setLoading(false);
      }, 2000);
    };
    myAsyncFunc(myURL);
  };

  const handleClick = () => {
    console.log("handleCLick");
    setData(null);
    setLoading(true);
    getData();
  };

  // console.log(props.posts)
  return (
    <div id="Settings">
      <Layout>
        {loading && (
          <div className="loading">
            <b>Loading</b>
          </div>
        )}
        <button onClick={handleClick}>Get More Data</button>
        {data &&
          data.map((item, index) =>
            <div key={index}>{item.body}</div>
          )}
      </Layout>
      <style>{`
        .loading {
          animation: pulse .5s linear infinite;
        }
        @keyframes pulse { 
          from { background: white; } 
          to { background: red; }
        }
      `}</style>
    </div>
  );
}

Settings.getInitialProps = async function() {
  // const payload = await window.fetch(url);
  // const payloadJSON = await payload.json();
  const posts = await axios.get("'https://jsonplaceholder.typicode.com/posts");
  const data = await posts.data;
  console.log('getInitalProps')
  console.log({data});
  return {
    posts: data
  };
};

export default Settings;
