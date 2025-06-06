import type { FC } from "react";
import { CustomHeaderTypography } from "../../shared";
import { CreateTeamForm } from "../../feature";

const CreateTeamPage: FC = () => (
  <>
    <CustomHeaderTypography title="Create team" />
    <CreateTeamForm />
  </>
);

export default CreateTeamPage;
