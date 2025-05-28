import { type FC, useCallback, useEffect, useState } from "react";
import { CustomDropdownMenu, RoutePaths, TabPanel } from "../../../shared";
import { CustomTab, CustomTabs, PickYearWrapper } from "./StatisticsPage.style";
import { Link, useLocation } from "react-router";
import { PlayerCardsList, TeamCardStatisticsList } from "../../../entity";
import { useQuery } from "@tanstack/react-query";
import { getFilteringSeasons } from "../model";
import { Typography } from "@mui/material";

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

  const { data, error } = useQuery({
    queryKey: ["seasons"],
    queryFn: ({ signal }) => getFilteringSeasons({ signal }),
  });

  if (error) {
    return <Typography>{error.message}</Typography>;
  }

  const filterSeasons = data?.map((item) => item.year.toString());

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
          filterValues={filterSeasons || []}
        />
      </PickYearWrapper>
      <TabPanel value={activeTab} index={StatisticsPageEnum.TEAMS}>
        <TeamCardStatisticsList />
      </TabPanel>
      <TabPanel value={activeTab} index={StatisticsPageEnum.PLAYERS}>
        <PlayerCardsList />
      </TabPanel>
    </>
  );
};

export default StatisticsPage;
