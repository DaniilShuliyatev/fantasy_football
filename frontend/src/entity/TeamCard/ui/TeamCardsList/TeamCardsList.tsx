import { Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import type { FC } from "react";
import {
  SkeletonCardsList,
  teamCardStatisticsSkeleton,
} from "../../../../shared";
import { getTeamsByYear } from "../../model";
import { CustomUl } from "./TeamCardsList.style";
import { TeamCard } from "../TeamCard";

export const TeamCardsList: FC = () => {
  const year = 2022; //replace 2022 with a dynamic data with MobX integration
  const {
    data: teamCards,
    error,
    isPending,
  } = useQuery({
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
        cardsCount={teamCardStatisticsSkeleton.count}
        width={teamCardStatisticsSkeleton.width}
        height={teamCardStatisticsSkeleton.height}
      />
    );
  }

  return (
    <CustomUl>
      {teamCards?.map((teamCard, i) => (
        <TeamCard
          cardNumber={i + 1}
          key={teamCard.team.id}
          teamData={teamCard}
        />
      ))}
    </CustomUl>
  );
};
