import { TextField } from "@mui/material";
import { useState, type FC } from "react";
import {
  CustomAutoComplete,
  CustomFormControl,
} from "./CustomDropdownMenu.styles";

type DropdownMenuProps = {
  width: string;
  label: string;
  placeholder: string;
  filterValues: string[] | [];
};

export const CustomDropdownMenu: FC<DropdownMenuProps> = ({
  width,
  label,
  placeholder,
  filterValues,
}) => {
  const [value, setValue] = useState<string | null>(null);

  const handleSelectChange = (_: unknown, newValue: string | null) => {
    setValue(newValue);
  };

  return (
    <CustomFormControl width={width}>
      <CustomAutoComplete
        disablePortal
        options={filterValues}
        value={value}
        renderInput={(params: object) => (
          <TextField {...params} label={label} placeholder={placeholder} />
        )}
        onChange={handleSelectChange}
      />
    </CustomFormControl>
  );
};
