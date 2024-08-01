import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TeamWithDrivers } from "@/types/common";
import { drivers } from "@/data/drivers";
import { teams } from "@/data/teams";
import buildGrid from "@/utils/buildGrid";

const initialState: TeamWithDrivers[] = buildGrid(teams, drivers);

const gridSlice = createSlice({
  name: "grid",
  initialState,
  reducers: {
    removeDriver: (
      state,
      action: PayloadAction<{ teamId: number; driverId: number }>
    ) => {
      const { teamId, driverId } = action.payload;
      const team = state.find((team) => team.id === teamId);
      if (team) {
        team.drivers = team.drivers.filter((driver) => driver.id !== driverId);
      }
    },
  },
});

export const { removeDriver } = gridSlice.actions;
export default gridSlice.reducer;
