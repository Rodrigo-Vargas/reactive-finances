import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "../libs/query-client";

export const Providers = ({children}) => {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};
