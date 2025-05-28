import { infiniteQueryOptions } from "@tanstack/react-query";
import { $api, PLAYER_CARDS_PER_PAGE } from "../../../shared";
import type { getPlayerResponse } from "./types";

type GetPlayersByYearProps = {
  year: number;
  page?: number;
  signal: AbortSignal;
};

export const getPlayersByYear = async ({
  year,
  page,
  signal,
}: GetPlayersByYearProps): Promise<getPlayerResponse | undefined> => {
  try {
    const response = await $api.get(
      `/players-by-year?year=${year}&page=${page}&per_page=${PLAYER_CARDS_PER_PAGE}`,
      {
        signal,
      },
    );

    return response.data;
  } catch (e) {
    console.error("Error when try to fetch players by year:", e);
  }
};

export const getPlayersListInfinityQueryOptions = ({
  year,
}: { year: number }) => {
  return infiniteQueryOptions({
    queryKey: ["players", { year }],
    queryFn: ({ signal, pageParam }) =>
      getPlayersByYear({ year, page: pageParam, signal }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) =>
      lastPage && lastPage?.page < lastPage?.totalPages
        ? lastPage?.page + 1
        : undefined,
    select: (res) => res.pages.flatMap((item) => item?.data),
  });
};
