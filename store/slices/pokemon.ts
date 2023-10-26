import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "store";

interface Pokemon {
  id: number;
  name: string;
  image: string;
}

export type PokemonState = {
  pokemon: Pokemon[];
  search: string;
  filteredPokemon: Pokemon[];
  pending: boolean;
  error: boolean;
};

const initialState: PokemonState = {
  pokemon: [],
  filteredPokemon: [],
  search: "",
  pending: false,
  error: false,
};

export const getPokemon = createAsyncThunk("pokemon/getPokemon", async () => {
  const response = await await fetch(
    "https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json",
  );
  return await response.json();
});

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
      state.filteredPokemon = state.pokemon.filter(({ name }) =>
        name.toLowerCase().includes(state.search.toLowerCase()),
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPokemon.pending, (state) => {
        state.pending = true;
      })
      .addCase(getPokemon.fulfilled, (state, { payload }) => {
        state.pending = false;
        state.pokemon = payload;
        state.filteredPokemon = payload;
      })
      .addCase(getPokemon.rejected, (state) => {
        state.pending = false;
        state.error = true;
      });
  },
});

export const { setSearch } = pokemonSlice.actions;
export const selectSearch = (state: RootState) => state.pokemon.search;
export const selectFilteredPokemon = (state: RootState) =>
  state.pokemon.filteredPokemon;
