import React from "react";

import Header from "../components/Header";
import Main from "../components/Main";
// import Footer from "../components/Footer";

import { StateProvider } from "../state/state";
import Reducer from "../state/reducer";
import InitialState from "../state/initialState"

const Layout = props => (
  <StateProvider initialState={InitialState} reducer={Reducer}>
    <div id="Layout">
      <Header />
      <Main>{props.children}</Main>
      {/* <Footer /> */}
    </div>
    <style jsx global>{`
      // Dev - FontFace
      // UPDATE: Coming soon -> https://nextjs.org/blog/next-9-1#built-in-css-support
      @import "/static/fonts/Roboto-Mono/stylesheet.css";
      // Prod - Use Plugin
      // 'https://github.com/zeit/next-plugins/tree/master/packages/next-css

      * {
        box-sizing: border-box;
        font-family: sans-serif;
        font-family: "Roboto Mono";
      }
      html,
      body,
      #__next,
      #__next > * {
        margin: 0;
        padding: 0;
        height: 100%;
        background: #eeeeee;
      }
      ul {
        display: flex;
      }
      ul,
      li {
        margin: 0;
        padding: 0;
        list-style: none;
      }
      button,
      a {
        cursor: pointer;
        color: black;
        display: inline-block;
      }
      a,
      span {
        display: inline-block;
      }
      a {
        text-decoration: none;
      }
      p a {
        text-decoration: underline;
      }
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      p {
        margin-top: 0;
      }

      img {
        max-width: 100%;
        display: inline-block;
      }

      input[type="number"]::-webkit-inner-spin-button,
      input[type="number"]::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }

      #Layout {
        min-height: 100%;
        display: grid;
        grid-template-rows: auto 1fr auto;
      }
    `}</style>
  </StateProvider>
);

export default Layout;
