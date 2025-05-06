import { Paper, Table, TableContainer, TableRow } from "@mui/material";
import { playerMockData } from "../../model/playerMockData";
import {
  CustomTableBody,
  CustomTableCell,
  CustomTableHead,
} from "../PlayerCard.style";
import type { FC } from "react";

export const PlayerPenaltyTable: FC = () => {
  return (
    <TableContainer component={Paper} sx={{ marginTop: "8px" }}>
      <Table aria-label="simple table">
        <CustomTableHead>
          <TableRow
            sx={{
              maxHeight: "36px",
            }}
          >
            <CustomTableCell>Won</CustomTableCell>
            <CustomTableCell align="left">Commited</CustomTableCell>
            <CustomTableCell align="left">Scored</CustomTableCell>
            <CustomTableCell align="left">Missed</CustomTableCell>
            <CustomTableCell align="left">Saved</CustomTableCell>
          </TableRow>
        </CustomTableHead>
        <CustomTableBody>
          <TableRow
            sx={{
              "&:last-child td, &:last-child th": { border: 0 },
              height: "36px",
            }}
          >
            <CustomTableCell align="left">
              {playerMockData.penalty.won}
            </CustomTableCell>
            <CustomTableCell align="left">
              {playerMockData.penalty.committed}
            </CustomTableCell>
            <CustomTableCell align="left">
              {playerMockData.penalty.scored}
            </CustomTableCell>
            <CustomTableCell align="left">
              {playerMockData.penalty.missed}
            </CustomTableCell>
            <CustomTableCell align="left">
              {playerMockData.penalty.saved}
            </CustomTableCell>
          </TableRow>
        </CustomTableBody>
      </Table>
    </TableContainer>
  );
};
