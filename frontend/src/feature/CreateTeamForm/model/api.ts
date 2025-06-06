import { queryOptions } from "@tanstack/react-query";
import { getPlayersByYear, type Country } from "../../../entity";
import { $api } from "../../../shared";
import type { LeagueResponse, LineupResponse } from "./types";

type GetAbortSignalProps = {
  signal: AbortSignal;
};

export const getCountries = async ({
  signal,
}: GetAbortSignalProps): Promise<Country[] | undefined> => {
  try {
    const response = await $api.get("/countries", {
      signal,
    });

    return response.data;
  } catch (e) {
    console.error("Error when try to fetch countries");
  }
};

export const getLineups = async ({
  signal,
}: GetAbortSignalProps): Promise<LineupResponse[] | undefined> => {
  try {
    const response = await $api.get("/lineups", {
      signal,
    });

    return response.data;
  } catch (e) {
    console.error("Error when try to fetch lineups");
  }
};

export const getLeagues = async ({
  signal,
}: GetAbortSignalProps): Promise<LeagueResponse[] | undefined> => {
  try {
    const response = await $api.get("/leagues", {
      signal,
    });

    return response.data;
  } catch (e) {
    console.error("Error when try to fetch leagues");
  }
};

type GetPlayersQueryOptionsProps = {
  competition: string;
  country: string;
};

export const getPlayersQueryOptions = ({
  competition,
  country,
}: GetPlayersQueryOptionsProps) => {
  return queryOptions({
    queryKey: ["players", competition, country],
    queryFn: ({ signal }) =>
      getPlayersByYear({
        signal,
        year: 2023,
        league: competition,
        per_page: 100,
      }),
    enabled: Boolean(competition),
  });
};

type PostFantasyTeamProps = {
  data: {
    name: string;
    country: string;
    competition: string;
    lineup: string;
    players: string[];
  };
};

export const postFantasyTeams = async ({ data }: PostFantasyTeamProps) => {
  try {
    const response = await $api.post("/fantasy-teams", data);

    return response.data;
  } catch (e) {
    throw new Error("Error when try to send new team data");
  }
};
