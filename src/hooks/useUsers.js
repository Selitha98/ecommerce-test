import { useQuery } from "react-query";
import { getUser } from "../services/api";

// fetch one user
export const useUserById = () => {
  return useQuery({
    queryKey: ["user"],
    queryFn: getUser,
    staleTime: 5 * 60 * 1000,
    cacheTime: 10 * 60 * 1000,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
};
