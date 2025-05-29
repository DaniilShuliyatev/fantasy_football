import { TextField } from "@mui/material";
import { useEffect, useState, type FC } from "react";
import {
  CustomAutoComplete,
  CustomFormControl,
} from "./CustomDropdownMenu.styles";
import { useSearchParams } from "react-router";

type DropdownMenuProps = {
  width: string;
  label: string;
  placeholder: string;
  defaultValue: string;
  filterValues: string[];
};

export const CustomDropdownMenu: FC<DropdownMenuProps> = ({
  width,
  label,
  placeholder,
  defaultValue,
  filterValues,
}) => {
  const [value, setValue] = useState<string | undefined>(defaultValue);
  const [searchParams, setSearchParams] = useSearchParams();
  const handleSelectChange = (_: unknown, newValue: string | undefined) => {
    setValue(newValue);
  };

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    const newValue = value ? value : defaultValue;
    params.set("year", newValue);
    setSearchParams(params);
  }, [defaultValue, searchParams, setSearchParams, value]);

  return (
    <CustomFormControl width={width}>
      <CustomAutoComplete
        disablePortal
        options={filterValues}
        value={value}
        disableClearable
        renderInput={(params: object) => (
          <TextField {...params} label={label} placeholder={placeholder} />
        )}
        onChange={handleSelectChange}
      />
    </CustomFormControl>
  );
};
