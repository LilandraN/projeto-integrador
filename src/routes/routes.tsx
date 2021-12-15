import { lazy } from "react";

const Login = lazy(() => import("../screens/Login"));
const Users = lazy(() => import("../screens/Users"));
const Register = lazy(() => import("../screens/Register"));

const routes = [
  {
    enabled: true,
    path: "/login",
    component: Login,
    child: null,
  },
  {
    enabled: true,
    path: "/",
    component: Users,
    child: null,
  },
  {
    enabled: true,
    path: "/register",
    component: Register,
    child: null,
  },
];

export const availableRoutes = routes.filter((route) => route.enabled);
