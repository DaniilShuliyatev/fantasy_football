import { Box, Button } from "@mui/material";
import { teamMockedData } from "../../model";
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

type TeamCardProps = {
  cardNumber: number;
};

export const TeamCard: FC<TeamCardProps> = ({ cardNumber }) => (
  <CustomCard variant="outlined">
    <CustomCardContent>
      <Box>
        <ContentWrapper>
          <MainText>
            {cardNumber}. {teamMockedData.team.name} F.C.
          </MainText>
          <CountryBlock>
            <CustomCountryAvatar src={teamMockedData.league.country.flag} />
            {teamMockedData.league.country.name}
          </CountryBlock>
        </ContentWrapper>
        <PrimaryText>
          Total points:{" "}
          {teamMockedData.stats.wins * 3 + teamMockedData.stats.draws}
        </PrimaryText>
      </Box>

      <Box>
        <CustomButton>
          <MainText>EDIT</MainText>
        </CustomButton>
        <Button>
          <MainText>DELETE</MainText>
        </Button>
      </Box>
    </CustomCardContent>
  </CustomCard>
);
