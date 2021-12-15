import { lazy } from "react";

const Login = lazy(() => import("../screens/Login"));
const routes = [
  {
    enabled: true,
    path: "/",
    component: Login,
    child: null,
  },
];

export const availableRoutes = routes.filter((route) => route.enabled);
