import type { z } from "zod";
import type { TeamWithStatsSchema } from "../../../../../../backend/src/schemas/teamSchemas";

export type Team = z.infer<typeof TeamWithStatsSchema>;
