import { Avatar, Box } from "@mui/material";
import {
  CardWrapper,
  CustomAvatar,
  CustomLeagueAvatar,
  IconBlock,
  LeagueBlock,
  MainText,
  PrimaryText,
  SecondaryText,
  TeamBlockWrapper,
  TeamStatisticsWrapper,
  VenueBlockWrapper,
} from "./TeamCardStatistics.style";
import type { FC } from "react";
import { CustomTable, teamStatisticsHeaderCells } from "../../../../shared";
import type { Team } from "../../model";

type TeamCardStatisticsProps = {
  teamData: Team;
};

export const TeamCardStatistics: FC<TeamCardStatisticsProps> = ({
  teamData,
}) => {
  const bodyCells = [
    teamData.stats.played,
    teamData.stats.wins,
    teamData.stats.draws,
    teamData.stats.loses,
    teamData.stats.goals,
  ];

  return (
    <CardWrapper>
      <TeamBlockWrapper>
        <IconBlock>
          <Avatar sizes="40px 40px" src={teamData.team.logo} />
          <Box>
            <MainText>
              {teamData.team.name} <br />
            </MainText>
            <SecondaryText>Founded: {teamData.team.founded}</SecondaryText>
          </Box>
        </IconBlock>
        <LeagueBlock>
          <CustomLeagueAvatar src={teamData.league.logo} />
          {teamData.league.name}
        </LeagueBlock>
      </TeamBlockWrapper>

      <VenueBlockWrapper>
        <IconBlock>
          <CustomAvatar src={teamData.venue.image ?? undefined} />
          <Box>
            <MainText>
              {teamData.venue.name} <br />
            </MainText>
            <SecondaryText>{teamData.venue.address}</SecondaryText>
            <PrimaryText>Capacity: {teamData.venue.capacity}</PrimaryText>
          </Box>
        </IconBlock>
      </VenueBlockWrapper>

      <TeamStatisticsWrapper>
        <CustomTable
          headerCells={teamStatisticsHeaderCells}
          bodyCells={bodyCells}
        />
      </TeamStatisticsWrapper>
    </CardWrapper>
  );
};
