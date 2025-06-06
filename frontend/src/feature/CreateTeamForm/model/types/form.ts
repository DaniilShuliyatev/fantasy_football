import { z } from "zod";
import { CountrySchema } from "../../../../entity";

const NameSchema = z
  .string()
  .nonempty("Please specify a team name")
  .min(3, "Must contain at least 3 letters")
  .max(30, "30 letters is the maximum length");

const PlayersSchema = z
  .array(
    z.object({
      name: z.string(),
      position: z.string(),
      id: z.string(),
    }),
  )
  .refine((arr) => arr.length === 11, { message: "Choose 11 players" });

export const FormFieldsSchema = z.object({
  name: NameSchema,
  country: z.string().nonempty("Please specify a country"),
  competition: z.string().nonempty("Please specify a competition"),
  lineup: z.string().nonempty("Please specify a line-up"),
  players: PlayersSchema,
});

const FormationSchema = z.object({
  gk: z.number(),
  def: z.number(),
  mid: z.number(),
  fwd: z.number(),
});

const LineupSchema = z.object({
  name: z.string(),
  formation: FormationSchema,
});

const LeagueSchema = z.object({
  id: z.number(),
  name: z.string(),
  type: z.string(),
  logo: z.string().url(),
  country: CountrySchema,
});

export type LineupResponse = z.infer<typeof LineupSchema>;
export type FormFields = z.infer<typeof FormFieldsSchema>;
export type LeagueResponse = z.infer<typeof LeagueSchema>;
export type FormationPlayers = z.infer<typeof FormationSchema>;
export type PlayerOptions = z.infer<typeof PlayersSchema>;
