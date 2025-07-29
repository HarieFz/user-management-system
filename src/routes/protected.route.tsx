import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Auth from "../lib/auth";
import Layout from "../layout";

export default function ProtectedRoute() {
  const navigate = useNavigate();
  const isAuthenticated = Auth.isAuthorization();

  useEffect(() => {
    if (!isAuthenticated) {
      Auth.signOut(navigate);
    }
  }, [isAuthenticated, navigate]);

  return <Layout />;
}
