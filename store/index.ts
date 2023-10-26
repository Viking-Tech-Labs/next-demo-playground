import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";

import { actionBarSlice } from "./slices/actionBar";
import { pokemonSlice } from "./slices/pokemon";

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export let store: any = null;

export default function getStore(incomingPreloadState?: RootState) {
  store = configureStore({
    reducer: {
      pokemon: pokemonSlice.reducer,
      actionBar: actionBarSlice.reducer,
    },
    preloadedState: incomingPreloadState,
  });
  return store;
}
