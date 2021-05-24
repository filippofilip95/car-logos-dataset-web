import React, { FC } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Layout from "src/components/Layout";

// main routes
import { App } from "src/components/App";
import About from "src/pages/About";
import NotFound from "src/pages/NotFound";
import Routes from "src/constants/routes";

type Props = {};

const Router: FC<Props> = (props) => {
  return (
    <Layout>
      <Switch>
        <Route
          path={Routes.Root}
          exact
          component={() => <Redirect to={Routes.Logos} />}
        />
        <Route path={Routes.Logos} component={App}></Route>
        <Route path={Routes.About} component={About}></Route>
        <Route component={NotFound}></Route>
      </Switch>
    </Layout>
  );
};

export default Router;
