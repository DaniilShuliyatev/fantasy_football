import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import { grey } from "@mui/material/colors";

export const CustomForm = styled("form")(() => ({
  display: "flex",
  flexDirection: "column",
  width: "320px",
}));

export const CustomFormControl = styled(FormControl)(() => ({
  height: "100%",
  marginTop: "24px",
  "& .MuiAutocomplete-groupLabel": {
    backgroundColor: grey[200],
  },

  "& .css-o5oj2-MuiAutocomplete-root .MuiAutocomplete-inputRoot": {
    display: "flex",
    flexWrap: "nowrap",
  },
}));

export const CustomTextField = styled(TextField)(() => ({
  "& .MuiInputBase-input": {
    height: "12px",
    fontSize: "16px",
    lineHeight: "19px",
    fontWeight: 400,
  },
  "& label": {
    fontSize: "16px",
    lineHeight: "19px",
    fontWeight: 400,
    height: "20px",
    top: "-4px",
  },
}));

export const CustomButton = styled(Button)(() => ({
  backgroundColor: grey[300],
  color: "black",
  width: "69px",
  height: "36px",
  marginTop: "24px",
}));

export const ButtonsWrapper = styled(Box)(() => ({
  display: "flex",
  justifyContent: "flex-end",
  gap: "8px",
}));

export const CustomFormHelperText = styled(FormHelperText)(({ theme }) => ({
  color: theme.palette.error.main,
}));

export const CustomTypography = styled(Typography)(() => ({
  width: "100%",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
}));
