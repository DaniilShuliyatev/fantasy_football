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
import { playerCardsHeaderCells } from "../../../../shared";

export const PlayerCardsTable: FC = () => {
  return (
    <CustomTableContainer component={Paper}>
      <Table aria-label="simple table">
        <CustomTableHead>
          <CustomTableRow>
            {playerCardsHeaderCells.map((item) => (
              <CustomTableCell key={item}>{item}</CustomTableCell>
            ))}
          </CustomTableRow>
        </CustomTableHead>
        <CustomTableBody>
          <CustomTableRow>
            <CustomTableCell>{playerMockData.cards.yellow}</CustomTableCell>
            <CustomTableCell>{playerMockData.cards.yellowred}</CustomTableCell>
            <CustomTableCell>{playerMockData.cards.red}</CustomTableCell>
          </CustomTableRow>
        </CustomTableBody>
      </Table>
    </CustomTableContainer>
  );
};
