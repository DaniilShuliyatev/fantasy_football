import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { ButtonGroup } from '@mui/material';

interface SwitchButtonProps {
  active: boolean;
}

export const SwitchButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== 'active',
})<SwitchButtonProps>(({ active }) => ({
  fontSize: "13px",
  height: "30px",
  width: "109px",
  fontWeight: 500,
  lineHeight: "22px",
  backgroundColor: active ? "#2196F380" : "transparent",
  transition: ".5s all",
}));

export const CustomButtonGroup = styled(ButtonGroup)(() => ({
  "&&": {
    marginTop: "31px"
  },
}));

export const PickYearWrapper = styled(ButtonGroup)(() => ({
  "&&": {
    marginTop: "24px",
    display: 'block'
  },
}));

