import { Box, styled } from "@mui/material";

export const ModalBody = styled(Box)(() => ({
  "&&": {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    backgroundColor: "#ffff",
    boxShadow: 24,
    padding: "15px",
  },
}));

export const ModalTextWrapper = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
}));
