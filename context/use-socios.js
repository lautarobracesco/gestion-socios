import { useContext } from "react";
import { SociosContext } from "./socios-context";

export function useSocios() {
  return useContext(SociosContext);
}
