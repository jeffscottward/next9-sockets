import React from "react";
import Global from "../constants/Global";
const { css } = Global;

const Main = (props) => {
  return (
    <main>
      {props.children}
      <style jsx>{`
        main {
          background: white;
          padding: 2rem;
          margin: auto;
          max-width: ${css.sizes.pageMaxWidth};
          min-width: ${css.sizes.pageMinWidth};
          min-height: 100vh;
          width: 100vw;
        }
      `}</style>
    </main>
  );
}

export default Main