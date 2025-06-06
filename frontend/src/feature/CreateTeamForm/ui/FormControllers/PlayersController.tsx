import { Autocomplete, Checkbox } from "@mui/material";
import type { FC } from "react";
import { type Control, Controller } from "react-hook-form";
import type { Player, PlayerPositions } from "../../../../entity";
import {
  CustomFormControl,
  CustomTypography,
  CustomTextField,
  CustomFormHelperText,
} from "../CreateTeamForm/CreateTeamForm.style";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import type { FormFields, PlayerOptions } from "../../model";
import { playerPositionsOrder } from "../../../../shared";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

type PlayersControllerProps = {
  control: Control<FormFields>;
  playerOptionsData: Player[] | [];
  selectedPlayers: PlayerOptions | [];
  playersFormation: { [n in PlayerPositions]: number };
};

export const PlayersController: FC<PlayersControllerProps> = ({
  control,
  playerOptionsData,
  selectedPlayers,
  playersFormation,
}) => {
  const playerOptions = playerOptionsData
    ?.map((player) => {
      if (player.games.position) {
        return {
          position: player.games.position,
          name: player.player.name,
          id: player.player.id,
        };
      }
    })
    .sort((a, b) =>
      playerPositionsOrder[a?.position as PlayerPositions] >
      playerPositionsOrder[b?.position as PlayerPositions]
        ? 1
        : -1,
    );
  return (
    <Controller
      name="players"
      control={control}
      defaultValue={[]}
      render={({
        field: { value, onChange, onBlur, ref },
        fieldState: { error },
      }) => (
        <CustomFormControl>
          <Autocomplete
            multiple
            value={value}
            options={playerOptions}
            groupBy={(option) => option?.position || ""}
            getOptionLabel={(option) => option?.name || ""}
            disablePortal
            onChange={(_, newValue) => onChange(newValue)}
            disableCloseOnSelect
            isOptionEqualToValue={(option, value) =>
              option?.name === value?.name
            }
            getOptionDisabled={(option) => {
              if (option?.position) {
                const countForPosition = selectedPlayers.filter(
                  (player) => player.position === option.position,
                ).length;

                return (
                  countForPosition >=
                    playersFormation[option.position as PlayerPositions] &&
                  !selectedPlayers.some((player) => player.id === option.id)
                );
              }
              return false;
            }}
            renderTags={() => {
              return (
                <CustomTypography>
                  {value.map((option) => option.name).join(", ")}
                </CustomTypography>
              );
            }}
            renderOption={(props, option, { selected }) => {
              const { key, ...optionProps } = props;
              return (
                <li key={option?.id} {...optionProps}>
                  <Checkbox
                    icon={icon}
                    checkedIcon={checkedIcon}
                    checked={selected}
                  />
                  {option?.name}
                </li>
              );
            }}
            renderInput={(params) => (
              <CustomTextField
                {...params}
                name="players"
                label="Players"
                required
                inputRef={ref}
                onBlur={onBlur}
                error={Boolean(error)}
              />
            )}
          />
          <CustomFormHelperText>{error?.message ?? ""}</CustomFormHelperText>
        </CustomFormControl>
      )}
    />
  );
};
