import { type FC, useCallback, useEffect, useState } from "react";
import {
  teamMockedData,
  TeamCardStatistics,
  PlayerCard,
  playerMockData,
} from "../../entity";
import {
  CustomDropdownMenu,
  filterYears,
  RoutePaths,
  TabPanel,
} from "../../shared";
import { CustomTab, CustomTabs, PickYearWrapper } from "./StatisticsPage.style";
import { Link, useLocation } from "react-router";

enum StatisticsPageEnum {
  TEAMS,
  PLAYERS,
}

const StatisticsPage: FC = () => {
  const { pathname } = useLocation();

  const setActiveTabFromPathname = useCallback(() => {
    return pathname === RoutePaths.statistics_players
      ? StatisticsPageEnum.PLAYERS
      : StatisticsPageEnum.TEAMS;
  }, [pathname]);

  const [activeTab, setActiveTab] = useState<StatisticsPageEnum>(
    setActiveTabFromPathname,
  );

  useEffect(() => {
    setActiveTab(setActiveTabFromPathname);
  }, [setActiveTabFromPathname]);

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
        <CustomTab
          label={"TEAMS"}
          component={Link}
          to={RoutePaths.statistics_teams}
        />
        <CustomTab
          label={"PLAYERS"}
          component={Link}
          to={RoutePaths.statistics_players}
        />
      </CustomTabs>
      <PickYearWrapper>
        <CustomDropdownMenu
          width="220px"
          label="Select year"
          placeholder="Year"
          filterValues={filterYears}
        />
      </PickYearWrapper>
      <TabPanel value={activeTab} index={StatisticsPageEnum.TEAMS}>
        <TeamCardStatistics teamData={teamMockedData} />
      </TabPanel>
      <TabPanel value={activeTab} index={StatisticsPageEnum.PLAYERS}>
        <PlayerCard playerData={playerMockData} />
      </TabPanel>
    </>
  );
};

export default StatisticsPage;
