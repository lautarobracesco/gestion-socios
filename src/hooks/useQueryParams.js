import { useSearchParams } from "react-router-dom";

export function useQueryParams() {
  const [params, setParams] = useSearchParams();

  const setParam = (key, value) => {
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    setParams(params);
  };

  return [params, setParam];
}
