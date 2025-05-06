import {
  InputLabel,
  MenuItem,
  Select,
  type SelectChangeEvent,
} from "@mui/material";
import { useState, type FC } from "react";
import { CustomFormControl } from "./CustomDropdownMenu.styles";

interface Label {
  first: string;
  second: string;
}

const menuProps = {
  PaperProps: {
    style: {
      maxHeight: "360px",
      width: "36px",
    },
  },
};

type DropdownMenuProps = {
  width: string;
  Labels: Label;
  filteringValues: number[];
};

export const CustomDropdownMenu: FC<DropdownMenuProps> = (props) => {
  const { width, Labels, filteringValues } = props;
  const [value, setValue] = useState<string>("");
  const [label, setLabel] = useState(Labels.first);

  const onHandleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value as string);
    setLabel(Labels.second);
  };

  const onHandleOpen = () => {
    setLabel(Labels.second);
  };

  const onHandleBlure = () => {
    if (value === "") {
      setLabel(Labels.first);
    }
  };

  return (
    <CustomFormControl width={width}>
      <InputLabel id="demo-simple-select-label">{label}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={value}
        label="Year"
        onChange={onHandleChange}
        onOpen={onHandleOpen}
        onBlur={onHandleBlure}
        MenuProps={menuProps}
      >
        <MenuItem value="">None</MenuItem>
        {filteringValues.map((value, i) => (
          <MenuItem key={i} value={value}>
            {value}
          </MenuItem>
        ))}
      </Select>
    </CustomFormControl>
  );
};
