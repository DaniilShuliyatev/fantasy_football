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
import { playerDuelsHeaderCells } from "../../../../shared";

export const PlayerDuelsTable: FC = () => {
  return (
    <CustomTableContainer component={Paper}>
      <Table aria-label="simple table">
        <CustomTableHead>
          <CustomTableRow>
            {playerDuelsHeaderCells.map((item) => (
              <CustomTableCell key={item}>{item}</CustomTableCell>
            ))}
          </CustomTableRow>
        </CustomTableHead>
        <CustomTableBody>
          <CustomTableRow>
            <CustomTableCell>{playerMockData.duels.total}</CustomTableCell>
            <CustomTableCell>{playerMockData.duels.won}</CustomTableCell>
          </CustomTableRow>
        </CustomTableBody>
      </Table>
    </CustomTableContainer>
  );
};
