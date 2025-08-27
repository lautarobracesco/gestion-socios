import { useNavigate } from "react-router-dom";
import { useSession } from "../hooks/useSession";

export default function LogoutButton() {
  const { logout } = useSession();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

   return (
    <button
      onClick={handleLogout}
      className="
        flex items-center gap-2
        bg-red-500 text-white font-semibold
        px-4 py-2 rounded-lg
        shadow-md
        hover:bg-red-600 hover:shadow-lg
        transition-all duration-200
      "
    >
       Cerrar sesión
    </button>
  );
}
