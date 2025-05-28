import { QueryClient } from "@tanstack/react-query";
import { STALE_TIME } from "../consts";

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: STALE_TIME
        }
    }
});
