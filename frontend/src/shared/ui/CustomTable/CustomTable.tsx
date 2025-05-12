import { TableContainer, Paper, Table } from "@mui/material";
import type { FC } from "react";
import {
  CustomTableHead,
  CustomTableRow,
  CustomTableCell,
  CustomTableBody,
} from "./CustomTable.style";
import { v4 as uuidV4 } from "uuid";

type CustomTableProps = {
  headerCells: string[];
  bodyCells: (string | number)[];
};

export const CustomTable: FC<CustomTableProps> = ({
  headerCells,
  bodyCells,
}) => (
  <TableContainer component={Paper}>
    <Table aria-label="simple table">
      <CustomTableHead>
        <CustomTableRow>
          {headerCells.map((item) => (
            <CustomTableCell key={uuidV4()}>{item}</CustomTableCell>
          ))}
        </CustomTableRow>
      </CustomTableHead>
      <CustomTableBody>
        <CustomTableRow>
          {bodyCells?.map((item) => (
            <CustomTableCell key={uuidV4()}>{item}</CustomTableCell>
          ))}
        </CustomTableRow>
      </CustomTableBody>
    </Table>
  </TableContainer>
);
