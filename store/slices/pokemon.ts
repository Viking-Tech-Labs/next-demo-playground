import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "store";

export type Layout = "grid" | "list";

export interface Pokemon {
  id: number;
  name: string;
  image: string;
}

export type PokemonState = {
  pokemon: Pokemon[];
  filteredPokemon: Pokemon[];
  layout: Layout;
  pending: boolean;
  error: boolean;
};

const initialState: PokemonState = {
  pokemon: [],
  filteredPokemon: [],
  layout: "grid",
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
    setFilteredPokemon(state, action: PayloadAction<string>) {
      state.filteredPokemon = state.pokemon.filter(
        ({ name, id }) =>
          name.toLowerCase().includes(action.payload.toLowerCase()) ||
          String(id).includes(action.payload.toLowerCase()),
      );
    },
    setLayout(state, action: PayloadAction<Layout>) {
      state.layout = action.payload;
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

export const { setFilteredPokemon, setLayout } = pokemonSlice.actions;
export const selectLayout = (state: RootState) => state.pokemon.layout;
export const selectFilteredPokemon = (state: RootState) =>
  state.pokemon.filteredPokemon;
