import { Box, Grid } from "@mui/material";
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
  CustomCardContent,
} from "./PlayerCard.style";
import { useEffect, useState, type FC } from "react";
import type { Player } from "../model";
import {
  CustomTable,
  playerCardsHeaderCells,
  playerDuelsHeaderCells,
  playerGamesHeaderCells,
  playerGoalsHeaderCells,
  playerPassesHeaderCells,
  playerPenaltyHeaderCells,
} from "../../../shared";

type PlayerCardProps = {
  playerData: Player;
};

type TableCells = (string | number)[];

export const PlayerCard: FC<PlayerCardProps> = ({ playerData }) => {
  const [cardsBodyCells, setCardsBodyCells] = useState<TableCells>([]);
  const [duelsBodyCells, setDuelsBodyCells] = useState<TableCells>([]);
  const [gamesBodyCells, setGamesBodyCells] = useState<TableCells>([]);
  const [goalsBodyCells, setGoalsBodyCells] = useState<TableCells>([]);
  const [passesBodyCells, setPassesBodyCells] = useState<TableCells>([]);
  const [penaltyBodyCells, setPenaltyBodyCells] = useState<TableCells>([]);

  useEffect(() => {
    setCardsBodyCells([
      playerData.cards.yellow || "No info",
      playerData.cards.yellowred || "No info",
      playerData.cards.red || "No info",
    ]);
    setDuelsBodyCells([
      playerData.duels.total || "No info",
      playerData.duels.won || "No info",
    ]);
    setGamesBodyCells([
      playerData.games.appearances || "No info",
      playerData.games.position || "No info",
      playerData.games.rating || "No info",
      playerData.games.captain ? "Yes" : "No",
    ]);
    setGoalsBodyCells([
      playerData.goals.total || "No info",
      playerData.goals.conceded || "No info",
      playerData.goals.assists || "No info",
      playerData.goals.saves || "No info",
    ]);
    setPassesBodyCells([
      playerData.passes.total || "No info",
      playerData.passes.key || "No info",
    ]);
    setPenaltyBodyCells([
      playerData.penalty.won || "No info",
      playerData.penalty.committed || "No info",
      playerData.penalty.scored || "No info",
      playerData.penalty.missed || "No info",
      playerData.penalty.saved || "No info",
    ]);
  }, [playerData]);

  return (
    <CustomCard variant="outlined">
      <CustomCardContent>
        <CardHeader>
          <IconBlock>
            <CustomPlayerAvatar src={playerData.player.photo} />
            <Box>
              <MainText>
                {playerData.player.name} <br />
              </MainText>
              <PrimaryText>Age: {playerData.player.age}</PrimaryText>
              <SecondaryText>
                Born: {playerData.player.birth} <br />
                Height: {playerData.player.height} <br />
                Weight: {playerData.player.weight}
              </SecondaryText>
            </Box>
          </IconBlock>
          <Box>
            <LeagueBlock>
              <CustomLeagueAvatar src={playerData.team.logo ?? undefined} />
              {playerData.team.name}
            </LeagueBlock>
            <LeagueBlock>
              <CustomLeagueAvatar src={playerData.league.logo ?? undefined} />
              {playerData.league.name}
            </LeagueBlock>
          </Box>
        </CardHeader>
        <Box>
          <Grid container columnSpacing={"16px"} rowSpacing={"8px"}>
            <Grid size={6}>
              <SecondaryText>Games</SecondaryText>
              <CustomTable
                headerCells={playerGamesHeaderCells}
                bodyCells={gamesBodyCells}
              />
            </Grid>
            <Grid size={6}>
              <SecondaryText>Goals</SecondaryText>
              <CustomTable
                headerCells={playerGoalsHeaderCells}
                bodyCells={goalsBodyCells}
              />
            </Grid>
            <Grid size={6}>
              <SecondaryText>Passes</SecondaryText>
              <CustomTable
                headerCells={playerPassesHeaderCells}
                bodyCells={passesBodyCells}
              />
            </Grid>
            <Grid size={6}>
              <SecondaryText>Cards</SecondaryText>
              <CustomTable
                headerCells={playerCardsHeaderCells}
                bodyCells={cardsBodyCells}
              />
            </Grid>
            <Grid size={6}>
              <SecondaryText>Penalty</SecondaryText>
              <CustomTable
                headerCells={playerPenaltyHeaderCells}
                bodyCells={penaltyBodyCells}
              />
            </Grid>
            <Grid size={6}>
              <SecondaryText>Duels</SecondaryText>
              <CustomTable
                headerCells={playerDuelsHeaderCells}
                bodyCells={duelsBodyCells}
              />
            </Grid>
          </Grid>
        </Box>
      </CustomCardContent>
    </CustomCard>
  );
};
