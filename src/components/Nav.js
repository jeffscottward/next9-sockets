import React from "react";
// import { useStateValue } from "../state/state";
const Nav = props => {
  // const [{ css }, dispatch] = useStateValue();
  return (
    <nav>
      <ul>
        {props.children > 1 ? (
          props.children.map((item, index) => {
            return <li key={index}>{item}</li>;
          })
        ): (
          <li>{props.children}</li>
        )}
      </ul>
      <style jsx>{`
        nav {
        }
        ul,
        li {
          margin: 0;
          padding: 0;
          list-style: none;
        }
        ul {
          display: flex;
          ${props.vertical ? `flex-direction: column` : null};
        }
      `}</style>
    </nav>
  );
};

export default Nav;
