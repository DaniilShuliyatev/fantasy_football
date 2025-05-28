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
  const arr: number[] = [];
  arr.length = cardsCount;
  arr.fill(0);

  return (
    <SkeletonsWrapper>
      {arr.map((_, i) => (
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
