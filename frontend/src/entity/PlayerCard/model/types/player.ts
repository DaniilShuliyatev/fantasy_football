import type { z } from "zod";
import type { PlayerWithStatsSchema } from "../../../../../../backend/src/schemas/playerSchemas";

export type Player = z.infer<typeof PlayerWithStatsSchema>;
