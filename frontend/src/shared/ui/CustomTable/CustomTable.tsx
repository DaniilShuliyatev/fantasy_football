import { TableContainer, Paper, Table } from "@mui/material";
import type { FC } from "react";
import {
  CustomTableHead,
  CustomTableRow,
  CustomTableCell,
  CustomTableBody,
} from "./CustomTable.style";

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
            <CustomTableCell key={item}>{item}</CustomTableCell>
          ))}
        </CustomTableRow>
      </CustomTableHead>
      <CustomTableBody>
        <CustomTableRow>
          {bodyCells?.map((item, i) => (
            <CustomTableCell key={i}>{item}</CustomTableCell>
          ))}
        </CustomTableRow>
      </CustomTableBody>
    </Table>
  </TableContainer>
);
