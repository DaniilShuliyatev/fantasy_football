import { Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import type { FC } from "react";
import {
  SkeletonCardsList,
  teamsCardStatisticsCount,
} from "../../../../shared";
import { getTeamsByYear } from "../../model";
import { CustomUl } from "./TeamCardsList.style";
import { TeamCard } from "../TeamCard";

export const TeamCardsList: FC = () => {
  const year = 2022; //replace 2022 with a dynamic data with MobX integration
  const { data, error, isPending } = useQuery({
    queryKey: ["fantasy_teams"],
    queryFn: ({ signal }) => getTeamsByYear({ year, signal, page: 1 }),
    select: (item) => item?.data,
  });

  if (error) {
    return <Typography>{error.message}</Typography>;
  }

  if (isPending) {
    return (
      <SkeletonCardsList
        cardsCount={teamsCardStatisticsCount}
        width={536}
        height={78}
      />
    );
  }

  return (
    <CustomUl>
      {data?.map((item, i) => (
        <TeamCard cardNumber={i + 1} key={item.team.id} teamData={item} />
      ))}
    </CustomUl>
  );
};
