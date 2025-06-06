import { useEffect, useState, type FC } from "react";
import { type SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  type FormFields,
  FormFieldsSchema,
  getCountries,
  getLeagues,
  getLineups,
  getPlayersQueryOptions,
  postFantasyTeams,
} from "../../model";
import {
  ButtonsWrapper,
  CustomButton,
  CustomForm,
} from "./CreateTeamForm.style";
import { useMutation, useQuery } from "@tanstack/react-query";
import {
  AutocompleteController,
  PlayersController,
  TextFieldController,
} from "../FormControllers";
import {
  CustomHeaderTypography,
  FetchDataModal,
  RoutePaths,
} from "../../../../shared";
import { Link, useNavigate } from "react-router";

const countryMock = "GB-ENG";
const competitionMock = {
  id: "39",
  name: "Premier League",
}; // will get mock data from TeamCardsList with MobX in next PR

type CreateTeamFormProps = {
  editTeam?: boolean;
};

export const CreateTeamForm: FC<CreateTeamFormProps> = ({ editTeam }) => {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    watch,
    setValue,
    formState: { isValid },
  } = useForm<FormFields>({
    defaultValues: {
      name: "",
      country: editTeam ? countryMock : "",
      competition: editTeam ? competitionMock.name : "",
      lineup: "",
      players: [],
    },
    mode: "onBlur",
    reValidateMode: "onBlur",
    resolver: zodResolver(FormFieldsSchema),
  });
  const defaultFormation = {
    Goalkeeper: 0,
    Defender: 0,
    Midfielder: 0,
    Attacker: 0,
  };
  const [playersFormation, setPlayersFormation] = useState(defaultFormation);
  const selectedPlayers = watch("players");
  const countryInputValue = watch("country");
  const competitionInputValue = watch("competition");
  const lineupInputValue = watch("lineup");

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => {
    setIsModalOpen(false);
    navigate(-1);
  };

  // biome-ignore lint/correctness/useExhaustiveDependencies: biome incorrectly defines the list of required dependencies
  useEffect(() => {
    if (!editTeam) setValue("competition", "");
  }, [countryInputValue]);

  // biome-ignore lint/correctness/useExhaustiveDependencies: biome incorrectly defines the list of required dependencies
  useEffect(() => {
    setValue("players", []);
  }, [countryInputValue, competitionInputValue, lineupInputValue]);

  const { data: countriesResponse, error: countryError } = useQuery({
    queryKey: ["countries"],
    queryFn: ({ signal }) => getCountries({ signal }),
  });

  const { data: lineupsResponse, error: lineupsError } = useQuery({
    queryKey: ["lineups"],
    queryFn: ({ signal }) => getLineups({ signal }),
  });

  const { data: competitionsResponse, error: competitionsError } = useQuery({
    queryKey: ["leagues"],
    queryFn: ({ signal }) => getLeagues({ signal }),
  });

  const availableCompetitionData =
    competitionsResponse?.filter(
      (competition) => competition.country.name === countryInputValue,
    ) || [];

  const availableCompetitionName = availableCompetitionData.map(
    (competition) => competition.name,
  );

  const availableCompetitionId = editTeam
    ? competitionMock.id
    : availableCompetitionData
        ?.map((competition) => competitionInputValue && competition.id)[0]
        ?.toString();

  const { data: playersResponse, error: playersError } = useQuery({
    ...getPlayersQueryOptions({
      competition: availableCompetitionId,
      country: countryInputValue,
    }),
  });

  const {
    mutate: createTeamMutation,
    isError: isCreateTeamError,
    isPending: isTeamCreating,
    isSuccess: isCreateTeamSuccess,
  } = useMutation({
    mutationFn: postFantasyTeams,
  });

  const countryNames = countriesResponse?.map((country) => country.name) || [];
  const lineupNames = lineupsResponse?.map((lineup) => lineup.name) || [];

  const editModeCountryInputCode = editTeam ? countryMock : "";
  const createModeCountryInputCode =
    countryInputValue && countriesResponse && !editTeam
      ? countriesResponse?.filter(
          (country) => countryInputValue === country.name,
        )[0].code
      : "";

  const countryInputCode = editTeam
    ? editModeCountryInputCode
    : createModeCountryInputCode;

  useEffect(() => {
    lineupsResponse?.map((lineup) => {
      if (lineup.name === lineupInputValue) {
        setPlayersFormation({
          Goalkeeper: lineup.formation.gk,
          Defender: lineup.formation.def,
          Midfielder: lineup.formation.mid,
          Attacker: lineup.formation.fwd,
        });
      }
    });
  }, [lineupInputValue, lineupsResponse]);

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    const formattedData = {
      ...data,
      country: countryInputCode,
      competition: availableCompetitionId,
      players: data.players.map((player) => player.id),
    };
    createTeamMutation({ data: formattedData });
    handleOpenModal();
  };

  const editModePlayerOptionsData =
    editTeam && playersResponse?.data ? playersResponse?.data : [];
  const createModePlayerOptionsData =
    lineupInputValue && playersResponse?.data ? playersResponse.data : [];
  const playerOptionsData = editTeam
    ? editModePlayerOptionsData
    : createModePlayerOptionsData;

  if (countryError || lineupsError || competitionsError || playersError) {
    return (
      <CustomHeaderTypography
        color="error"
        title="Error when trying to fetch data"
      />
    );
  }

  return (
    <>
      <FetchDataModal
        isModalOpen={isModalOpen}
        isError={isCreateTeamError}
        isPending={isTeamCreating}
        isSuccess={isCreateTeamSuccess}
        handleCloseModal={handleCloseModal}
        successMessage="The new team has been successfully created!"
      />
      <CustomForm noValidate onSubmit={handleSubmit(onSubmit)}>
        <TextFieldController control={control} name="name" label="Team name" />
        {editTeam ? (
          <>
            <AutocompleteController
              options={countryNames}
              control={control}
              name={"country"}
              label={"Country"}
              disabled
            />
            <AutocompleteController
              options={availableCompetitionName}
              control={control}
              name={"competition"}
              label={"Competition"}
              disabled
            />
          </>
        ) : (
          <>
            <AutocompleteController
              options={countryNames}
              control={control}
              name={"country"}
              label={"Country"}
            />
            <AutocompleteController
              options={availableCompetitionName}
              control={control}
              name={"competition"}
              label={"Competition"}
            />
          </>
        )}
        <AutocompleteController
          options={lineupNames}
          control={control}
          name={"lineup"}
          label={"Team line-up"}
        />
        <PlayersController
          control={control}
          playersFormation={playersFormation}
          playerOptionsData={playerOptionsData}
          selectedPlayers={selectedPlayers}
        />
        <ButtonsWrapper>
          <Link to={RoutePaths.fantasy_teams}>
            <CustomButton type="button">BACK</CustomButton>
          </Link>
          <CustomButton type="submit" disabled={!isValid}>
            SAVE
          </CustomButton>
        </ButtonsWrapper>
      </CustomForm>
    </>
  );
};
