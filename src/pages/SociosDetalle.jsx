import { useParams, useNavigate } from "react-router-dom";
import { useSocios } from "../context/use-socios";
import { useSession } from "../hooks/useSession";
import { ESTADOS, ROLES } from "../lib/constant";
import LogoutButton from "../components/LogoutButton";


export default function SociosDetalle() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { socios, cambiarEstado } = useSocios();
  const { user } = useSession();

  const socio = socios.find((s) => s.id === parseInt(id));

  if (!socio) {
    return <p>Socio no encontrado</p>;
  }

  const handleCambioEstado = () => {
    const nuevoEstado =
      socio.estado === ESTADOS.ACTIVO ? ESTADOS.BAJA : ESTADOS.ACTIVO;
    cambiarEstado(socio.id, nuevoEstado);
  };

    return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Detalle del Socio</h2>
        <LogoutButton />
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 space-y-4">
        <div><b>Apellido:</b> {socio.apellido}</div>
        <div><b>Nombre:</b> {socio.nombre}</div>
        <div><b>DNI:</b> {socio.dni}</div>
        <div><b>Sexo:</b> {socio.sexo}</div>
        <div><b>Teléfono:</b> {socio.telefono}</div>
        <div>
          <b>Estado:</b>{" "}
          {socio.estado === ESTADOS.ACTIVO ? "Activo ✅" : "De Baja ❌"}
        </div>
      </div>

      <div className="mt-6 flex gap-4">
        <button
          onClick={() => navigate(-1)}
          className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
        >
          ⬅ Volver
        </button>

        {user?.role === ROLES.SUPER && (
          <button
            onClick={handleCambioEstado}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Cambiar estado
          </button>
        )}
      </div>
    </div>
  );
}
