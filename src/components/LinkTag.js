import React from "react";
import Global from "../constants/Global";
import capitalize from "../utils/capitalize";
const { css } = Global;

const LinkTag = (currentPath, item, indexRouteDefault) => {
  return (
    <a
      className={
        currentPath === item || (currentPath === "" && item === "/")
          ? "active"
          : ""
      }
    >
      {item === "/" ? indexRouteDefault : capitalize(item)}
      <style jsx>{`
        a {
          color: ${css.colors.header.items};
          padding: 1rem;
        }
        a:hover {
          background: rgba(255, 255, 255, 0.1);
        }
        a:active {
          background: rgba(0, 0, 0, 0.1);
        }
        a.active {
          background: ${css.colors.state.active};
        }
      `}</style>
    </a>
  );
}

export default LinkTag