import { Box, Typography } from "@mui/material";
import { useInfiniteQuery } from "@tanstack/react-query";
import type { FC } from "react";
import { TeamCardStatistics } from "../TeamCardStatistics";
import { getTeamsByYearInfinityQueryOptions } from "../../model";
import {
  SkeletonCardsList,
  teamsCardStatisticsCount,
  useInfiniteScroll,
} from "../../../../shared";
import { CardsWrapper, TriggerBox } from "./TeamCardStatisticsList.style";

export const TeamCardStatisticsList: FC = () => {
  const year = 2021; //replace 2022 with a dynamic data with MobX integration
  const { data, error, isPending, fetchNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      ...getTeamsByYearInfinityQueryOptions({ year }),
    });
  const triggerRef = useInfiniteScroll({
    callback: fetchNextPage,
  });

  if (error) {
    return <Typography>{error.message}</Typography>;
  }

  if (isPending) {
    return (
      <SkeletonCardsList
        cardsCount={teamsCardStatisticsCount}
        width={536}
        height={267}
      />
    );
  }

  return (
    <CardsWrapper>
      {data?.map(
        (item, i) => item && <TeamCardStatistics key={i} teamData={item} />,
      )}
      <TriggerBox ref={triggerRef} />
      <Box>
        {isFetchingNextPage && (
          <SkeletonCardsList
            cardsCount={teamsCardStatisticsCount}
            width={536}
            height={267}
          />
        )}
      </Box>
    </CardsWrapper>
  );
};
