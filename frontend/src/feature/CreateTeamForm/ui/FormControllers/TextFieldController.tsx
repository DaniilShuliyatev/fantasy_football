import type { FC } from "react";
import { type Control, Controller } from "react-hook-form";
import {
  CustomFormControl,
  CustomTextField,
  CustomFormHelperText,
} from "../CreateTeamForm/CreateTeamForm.style";
import type { FormFields } from "../../model";

type TextFieldControllerProps = {
  control: Control<FormFields>;
  name: keyof FormFields;
  label: string;
};

export const TextFieldController: FC<TextFieldControllerProps> = ({
  control,
  name,
  label,
}) => (
  <Controller
    name={name}
    control={control}
    render={({
      field: { value, onChange, onBlur, ref },
      fieldState: { error },
    }) => (
      <CustomFormControl>
        <CustomTextField
          name={name}
          label={label}
          required
          inputRef={ref}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          error={Boolean(error)}
        />
        <CustomFormHelperText>{error?.message ?? ""}</CustomFormHelperText>
      </CustomFormControl>
    )}
  />
);
