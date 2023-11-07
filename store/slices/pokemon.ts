import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "store";

export type Layout = "grid" | "list";

export interface Pokemon {
  id: number;
  name: string;
  image: string;
}

export type PokemonState = {
  page: number;
  pageLimit: number;
  areAllLoaded: boolean;
  pokemon: Pokemon[];
  layout: Layout;
  pending: boolean;
  error: boolean;
};

const initialState: PokemonState = {
  page: 0,
  pageLimit: 20,
  areAllLoaded: false,
  pokemon: [],
  layout: "grid",
  pending: false,
  error: false,
};

export const getPokemon = createAsyncThunk(
  "pokemon/getPokemon",
  async (_, thunkAPI: any) => {
    try {
      const { isPending, areAllLoaded, page, pageLimit } =
        thunkAPI.getState().pokemon;

      if (isPending || areAllLoaded) return;

      const response = await fetch(
        `http://localhost:3000/api/pokemon?page=${page}&limit=${pageLimit}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
      return await response.json();
    } catch (e: any) {
      const message = e.response.data.message || e.toString();
      return thunkAPI.rejectWithValue(message);
    }
  },
);

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    // setPokemon(state, action: PayloadAction<string>) {
    //   state.pokemon = state.pokemon.filter(
    //     ({ name, id }) =>
    //       name.toLowerCase().includes(action.payload.toLowerCase()) ||
    //       String(id).includes(action.payload.toLowerCase()),
    //   );
    // },
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
        state.pokemon = state.pokemon.concat(payload.data);
        state.areAllLoaded = payload.count >= payload.data;
        state.page++;
      })
      .addCase(getPokemon.rejected, (state) => {
        state.pending = false;
        state.error = true;
      });
  },
});

export const { setLayout } = pokemonSlice.actions;
export const selectLayout = (state: RootState) => state.pokemon.layout;
export const selectPokemon = (state: RootState) => state.pokemon.pokemon;
