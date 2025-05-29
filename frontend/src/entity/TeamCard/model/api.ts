import { infiniteQueryOptions } from "@tanstack/react-query";
import { $api, TEAM_STATISTICS_CARDS_PER_PAGE } from "../../../shared";
import type { getTeamResponse } from "./types";

type GetTeamsByYearProps = {
  year: number;
  page: number;
  signal: AbortSignal;
};

export const getTeamsByYear = async ({
  year,
  signal,
  page,
}: GetTeamsByYearProps): Promise<getTeamResponse | undefined> => {
  try {
    const url = `/teams-by-year?year=${year}&page=${page}&per_page=${TEAM_STATISTICS_CARDS_PER_PAGE}`;
    const response = await $api.get(url, { signal });

    return response.data;
  } catch (e) {
    console.error("Error when try to fetch teams by year:", e);
  }
};

export const getTeamsByYearInfinityQueryOptions = ({
  year,
}: { year: number }) => {
  return infiniteQueryOptions({
    queryKey: ["teams", { year }],
    queryFn: ({ signal, pageParam }) =>
      getTeamsByYear({ year, signal, page: pageParam }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) =>
      lastPage && lastPage?.page < lastPage?.totalPages
        ? lastPage?.page + 1
        : undefined,
    select: (res) => res.pages.flatMap((item) => item?.data),
  });
};
