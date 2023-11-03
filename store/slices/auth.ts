import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "store";

import { setTrainer } from "./trainer";

export type ActionBarState = {
  token: string | null;
};

const initialState: ActionBarState = {
  token: null,
};

export const trainerSlice = createSlice({
  name: "trainer",
  initialState,
  reducers: {
    setCredentials(state, action: PayloadAction<ActionBarState>) {
      const { token } = action.payload;
      state.token = token;
    },
    logOut: (state) => {
      state.token = null;
    },
  },
});

// Thunk action creator
export const setCredentialsAndLogin: any = (token: string) => {
  return (dispatch: AppDispatch, getState: RootState) => {
    dispatch(setCredentials(token)); // Set the date range in ActionBarSlice

    const state = getState(); // Get the current Redux state
    const stateSearch = state.actionBar.search;

    dispatch(setTrainer(stateSearch)); // Update filteredData in DataSlice
  };
};

export const { setCredentials, logOut } = trainerSlice.actions;
export const selectTeam = (state: RootState) => state.trainer.search;
