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
import type { FC } from "react";
import type { Player } from "../../model";
import {
  CustomTable,
  getDisplayString,
  playerCardsHeaderCells,
  playerDuelsHeaderCells,
  playerGamesHeaderCells,
  playerGoalsHeaderCells,
  playerPassesHeaderCells,
  playerPenaltyHeaderCells,
} from "../../../../shared";

type PlayerCardProps = {
  playerData: Player;
};

export const PlayerCard: FC<PlayerCardProps> = ({ playerData }) => {
  const cardsBodyCells = [
    getDisplayString(playerData.cards.yellow),
    getDisplayString(playerData.cards.yellowred),
    getDisplayString(playerData.cards.red),
  ];

  const duelsBodyCells = [
    getDisplayString(playerData.duels.total),
    getDisplayString(playerData.duels.won),
  ];

  const gamesBodyCells = [
    getDisplayString(playerData.games.appearances),
    getDisplayString(playerData.games.position),
    getDisplayString(
      playerData.games.rating ? playerData.games.rating.toFixed(1) : null,
    ),
    playerData.games.captain ? "Yes" : "No",
  ];

  const goalsBodyCells = [
    getDisplayString(playerData.goals.total),
    getDisplayString(playerData.goals.conceded),
    getDisplayString(playerData.goals.assists),
    getDisplayString(playerData.goals.saves),
  ];
  const passesBodyCells = [
    getDisplayString(playerData.passes.total),
    getDisplayString(playerData.passes.key),
  ];
  const penaltyBodyCells = [
    getDisplayString(playerData.penalty.won),
    getDisplayString(playerData.penalty.committed),
    getDisplayString(playerData.penalty.scored),
    getDisplayString(playerData.penalty.missed),
    getDisplayString(playerData.penalty.saved),
  ];

  const bornDate = new Date(getDisplayString(playerData.player.birth.date));
  const dateOptions: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedBornDate = bornDate.toLocaleDateString("en-Us", dateOptions);

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
                Born: {formattedBornDate} <br />
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
