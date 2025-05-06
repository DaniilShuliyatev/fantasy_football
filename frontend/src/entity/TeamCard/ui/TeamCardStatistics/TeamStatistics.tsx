import { Paper, Table, TableContainer } from "@mui/material";
import { teamMockedData } from "../../model/teamMockedData";
import {
  CustomTableBody,
  CustomTableCell,
  CustomTableHead,
  CustomTableRow,
} from "./TeamCardStatistics.style";
import type { FC } from "react";
import { teamStatisticsHeaderCells } from "../../../../shared";

export const TeamStatistics: FC = () => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <CustomTableHead>
          <CustomTableRow>
            {teamStatisticsHeaderCells.map((item) => (
              <CustomTableCell key={item}>{item}</CustomTableCell>
            ))}
          </CustomTableRow>
        </CustomTableHead>
        <CustomTableBody>
          <CustomTableRow>
            <CustomTableCell>{teamMockedData.stats.played}</CustomTableCell>
            <CustomTableCell>{teamMockedData.stats.wins}</CustomTableCell>
            <CustomTableCell>{teamMockedData.stats.draws}</CustomTableCell>
            <CustomTableCell>{teamMockedData.stats.loses}</CustomTableCell>
            <CustomTableCell>{teamMockedData.stats.goals}</CustomTableCell>
          </CustomTableRow>
        </CustomTableBody>
      </Table>
    </TableContainer>
  );
};
