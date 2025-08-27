import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import SociosList from "./pages/SociosList";
import SociosDetalle from "./pages/SociosDetalle";
import RutaProtegida from "./layout/RutaProtegida";
import "./index.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/socios"
          element={
            <RutaProtegida>
              <SociosList />
            </RutaProtegida>
          }
        />
        <Route
          path="/socios/:id"
          element={
            <RutaProtegida>
              <SociosDetalle />
            </RutaProtegida>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
