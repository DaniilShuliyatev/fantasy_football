import { Avatar, Box } from "@mui/material";
import { teamMockedData } from "../../model/teamMockedData";
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
import { TeamStatistics } from "./TeamStatistics";
import type { FC } from "react";

export const TeamCardStatistics: FC = () => {
  return (
    <CardWrapper>
      <TeamBlockWrapper>
        <IconBlock>
          <Avatar sizes="40px 40px" src={teamMockedData.team.logo} />
          <Box>
            <MainText>
              {teamMockedData.team.name} <br />
            </MainText>
            <SecondaryText>
              Founded: {teamMockedData.team.founded}
            </SecondaryText>
          </Box>
        </IconBlock>
        <LeagueBlock>
          <CustomLeagueAvatar src={teamMockedData.league.logo} />
          {teamMockedData.league.name}
        </LeagueBlock>
      </TeamBlockWrapper>

      <VenueBlockWrapper>
        <IconBlock>
          <CustomAvatar src={teamMockedData.venue.image ?? undefined} />
          <Box>
            <MainText>
              {teamMockedData.venue.name} <br />
            </MainText>
            <SecondaryText>{teamMockedData.venue.address}</SecondaryText>
            <PrimaryText>Capacity: {teamMockedData.venue.capacity}</PrimaryText>
          </Box>
        </IconBlock>
      </VenueBlockWrapper>

      <TeamStatisticsWrapper>
        <TeamStatistics />
      </TeamStatisticsWrapper>
    </CardWrapper>
  );
};
