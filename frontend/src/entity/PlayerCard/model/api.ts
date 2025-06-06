import { infiniteQueryOptions } from "@tanstack/react-query";
import { $api, PLAYER_CARDS_PER_PAGE } from "../../../shared";
import type { getPlayerResponse } from "./types";

type GetPlayersByYearProps = {
  year: number;
  page?: number;
  league?: string;
  per_page?: number;
  signal: AbortSignal;
};

export const getPlayersByYear = async ({
  year,
  page = 1,
  signal,
  league,
  per_page,
}: GetPlayersByYearProps): Promise<getPlayerResponse | undefined> => {
  try {
    const perPageParam = per_page ? `&per_page=${per_page}` : "";
    const leagueParam = league ? `&league=${league}` : "";
    const url = `/players-by-year?year=${year}&page=${page}${perPageParam}${leagueParam}`;
    const response = await $api.get(url, { signal });

    return response.data;
  } catch (e) {
    throw new Error("Error when try to fetch players by year");
  }
};

export const getPlayersListInfinityQueryOptions = ({
  year,
}: { year: number }) => {
  return infiniteQueryOptions({
    queryKey: ["players", { year }],
    queryFn: ({ signal, pageParam }) =>
      getPlayersByYear({
        year,
        page: pageParam,
        signal,
        per_page: PLAYER_CARDS_PER_PAGE,
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) =>
      lastPage && lastPage?.page < lastPage?.totalPages
        ? lastPage?.page + 1
        : undefined,
    select: (res) => res.pages.flatMap((item) => item?.data),
  });
};
