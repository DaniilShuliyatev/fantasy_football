import { Box, Typography } from "@mui/material";
import { useInfiniteQuery } from "@tanstack/react-query";
import type { FC } from "react";
import { TeamCardStatistics } from "../TeamCardStatistics";
import { getTeamsByYearInfinityQueryOptions } from "../../model";
import {
  SkeletonCardsList,
  teamCardStatisticsSkeleton,
  useInfiniteScroll,
} from "../../../../shared";
import { CardsWrapper, TriggerBox } from "./TeamCardStatisticsList.style";

export const TeamCardStatisticsList: FC = () => {
  const year = 2021; //replace 2022 with a dynamic data with MobX integration
  const {
    data: teamCardStatistics,
    error,
    isPending,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    ...getTeamsByYearInfinityQueryOptions({ year }),
  });
  const triggerRef = useInfiniteScroll({
    callback: fetchNextPage,
  });

  if (error) {
    return (
      <Typography color="error">Error when trying to get teams data</Typography>
    );
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
    <CardsWrapper>
      {teamCardStatistics?.map(
        (teamCardStatistic) =>
          teamCardStatistic && (
            <TeamCardStatistics
              key={teamCardStatistic.team.id}
              teamData={teamCardStatistic}
            />
          ),
      )}
      <TriggerBox ref={triggerRef} />
      <Box>
        {isFetchingNextPage && (
          <SkeletonCardsList
            cardsCount={teamCardStatisticsSkeleton.count}
            width={teamCardStatisticsSkeleton.width}
            height={teamCardStatisticsSkeleton.height}
          />
        )}
      </Box>
    </CardsWrapper>
  );
};
