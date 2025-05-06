import { type FC, useState } from "react";
import {
  CustomButtonGroup,
  PickYearWrapper,
  SwitchButton,
} from "./StatisticsPage.style";
import { TeamCardStatistics, PlayerCard, TeamCard } from "../../entity";
import {
  CustomDropdownMenu,
  filteredYears,
  yearDropdownLabels,
} from "../../shared";
import { playerMockData } from "../../entity";

const resp = ["data1", "data2", "data3", "data4", "data5"];

enum StatisticsPageEnum {
  TEAMS = "TEAMS",
  PLAYERS = "PLAYERS",
}

const StatisticsPage: FC = () => {
  const [activeTab, setActiveTab] = useState<StatisticsPageEnum>(
    StatisticsPageEnum.TEAMS,
  );

  const onTabChange = (tab: StatisticsPageEnum) => setActiveTab(tab);

  return (
    <>
      <CustomButtonGroup>
        <SwitchButton
          active={activeTab === StatisticsPageEnum.TEAMS}
          onClick={() => onTabChange(StatisticsPageEnum.TEAMS)}
          variant="outlined"
        >
          TEAMS
        </SwitchButton>
        <SwitchButton
          variant="outlined"
          active={activeTab === StatisticsPageEnum.PLAYERS}
          onClick={() => onTabChange(StatisticsPageEnum.PLAYERS)}
        >
          PLAYERS
        </SwitchButton>
      </CustomButtonGroup>
      <PickYearWrapper>
        <CustomDropdownMenu
          width="220px"
          Labels={yearDropdownLabels}
          filteringValues={filteredYears}
        />
      </PickYearWrapper>
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
