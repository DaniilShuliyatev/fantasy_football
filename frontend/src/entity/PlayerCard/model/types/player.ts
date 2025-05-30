import { z } from "zod";

const BirthSchema = z.object({
  date: z.string().nullable(),
  place: z.string().nullable(),
  country: z.string().nullable(),
});

const PlayerSchema = z.object({
  id: z.string(),
  name: z.string(),
  age: z.number().nullable(),
  photo: z.string().url(),
  birth: BirthSchema,
  height: z.string().nullable(),
  weight: z.string().nullable(),
});

const TeamSchema = z.object({
  name: z.string().nullable(),
  logo: z.string().url().nullable(),
});

const LeagueSchema = z.object({
  name: z.string().nullable(),
  logo: z.string().url().nullable(),
});

const GamesSchema = z.object({
  appearances: z.number().nullable(),
  position: z.string().nullable(),
  rating: z.number().nullable(),
  captain: z.boolean().nullable(),
});

const GoalsSchema = z.object({
  total: z.number().nullable(),
  conceded: z.number().nullable(),
  assists: z.number().nullable(),
  saves: z.number().nullable(),
});

const PassesSchema = z.object({
  total: z.number().nullable(),
  key: z.number().nullable(),
});

const CardsSchema = z.object({
  yellow: z.number().nullable(),
  yellowred: z.number().nullable(),
  red: z.number().nullable(),
});

const PenaltySchema = z.object({
  won: z.number().nullable(),
  committed: z.number().nullable(),
  scored: z.number().nullable(),
  missed: z.number().nullable(),
  saved: z.number().nullable(),
});

const DuelsSchema = z.object({
  total: z.number().nullable(),
  won: z.number().nullable(),
});

export const PlayerWithStatsSchema = z.object({
  player: PlayerSchema,
  team: TeamSchema,
  league: LeagueSchema,
  games: GamesSchema,
  goals: GoalsSchema,
  passes: PassesSchema,
  cards: CardsSchema,
  penalty: PenaltySchema,
  duels: DuelsSchema,
});

export const GetPlayersByYearResponseSchema = z.object({
  page: z.number(),
  total: z.number(),
  totalPages: z.number(),
  data: z.array(PlayerWithStatsSchema),
});

export type Player = z.infer<typeof PlayerWithStatsSchema>;
export type getPlayerResponse = z.infer<typeof GetPlayersByYearResponseSchema>;
