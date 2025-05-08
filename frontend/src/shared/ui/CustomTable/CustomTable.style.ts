import { TableCell, TableHead, TableBody, TableRow } from "@mui/material";
import { styled } from '@mui/material/styles';

export const CustomTableCell = styled(TableCell)(() => ({
    "&&": {
        padding: "6px 16px",
        fontSize: "14px",
        lineHeight: "24px",
    },
}));

export const CustomTableHead = styled(TableHead)(({ theme }) => ({
    "&&": {
        backgroundColor: theme.palette.background.paper,
    },
}));
export const CustomTableBody = styled(TableBody)(() => ({
    "&&": {
        backgroundColor: "#ffff",
    },
}));

export const CustomTableRow = styled(TableRow)(() => ({
    "&&": {
        maxHeight: "36px",
    },
}));
