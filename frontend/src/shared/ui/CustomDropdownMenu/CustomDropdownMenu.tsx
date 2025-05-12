import { TextField } from "@mui/material";
import { useState, type FC } from "react";
import {
  CustomAutoComplete,
  CustomFormControl,
} from "./CustomDropdownMenu.styles";

export type DropdownMenuLabel = {
  emptyInputLabel: string;
  inputWithValueLabel: string;
};

type DropdownMenuProps = {
  width: string;
  Labels: DropdownMenuLabel;
  filterValues: string[];
};

export const CustomDropdownMenu: FC<DropdownMenuProps> = ({
  width,
  Labels,
  filterValues,
}) => {
  const [value, setValue] = useState<string | null>(null);
  const [label, setLabel] = useState(Labels.emptyInputLabel);

  const handleSelectChange = (_: unknown, newValue: string | null) => {
    setValue(newValue);
    setLabel(Labels.inputWithValueLabel);
  };

  const handleSelectOpen = () => {
    setLabel(Labels.inputWithValueLabel);
  };

  const handleSelectBlur = () => {
    if (value === null) {
      setLabel(Labels.emptyInputLabel);
    } else {
      setLabel("");
    }
  };

  return (
    <CustomFormControl width={width}>
      <CustomAutoComplete
        disablePortal
        options={filterValues}
        value={value}
        renderInput={(params: object) => (
          <TextField {...params} label={label} />
        )}
        onChange={handleSelectChange}
        onOpen={handleSelectOpen}
        onBlur={handleSelectBlur}
      />
    </CustomFormControl>
  );
};
