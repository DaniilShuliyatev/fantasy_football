import type { PlayerPositions } from "../../entity";

type PlayerPositionsOrder = { [n in PlayerPositions]: number };

export const playerPositionsOrder: PlayerPositionsOrder = {
  Goalkeeper: 0,
  Defender: 1,
  Midfielder: 2,
  Attacker: 3,
};
