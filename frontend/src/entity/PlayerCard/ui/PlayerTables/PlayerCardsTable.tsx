import { Paper, Table, TableContainer, TableRow } from "@mui/material";
import { playerMockData } from "../../model/playerMockData";
import {
  CustomTableBody,
  CustomTableCell,
  CustomTableHead,
} from "../PlayerCard.style";
import type { FC } from "react";

export const PlayerCardsTable: FC = () => {
  return (
    <TableContainer component={Paper} sx={{ marginTop: "8px" }}>
      <Table aria-label="simple table">
        <CustomTableHead>
          <TableRow
            sx={{
              maxHeight: "36px",
            }}
          >
            <CustomTableCell>Yellow</CustomTableCell>
            <CustomTableCell align="left">Yellow-Red</CustomTableCell>
            <CustomTableCell align="left">Red</CustomTableCell>
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
              {playerMockData.cards.yellow}
            </CustomTableCell>
            <CustomTableCell align="left">
              {playerMockData.cards.yellowred}
            </CustomTableCell>
            <CustomTableCell align="left">
              {playerMockData.cards.red}
            </CustomTableCell>
          </TableRow>
        </CustomTableBody>
      </Table>
    </TableContainer>
  );
};
