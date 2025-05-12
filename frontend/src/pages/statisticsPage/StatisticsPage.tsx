import { type FC, useState } from "react";
import {
  teamMockedData,
  TeamCardStatistics,
  PlayerCard,
  playerMockData,
  TeamCard,
} from "../../entity";
import {
  CustomDropdownMenu,
  yearDropdownLabels,
  filterYears,
  TabPanel,
} from "../../shared";
import {
  CustomTab,
  CustomTabs,
  CustomUl,
  PickYearWrapper,
} from "./StatisticsPage.style";

const resp = ["data1", "data2", "data3", "data4", "data5"];

enum StatisticsPageEnum {
  TEAMS,
  PLAYERS,
}

const StatisticsPage: FC = () => {
  const [activeTab, setActiveTab] = useState<StatisticsPageEnum>(
    StatisticsPageEnum.TEAMS,
  );

  const handleTabChange = (_: unknown, newValue: StatisticsPageEnum) => {
    setActiveTab(newValue);
  };

  return (
    <>
      <CustomTabs
        value={activeTab}
        onChange={handleTabChange}
        indicatorColor="primary"
        textColor="inherit"
        variant="fullWidth"
      >
        <CustomTab label="TEAMS" />
        <CustomTab label="PLAYERS" />
      </CustomTabs>
      <PickYearWrapper>
        <CustomDropdownMenu
          width="220px"
          Labels={yearDropdownLabels}
          filterValues={filterYears}
        />
      </PickYearWrapper>
      <TabPanel value={activeTab} index={StatisticsPageEnum.TEAMS}>
        <TeamCardStatistics teamData={teamMockedData} />
        <CustomUl>
          {resp.map((item, i) => (
            <TeamCard cardNumber={i + 1} key={item} teamData={teamMockedData} />
          ))}
        </CustomUl>
      </TabPanel>
      <TabPanel value={activeTab} index={StatisticsPageEnum.PLAYERS}>
        <PlayerCard playerData={playerMockData} />
      </TabPanel>
    </>
  );
};

export default StatisticsPage;
