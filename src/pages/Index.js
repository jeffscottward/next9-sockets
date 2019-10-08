import React from "react";
import Layout from "../components/Layout";
import { withRouter } from "next/router";
import TableSockets from "../components/tablesockets";

const Index = props => {
  return (
    <div id="Index">
      <Layout>
        <TableSockets/>
      </Layout>
    </div>
  )
};

export default withRouter(Index);
