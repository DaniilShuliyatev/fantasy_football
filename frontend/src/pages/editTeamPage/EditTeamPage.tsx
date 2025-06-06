import type { FC } from "react";
import { CustomHeaderTypography } from "../../shared";
import { CreateTeamForm } from "../../feature";

const EditTeamPage: FC = () => (
  <>
    <CustomHeaderTypography title="Edit team" />
    <CreateTeamForm editTeam />
  </>
);

export default EditTeamPage;
