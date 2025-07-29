import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Auth from "../lib/auth";

export default function PublicRoute() {
  const navigate = useNavigate();
  const isAuthenticated = Auth.isAuthorization();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  return <Outlet />;
}
