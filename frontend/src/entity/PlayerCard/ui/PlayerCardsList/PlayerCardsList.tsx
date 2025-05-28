import type { FC } from "react";
import { getPlayersListInfinityQueryOptions } from "../../model";
import { Box, Typography } from "@mui/material";
import { useInfiniteQuery } from "@tanstack/react-query";
import {
  playersCardsCount,
  SkeletonCardsList,
  useInfiniteScroll,
} from "../../../../shared";
import { CardsWrapper, TriggerBox } from "./PlayerCardsList.style";
import { PlayerCard } from "../PlayerCard";

export const PlayerCardsList: FC = () => {
  const year = 2022; //replace 2022 with a dynamic data with MobX integration
  const { data, error, isPending, fetchNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      ...getPlayersListInfinityQueryOptions({ year }),
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
        cardsCount={playersCardsCount}
        width={928}
        height={462}
      />
    );
  }

  return (
    <CardsWrapper>
      {data?.map((item, i) => item && <PlayerCard playerData={item} key={i} />)}
      <TriggerBox ref={triggerRef} />
      <Box>
        {isFetchingNextPage && (
          <SkeletonCardsList
            cardsCount={playersCardsCount}
            width={928}
            height={462}
          />
        )}
      </Box>
    </CardsWrapper>
  );
};
