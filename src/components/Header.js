import React from "react";

import Nav from './Nav'
import Link from 'next/link'

import {withRouter} from "next/router";
import Global from "../constants/Global";
const { css } = Global;

const Header = props => {
  return (
    <header>
      <div className="container">
        <Nav>
          <a href="/">Sockets Demo</a>
        </Nav>
      </div>
      <style jsx>{`
        header {
          background: ${css.colors.theme[1].themec0};
          padding: 1.5rem 0
        }
        a {
          color: ${css.colors.theme[1].themec1};
          font-size: 1.7rem;
        }
        .container {
          max-width: ${css.sizes.pageMaxWidth};
          margin: auto;
        }
      `}</style>
    </header>
  );
}

export default withRouter(Header)
