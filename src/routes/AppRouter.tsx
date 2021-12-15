import { Suspense, ReactElement } from "react";
import { Switch, Route } from "react-router-dom";
import { availableRoutes } from "./routes";

const Routes = (): ReactElement => {
  return (
    <Suspense fallback>
      <Switch>
        {availableRoutes.map((route) => (
          <Route
            path={route.path}
            exact
            component={route.component}
            key={route.path}
          />
        ))}
      </Switch>
    </Suspense>
  );
};
export default Routes;
