import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "store";

import { Pokemon } from "./pokemon";

export type ActionBarState = {
  trainerId: string;
  name: string;
  team: Pokemon[];
  pokemonInReserve: Pokemon[];
  berries: string[];
  pokedollars: number;
};

const initialState: Partial<ActionBarState> = {};

export const trainerSlice = createSlice({
  name: "trainer",
  initialState,
  reducers: {
    setTrainer(state, action: PayloadAction<any>) {
      state.team = action.payload;
    },

    setTeam(state, action: PayloadAction<Pokemon[]>) {
      state.team = action.payload;
    },
    setPokedollars(state, action: PayloadAction<number>) {
      state.pokedollars = action.payload;
    },
  },
});

export const { setTeam, setPokedollars, setTrainer } = trainerSlice.actions;
export const selectTeam = (state: RootState) => state.trainer.search;
