import { Autocomplete } from "@mui/material";
import { type Control, Controller } from "react-hook-form";
import {
  CustomFormControl,
  CustomTextField,
  CustomFormHelperText,
} from "../CreateTeamForm/CreateTeamForm.style";
import type { FC } from "react";
import type { FormFields } from "../../model";

type AutocompleteControllerProps = {
  control: Control<FormFields>;
  options: string[];
  name: keyof FormFields;
  label: string;
  disabled?: boolean;
  defaultValue?: string;
};

export const AutocompleteController: FC<AutocompleteControllerProps> = ({
  control,
  options,
  name,
  label,
  disabled,
}) => (
  <Controller
    name={name}
    control={control}
    render={({
      field: { value, onChange, onBlur, ref },
      fieldState: { error },
    }) => (
      <CustomFormControl>
        <Autocomplete
          disablePortal
          options={options}
          value={typeof value === "string" ? value : undefined}
          onChange={(_, value) => onChange(value)}
          disableClearable
          disabled={disabled}
          renderInput={(params: object) => (
            <CustomTextField
              {...params}
              name={name}
              label={label}
              required
              inputRef={ref}
              onBlur={onBlur}
              error={Boolean(error)}
            />
          )}
        />
        <CustomFormHelperText>{error?.message ?? ""}</CustomFormHelperText>
      </CustomFormControl>
    )}
  />
);
