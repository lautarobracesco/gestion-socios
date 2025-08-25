import { useLocalStorage } from "./useLocalStorage";

export function useSession() {
  const [user, setUser] = useLocalStorage("session", null);

  const login = (username, password) => {
    // Usuarios de prueba
    if (username === "admin" && password === "123") {
      setUser({ username, role: "ADMINISTRATIVO" });
      return true;
    }
    if (username === "super" && password === "123") {
      setUser({ username, role: "SUPERVISOR" });
      return true;
    }
    if (username === "lauti" && password === "123") {
      setUser({ username, role: "SUPERVISOR" });
      return true;
    }
    return false;
  };

  const logout = () => setUser(null);

  return { user, login, logout };
}
