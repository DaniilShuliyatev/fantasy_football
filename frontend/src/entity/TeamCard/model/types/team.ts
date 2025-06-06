import { z } from "zod";

export const CountrySchema = z.object({
  name: z.string(),
  code: z.string(),
  flag: z.string().url(),
});

const LeagueSchema = z.object({
  id: z.string(),
  name: z.string(),
  logo: z.string().url(),
  country: CountrySchema,
});

const VenueSchema = z.object({
  name: z.string().nullable(),
  image: z.string().url().nullable(),
  capacity: z.number().nullable(),
  address: z.string().nullable(),
});

const TeamSchema = z.object({
  id: z.string(),
  name: z.string(),
  logo: z.string().url(),
  founded: z.number().nullable(),
});

const StatsSchema = z.object({
  played: z.number(),
  wins: z.number(),
  draws: z.number(),
  loses: z.number(),
  goals: z.number(),
});

export const TeamWithStatsSchema = z.object({
  team: TeamSchema,
  league: LeagueSchema,
  venue: VenueSchema,
  stats: StatsSchema,
});

export const TeamWithStatsResponseSchema = z.object({
  page: z.number(),
  total: z.number(),
  totalPages: z.number(),
  data: z.array(TeamWithStatsSchema),
});

export type Team = z.infer<typeof TeamWithStatsSchema>;
export type getTeamResponse = z.infer<typeof TeamWithStatsResponseSchema>;
export type Country = z.infer<typeof CountrySchema>;
