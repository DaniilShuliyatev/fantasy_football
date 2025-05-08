import { TextField } from "@mui/material";
import { useState, type FC } from "react";
import {
  CustomAutoComplete,
  CustomFormControl,
} from "./CustomDropdownMenu.styles";

type DropdownMenuLabel = {
  first: string;
  second: string;
};

type DropdownMenuProps = {
  width: string;
  Labels: DropdownMenuLabel;
  filterValues: string[];
};

export const CustomDropdownMenu: FC<DropdownMenuProps> = (props) => {
  const { width, Labels, filterValues } = props;
  const [value, setValue] = useState<string | null>(null);
  const [label, setLabel] = useState(Labels.first);

  const handleSelectChange = (
    event: React.SyntheticEvent<Element, Event>,
    newValue: string | null,
  ) => {
    setValue(newValue);
    setLabel(Labels.second);
  };

  const handleSelectOpen = () => {
    setLabel(Labels.second);
  };

  const handleSelectBlur = () => {
    if (value === null) {
      setLabel(Labels.first);
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
