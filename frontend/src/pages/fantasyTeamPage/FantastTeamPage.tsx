import type { FC } from "react";
import { TeamCard, teamMockedData } from "../../entity";
import {
  CustomAddCircleOutlineIcon,
  CustomUl,
  HeaderText,
  HeaderWrapper,
} from "./FantasyTeamPage.style";
import { Link } from "react-router";
import { RoutePaths } from "../../shared";

const resp = ["data1", "data2", "data3", "data4", "data5"];

const FantasyTeamPage: FC = () => (
  <>
    <HeaderWrapper>
      <HeaderText component={"h2"}>My teams</HeaderText>
      <Link to={RoutePaths.create_team}>
        <CustomAddCircleOutlineIcon />
      </Link>
    </HeaderWrapper>
    <CustomUl>
      {resp.map((item, i) => (
        <TeamCard cardNumber={i + 1} key={item} teamData={teamMockedData} />
      ))}
    </CustomUl>
  </>
);

export default FantasyTeamPage;
