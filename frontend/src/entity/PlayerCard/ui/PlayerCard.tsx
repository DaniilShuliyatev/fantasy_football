import { Box, CardContent, Grid } from "@mui/material";
import {
  CardHeader,
  CustomLeagueAvatar,
  CustomCard,
  IconBlock,
  LeagueBlock,
  MainText,
  PrimaryText,
  SecondaryText,
  CustomPlayerAvatar,
} from "./PlayerCard.style";
import { PlayerCardsTable } from "./PlayerTables/PlayerCardsTable";
import { PlayerDuelsTable } from "./PlayerTables/PlayerDuelsTable";
import { PlayerGamesTable } from "./PlayerTables/PlayerGamesTable";
import { PlayerGoalsTable } from "./PlayerTables/PlayerGoalsTable";
import { PlayerPassesTable } from "./PlayerTables/PlayerPassesTable";
import { PlayerPenaltyTable } from "./PlayerTables/PlayerPenaltyTable";
import type { FC } from "react";
import type { Player } from "../model/types/player";

type PlayerCardProps = Pick<Player, "player" | "league" | "team">;

export const PlayerCard: FC<PlayerCardProps> = ({ player, league, team }) => {
  return (
    <CustomCard variant="outlined">
      <CardContent sx={{ "&&": { paddingBottom: "16px" } }}>
        <CardHeader>
          <IconBlock>
            <CustomPlayerAvatar src={player.photo} />
            <Box>
              <MainText>
                {player.name} <br />
              </MainText>
              <PrimaryText>Age: {player.age}</PrimaryText>
              <SecondaryText>
                Born: {player.birth} <br />
                Height: {player.height} <br />
                Weight: {player.weight}
              </SecondaryText>
            </Box>
          </IconBlock>
          <Box>
            <LeagueBlock>
              <CustomLeagueAvatar src={team.logo ?? undefined} />
              {team.name}
            </LeagueBlock>
            <LeagueBlock sx={{ marginTop: "8px" }}>
              <CustomLeagueAvatar src={league.logo ?? undefined} />
              {league.name}
            </LeagueBlock>
          </Box>
        </CardHeader>
        <Box>
          <Grid container columnSpacing={"16px"} rowSpacing={"8px"}>
            <Grid size={6}>
              <SecondaryText>Games</SecondaryText>
              <PlayerGamesTable />
            </Grid>
            <Grid size={6}>
              <SecondaryText>Goals</SecondaryText>
              <PlayerGoalsTable />
            </Grid>
            <Grid size={6}>
              <SecondaryText>Passes</SecondaryText>
              <PlayerPassesTable />
            </Grid>
            <Grid size={6}>
              <SecondaryText>Cards</SecondaryText>
              <PlayerCardsTable />
            </Grid>
            <Grid size={6}>
              <SecondaryText>Penalty</SecondaryText>
              <PlayerPenaltyTable />
            </Grid>
            <Grid size={6}>
              <SecondaryText>Duels</SecondaryText>
              <PlayerDuelsTable />
            </Grid>
          </Grid>
        </Box>
      </CardContent>
    </CustomCard>
  );
};
