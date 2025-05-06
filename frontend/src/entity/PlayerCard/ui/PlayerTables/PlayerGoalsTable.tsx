import { Paper, Table, TableContainer, TableRow } from "@mui/material";
import { playerMockData } from "../../model/playerMockData";
import {
  CustomTableBody,
  CustomTableCell,
  CustomTableHead,
} from "../PlayerCard.style";
import type { FC } from "react";

export const PlayerGoalsTable: FC = () => {
  return (
    <TableContainer component={Paper} sx={{ marginTop: "8px" }}>
      <Table aria-label="simple table">
        <CustomTableHead>
          <TableRow
            sx={{
              maxHeight: "36px",
            }}
          >
            <CustomTableCell>Total</CustomTableCell>
            <CustomTableCell align="left">Conceded</CustomTableCell>
            <CustomTableCell align="left">Assists</CustomTableCell>
            <CustomTableCell align="left">Saves</CustomTableCell>
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
              {playerMockData.goals.total}
            </CustomTableCell>
            <CustomTableCell align="left">
              {playerMockData.goals.conceded}
            </CustomTableCell>
            <CustomTableCell align="left">
              {playerMockData.goals.assists}
            </CustomTableCell>
            <CustomTableCell align="left">
              {playerMockData.goals.saves}
            </CustomTableCell>
          </TableRow>
        </CustomTableBody>
      </Table>
    </TableContainer>
  );
};
