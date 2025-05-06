import { Box, Button } from "@mui/material";
import { teamMockedData } from "../../model/teamMockedData";
import {
  ContentWrapper,
  CountryBlock,
  CustomCard,
  CustomCardContent,
  CustomCountryAvatar,
  MainText,
  PrimaryText,
} from "./TeamCard.style";
import type { FC } from "react";

type TeamCardProps = {
  number: number;
};

export const TeamCard: FC<TeamCardProps> = ({ number }) => {
  return (
    <CustomCard variant="outlined">
      <CustomCardContent
        sx={{
          "&&": { paddingBottom: "16px" },
        }}
      >
        <Box>
          <ContentWrapper>
            <MainText>
              {number}. {teamMockedData.team.name} F.C.
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
          <Button
            sx={{
              marginRight: "4px",
            }}
          >
            <MainText>EDIT</MainText>
          </Button>
          <Button>
            <MainText>DELETE</MainText>
          </Button>
        </Box>
      </CustomCardContent>
    </CustomCard>
  );
};
