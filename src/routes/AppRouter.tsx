import { Suspense, ReactElement } from "react";
import { Switch, Route } from "react-router-dom";
import Login from "../screens/Login";
import Register from "../screens/Register";
import Users from "../screens/Users";

// import { availableRoutes } from './routes';

const Routes = (): ReactElement => {
  // const { isAuthenticated, wasValidated } = useAuth();

  // if (!wasValidated) {
  return (
    <Suspense fallback>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/" exact component={Users} />
        <Route path="/register" component={Register} />
      </Switch>
    </Suspense>
  );
  // }

  // if (!isAuthenticated) {
  //   return (
  //     <Suspense fallback={LoadingPage}>
  //       <Switch>
  //         {availableRoutes.map((route) => (
  //           <Route
  //             path={route.path}
  //             exact
  //             component={BlockedScreen}
  //             key={route.path}
  //           />
  //         ))}
  //       </Switch>
  //     </Suspense>
  //   );
  // }
  // return (
  //   <Suspense fallback={LoadingPage}>
  //     <Switch>
  //       {availableRoutes.map((route) => (
  //         <Route
  //           path={route.path}
  //           exact
  //           component={route.component}
  //           key={route.path}
  //         />
  //       ))}
  //     </Switch>
  //   </Suspense>
  // );
};
export default Routes;
