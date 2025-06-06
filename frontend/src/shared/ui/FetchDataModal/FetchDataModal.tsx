import type { FC } from "react";
import { ModalBody, ModalTextWrapper } from "./FetchDataModal.style";
import { Modal, Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

type FetchDataModalProps = {
  isModalOpen: boolean;
  handleCloseModal: () => void;
  isSuccess: boolean;
  isError: boolean;
  isPending: boolean;
  successMessage: string;
};

export const FetchDataModal: FC<FetchDataModalProps> = ({
  isModalOpen,
  handleCloseModal,
  isSuccess,
  isError,
  isPending,
  successMessage,
}) => (
  <Modal
    open={isModalOpen}
    onClose={handleCloseModal}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <ModalBody>
      {isSuccess && (
        <ModalTextWrapper>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            color="success"
          >
            {successMessage}
          </Typography>
        </ModalTextWrapper>
      )}
      {isError && (
        <ModalTextWrapper>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            color="error"
          >
            Error sending data, please try again later
          </Typography>
        </ModalTextWrapper>
      )}
      {isPending && (
        <ModalTextWrapper>
          <CircularProgress />
        </ModalTextWrapper>
      )}
    </ModalBody>
  </Modal>
);
