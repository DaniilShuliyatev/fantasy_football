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
import { playerGoalsHeaderCells } from "../../../../shared";

export const PlayerGoalsTable: FC = () => {
  return (
    <CustomTableContainer component={Paper}>
      <Table aria-label="simple table">
        <CustomTableHead>
          <CustomTableRow>
            {playerGoalsHeaderCells.map((item) => (
              <CustomTableCell key={item}>{item}</CustomTableCell>
            ))}
          </CustomTableRow>
        </CustomTableHead>
        <CustomTableBody>
          <CustomTableRow>
            <CustomTableCell>{playerMockData.goals.total}</CustomTableCell>
            <CustomTableCell>{playerMockData.goals.conceded}</CustomTableCell>
            <CustomTableCell>{playerMockData.goals.assists}</CustomTableCell>
            <CustomTableCell>{playerMockData.goals.saves}</CustomTableCell>
          </CustomTableRow>
        </CustomTableBody>
      </Table>
    </CustomTableContainer>
  );
};
