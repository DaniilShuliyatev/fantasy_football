import { Paper, Table, TableContainer, TableRow } from "@mui/material";
import { playerMockData } from "../../model/playerMockData";
import {
  CustomTableBody,
  CustomTableCell,
  CustomTableHead,
} from "../PlayerCard.style";
import type { FC } from "react";

export const PlayerGamesTable: FC = () => {
  return (
    <TableContainer component={Paper} sx={{ marginTop: "8px" }}>
      <Table aria-label="simple table">
        <CustomTableHead>
          <TableRow
            sx={{
              maxHeight: "36px",
              maxWidth: "440px",
            }}
          >
            <CustomTableCell>Appearence</CustomTableCell>
            <CustomTableCell align="left">Position</CustomTableCell>
            <CustomTableCell align="left">Rating</CustomTableCell>
            <CustomTableCell align="left">Captain</CustomTableCell>
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
              {playerMockData.games.appearances}
            </CustomTableCell>
            <CustomTableCell align="left">
              {playerMockData.games.position}
            </CustomTableCell>
            <CustomTableCell align="left">
              {playerMockData.games.rating}
            </CustomTableCell>
            <CustomTableCell align="left">
              {playerMockData.games.captain ? "Yes" : "No"}
            </CustomTableCell>
          </TableRow>
        </CustomTableBody>
      </Table>
    </TableContainer>
  );
};
