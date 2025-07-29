import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PublicRoute from "./public.route";
import Login from "../pages/login";
import ProtectedRoute from "./protected.route";
import Dashboard from "../pages/dashboard";
import Register from "../pages/register";

export default function SetupRotuer() {
  const router = createBrowserRouter([
    {
      element: <PublicRoute />,
      children: [
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/login",
          element: <Login />,
        },
      ],
    },
    {
      path: "/",
      element: <ProtectedRoute />,
      children: [
        {
          index: true,
          element: <Dashboard />,
        },
        {
          path: "menu-2",
          element: <Dashboard />,
        },
        {
          path: "menu-3",
          element: <Dashboard />,
        },
        {
          path: "menu-4",
          element: <Dashboard />,
        },
        {
          path: "menu-5",
          element: <Dashboard />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
