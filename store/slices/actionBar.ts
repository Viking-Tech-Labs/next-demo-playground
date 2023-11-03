import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "store";

import { setFilteredPokemon } from "./pokemon";

type PokemonType =
  | "all"
  | "normal"
  | "fire"
  | "water"
  | "grass"
  | "electric"
  | "ice"
  | "fighting"
  | "poison"
  | "ground"
  | "flying"
  | "psychic"
  | "bug"
  | "rock"
  | "ghost"
  | "dragon"
  | "dark"
  | "steel"
  | "fairy";

export type ActionBarState = {
  search: string;
  type: PokemonType;
  gen: string;
};

const initialState: ActionBarState = {
  search: "", // should search by name and id
  type: "all",
  gen: "",
};

export const actionBarSlice = createSlice({
  name: "actionBar",
  initialState,
  reducers: {
    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
    setType(state, action: PayloadAction<PokemonType>) {
      state.type = action.payload;
    },
    setGen(state, action: PayloadAction<string>) {
      state.gen = action.payload;
    },
  },
});

// Thunk action creator
export const setSearchAndFilter: any = (search: string) => {
  return (dispatch: AppDispatch, getState: RootState) => {
    dispatch(setSearch(search)); // Set the date range in ActionBarSlice

    const state = getState();
    const stateSearch = state.actionBar.search;

    dispatch(setFilteredPokemon(stateSearch)); // Update filteredData in DataSlice
  };
};

export const { setSearch } = actionBarSlice.actions;
export const selectSearch = (state: RootState) => state.actionBar.search;
export const selectFilteredPokemon = (state: RootState) =>
  state.pokemon.filteredPokemon;
