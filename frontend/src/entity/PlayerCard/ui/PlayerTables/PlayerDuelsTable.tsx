import { Paper, Table, TableContainer, TableRow } from "@mui/material";
import { playerMockData } from "../../model/playerMockData";
import {
  CustomTableBody,
  CustomTableCell,
  CustomTableHead,
} from "../PlayerCard.style";
import type { FC } from "react";

export const PlayerDuelsTable: FC = () => {
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
            <CustomTableCell align="left">Won</CustomTableCell>
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
              {playerMockData.duels.total}
            </CustomTableCell>
            <CustomTableCell align="left">
              {playerMockData.duels.won}
            </CustomTableCell>
          </TableRow>
        </CustomTableBody>
      </Table>
    </TableContainer>
  );
};
