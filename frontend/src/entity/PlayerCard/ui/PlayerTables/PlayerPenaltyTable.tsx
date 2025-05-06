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
import { playerPenaltyHeaderCells } from "../../../../shared";

export const PlayerPenaltyTable: FC = () => {
  return (
    <CustomTableContainer component={Paper}>
      <Table aria-label="simple table">
        <CustomTableHead>
          <CustomTableRow>
            {playerPenaltyHeaderCells.map((item) => (
              <CustomTableCell key={item}>{item}</CustomTableCell>
            ))}
          </CustomTableRow>
        </CustomTableHead>
        <CustomTableBody>
          <CustomTableRow>
            <CustomTableCell>{playerMockData.penalty.won}</CustomTableCell>
            <CustomTableCell>
              {playerMockData.penalty.committed}
            </CustomTableCell>
            <CustomTableCell>{playerMockData.penalty.scored}</CustomTableCell>
            <CustomTableCell>{playerMockData.penalty.missed}</CustomTableCell>
            <CustomTableCell>{playerMockData.penalty.saved}</CustomTableCell>
          </CustomTableRow>
        </CustomTableBody>
      </Table>
    </CustomTableContainer>
  );
};
