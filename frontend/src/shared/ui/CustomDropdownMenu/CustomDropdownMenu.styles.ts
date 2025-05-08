import {
  Autocomplete,
  type AutocompleteProps,
  FormControl,
} from "@mui/material";
import { styled } from "@mui/material/styles";

type CustomFormControlProps = {
  width: string;
};

export const CustomFormControl = styled(FormControl, {
  shouldForwardProp: (prop) => prop !== "width",
})<CustomFormControlProps>(({ width }) => ({
  height: "100%",
  width,
}));

export const CustomAutoComplete = styled(
  Autocomplete as React.ComponentType<
    AutocompleteProps<string, false, false, false>
  >,
)(() => ({
  "& .MuiAutocomplete-inputRoot": {
    height: "40px",
    fontSize: "16px",
    lineHeight: "19px",
    fontWeight: 400,
    textAlign: "center",
  },
  "& label": {
    fontSize: "16px",
    lineHeight: "19px",
    fontWeight: 400,
    height: "20px",
    top: "-4px",
  },
}));
