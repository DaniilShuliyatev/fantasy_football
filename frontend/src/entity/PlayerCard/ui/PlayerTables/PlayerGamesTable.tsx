import { Paper, Table } from "@mui/material";
import { playerMockData } from "../../model/playerMockData";
import {
  CustomTableBody,
  CustomTableCell,
  CustomTableContainer,
  CustomTableHead,
  CustomTableRow,
} from "../PlayerCard.style";
import type { FC } from "react";
import { playerGamesHeaderCells } from "../../../../shared";

export const PlayerGamesTable: FC = () => {
  return (
    <CustomTableContainer component={Paper}>
      <Table aria-label="simple table">
        <CustomTableHead>
          <CustomTableRow>
            {playerGamesHeaderCells.map((item) => (
              <CustomTableCell key={item}>{item}</CustomTableCell>
            ))}
          </CustomTableRow>
        </CustomTableHead>
        <CustomTableBody>
          <CustomTableRow>
            <CustomTableCell>
              {playerMockData.games.appearances}
            </CustomTableCell>
            <CustomTableCell>{playerMockData.games.position}</CustomTableCell>
            <CustomTableCell>{playerMockData.games.rating}</CustomTableCell>
            <CustomTableCell>
              {playerMockData.games.captain ? "Yes" : "No"}
            </CustomTableCell>
          </CustomTableRow>
        </CustomTableBody>
      </Table>
    </CustomTableContainer>
  );
};
