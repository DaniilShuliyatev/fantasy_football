import { z } from "zod";

const SeasonSchema = z.object({
  year: z.number(),
  start: z.string().optional(),
  end: z.string().optional(),
  current: z.boolean().optional(),
});

export type Season = z.infer<typeof SeasonSchema>;
