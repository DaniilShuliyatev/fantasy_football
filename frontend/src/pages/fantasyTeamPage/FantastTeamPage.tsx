import type { FC } from "react";
import {
  CustomAddCircleOutlineIcon,
  HeaderText,
  HeaderWrapper,
} from "./FantasyTeamPage.style";
import { Link } from "react-router";
import { RoutePaths } from "../../shared";
import { TeamCardsList } from "../../entity";

const FantasyTeamPage: FC = () => (
  <>
    <HeaderWrapper>
      <HeaderText component={"h2"}>My teams</HeaderText>
      <Link to={RoutePaths.create_team}>
        <CustomAddCircleOutlineIcon />
      </Link>
    </HeaderWrapper>
    <TeamCardsList />
  </>
);

export default FantasyTeamPage;
