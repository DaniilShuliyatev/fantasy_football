import { Box, Button } from "@mui/material";
import {
  ContentWrapper,
  CountryBlock,
  CustomButton,
  CustomCard,
  CustomCardContent,
  CustomCountryAvatar,
  MainText,
  PrimaryText,
} from "./TeamCard.style";
import type { FC } from "react";
import type { Team } from "../../model";
import { Link } from "react-router";
import { RoutePaths } from "../../../../shared";

type TeamCardProps = {
  cardNumber: number;
  teamData: Team;
};

export const TeamCard: FC<TeamCardProps> = ({ cardNumber, teamData }) => (
  <CustomCard variant="outlined">
    <CustomCardContent>
      <Box>
        <ContentWrapper>
          <MainText>
            {cardNumber}. {teamData.team.name} F.C.
          </MainText>
          <CountryBlock>
            <CustomCountryAvatar src={teamData.league.country.flag} />
            {teamData.league.country.name}
          </CountryBlock>
        </ContentWrapper>
        <PrimaryText>
          Total points: {teamData.stats.wins * 3 + teamData.stats.draws}
        </PrimaryText>
      </Box>

      <Box>
        <CustomButton
          component={Link}
          to={`${RoutePaths.edit_team}${teamData.team.id}`}
        >
          <MainText>EDIT</MainText>
        </CustomButton>
        <Button>
          <MainText>DELETE</MainText>
        </Button>
      </Box>
    </CustomCardContent>
  </CustomCard>
);
