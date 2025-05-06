import { Box, ButtonGroup } from "@mui/material";
import { type FC, useState } from "react";
import { SwitchButton } from "./StatisticsPage.style";
import { TeamCardStatistics, PlayerCard, TeamCard } from "../../entity";
import {
  CustomDropdownMenu,
  yearDropdownLabels,
  filteringYears,
} from "../../shared";
import { playerMockData } from "../../entity/PlayerCard/model/playerMockData";

const resp = ["data1", "data2", "data3", "data4", "data5"];

const StatisticsPage: FC = () => {
  const [teamsActive, setTeamsActive] = useState(true);
  const [playersActive, setPlayersActive] = useState(false);

  const onTeams = () => {
    setPlayersActive(false);
    setTeamsActive(true);
  };

  const onPlayers = () => {
    setTeamsActive(false);
    setPlayersActive(true);
  };

  return (
    <>
      <ButtonGroup sx={{ marginTop: "31px" }}>
        <SwitchButton
          isActive={teamsActive}
          onClick={onTeams}
          variant="outlined"
        >
          TEAMS
        </SwitchButton>
        <SwitchButton
          onClick={onPlayers}
          variant="outlined"
          isActive={playersActive}
        >
          PLAYERS
        </SwitchButton>
      </ButtonGroup>
      <Box sx={{ marginTop: "24px" }}>
        <CustomDropdownMenu
          width="220px"
          Labels={yearDropdownLabels}
          filteringValues={filteringYears}
        />
      </Box>
      <TeamCardStatistics />
      <PlayerCard
        player={playerMockData.player}
        team={playerMockData.team}
        league={playerMockData.league}
      />
      <ul>
        {resp.map((item, i) => (
          <TeamCard number={i + 1} key={item} />
        ))}
      </ul>
    </>
  );
};

export default StatisticsPage;
