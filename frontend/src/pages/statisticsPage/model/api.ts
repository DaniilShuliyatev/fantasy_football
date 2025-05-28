import { $api } from "../../../shared";
import type { Season } from "./types";

type GetFilteringSeasonsProps = {
  signal: AbortSignal;
};

export const getFilteringSeasons = async ({
  signal,
}: GetFilteringSeasonsProps): Promise<Season[] | undefined> => {
  try {
    const response = await $api.get("/seasons", {
      signal,
    });

    return response.data;
  } catch (e) {
    console.error("Error when try to fetch teams by year:", e);
  }
};
