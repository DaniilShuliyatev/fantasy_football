import { FormControl, type FormControlProps } from "@mui/material";
import { styled } from "@mui/material/styles";

interface CustomFormControlProps extends FormControlProps {
    width: string;
}

export const CustomFormControl = styled(FormControl, {
    shouldForwardProp: (prop) => prop !== "width",
})<CustomFormControlProps>(({ width }) => ({
    height: "100%",
    width,
}));
