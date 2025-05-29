import type { FC } from "react";
import { getPlayersListInfinityQueryOptions } from "../../model";
import { Box, Typography } from "@mui/material";
import { useInfiniteQuery } from "@tanstack/react-query";
import {
  playerCardsSkeleton,
  SkeletonCardsList,
  useInfiniteScroll,
} from "../../../../shared";
import { CardsWrapper, TriggerBox } from "./PlayerCardsList.style";
import { PlayerCard } from "../PlayerCard";

export const PlayerCardsList: FC = () => {
  const year = 2022; //replace 2022 with a dynamic data with MobX integration
  const {
    data: players,
    error,
    isPending,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
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
        cardsCount={playerCardsSkeleton.count}
        width={playerCardsSkeleton.width}
        height={playerCardsSkeleton.height}
      />
    );
  }

  return (
    <CardsWrapper>
      {players?.map(
        (player) =>
          player && <PlayerCard playerData={player} key={player.player.id} />,
      )}
      <TriggerBox ref={triggerRef} />
      <Box>
        {isFetchingNextPage && (
          <SkeletonCardsList
            cardsCount={playerCardsSkeleton.count}
            width={playerCardsSkeleton.width}
            height={playerCardsSkeleton.height}
          />
        )}
      </Box>
    </CardsWrapper>
  );
};
