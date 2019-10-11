import React from "react";
import Layout from "../components/Layout";
import { withRouter } from "next/router";
import TableSockets from "../components/tablesockets";
import SampleComponent from "../components/SampleComponent";

const Index = () => {
  return (
    <div id="Index">
      <Layout>
        <SampleComponent />
        <TableSockets />
      </Layout>
    </div>
  );
};

export default withRouter(Index);
