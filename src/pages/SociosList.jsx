import { Link } from "react-router-dom";
import { useSocios } from "../context/use-socios";
import { useQueryParams } from "../hooks/useQueryParams";
import { ESTADOS } from "../lib/constant";
import LogoutButton from "../components/LogoutButton";


export default function SociosList() {
  const { socios } = useSocios();
  const [params, setParam] = useQueryParams();

  const filtroApellido = params.get("apellido") || "";
  const filtroEstado = params.get("estado") || "";

  // Filtrar socios
  const sociosFiltrados = socios.filter((s) => {
    const matchApellido = s.apellido
      .toLowerCase()
      .includes(filtroApellido.toLowerCase());
    const matchEstado = filtroEstado ? s.estado === filtroEstado : true;
    return matchApellido && matchEstado;
  });

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Gestión de Socios</h2>
        <LogoutButton />
      </div>

      {/* Filtros */}
      <div className="flex gap-4 mb-4">
        <input
          type="text"
          placeholder="Buscar por Apellido"
          value={filtroApellido}
          onChange={(e) => setParam("apellido", e.target.value)}
          className="border rounded-lg px-3 py-2 w-1/3 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <select
          value={filtroEstado}
          onChange={(e) => setParam("estado", e.target.value)}
          className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="">Todos</option>
          <option value={ESTADOS.ACTIVO}>Activos</option>
          <option value={ESTADOS.BAJA}>De Baja</option>
        </select>
      </div>

      {/* Contador */}
      <p className="mb-2">Cantidad de socios encontrados: {sociosFiltrados.length}</p>

      {/* Grilla */}
      <table className="w-full border-collapse shadow-lg">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-4 py-2 text-left">Socio</th>
            <th className="border px-4 py-2 text-left">DNI</th>
            <th className="border px-4 py-2 text-left">Sexo</th>
            <th className="border px-4 py-2 text-left">Teléfono</th>
            <th className="border px-4 py-2 text-center">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {sociosFiltrados.map((s) => (
            <tr
              key={s.id}
              className={`${
                s.estado === ESTADOS.BAJA ? "text-red-500" : "text-black"
              } hover:bg-gray-50`}
            >
              <td className="border px-4 py-2">{s.apellido}, {s.nombre}</td>
              <td className="border px-4 py-2">{s.dni}</td>
              <td className="border px-4 py-2">{s.sexo}</td>
              <td className="border px-4 py-2">{s.telefono}</td>
              <td className="border px-4 py-2 text-center">
                <Link
                  to={`/socios/${s.id}`}
                  className="text-blue-500 hover:underline"
                >
                  🔍 Detalle
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  
}
