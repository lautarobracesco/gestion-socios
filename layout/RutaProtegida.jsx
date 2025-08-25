import { Navigate } from "react-router-dom";
import { useSession } from "../hooks/useSession";

export default function RutaProtegida({ children }) {
  const { user } = useSession();
  return user ? children : <Navigate to="/" />;
}
