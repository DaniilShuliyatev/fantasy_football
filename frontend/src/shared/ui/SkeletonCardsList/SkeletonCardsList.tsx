import { Skeleton } from "@mui/material";
import type { FC } from "react";
import { SkeletonsWrapper } from "./SkeletonCardsList.style";

type SkeletonCardsListProps = {
  cardsCount: number;
  width: number;
  height: number;
};

export const SkeletonCardsList: FC<SkeletonCardsListProps> = ({
  cardsCount,
  width,
  height,
}) => {
  const skeletons = Array.from({ length: cardsCount });

  return (
    <SkeletonsWrapper>
      {skeletons.map((_, i) => (
        <Skeleton
          key={i}
          width={width}
          height={height}
          variant="rounded"
          animation="wave"
        />
      ))}
    </SkeletonsWrapper>
  );
};
