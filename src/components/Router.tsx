import React, { FC } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Layout from "src/components/Layout";

// main routes
import { App } from "src/components/App";
import About from "src/pages/About";
import NotFound from "src/pages/NotFound";

type Props = {};

const Router: FC<Props> = (props) => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={() => <Redirect to="/search" />} />
        <Route path="/search" component={App}></Route>
        <Route path="/about" component={About}></Route>
        <Route component={NotFound}></Route>
      </Switch>
    </Layout>
  );
};

export default Router;
