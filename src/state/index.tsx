import { configureStore } from "@reduxjs/toolkit";
import { save, load } from "redux-localstorage-simple";
import { updateVersion } from "./global/actions";

import user from "./user/reducer";

const PERSISTED_KEYS: string[] = ["user"];

const store = configureStore({
  reducer: {
    user,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: false,
    }).concat(
      save({
        states: PERSISTED_KEYS
      })
    ),
  preloadedState: load({
    states: PERSISTED_KEYS,
    disableWarnings: true,
  }),
});

store.dispatch(updateVersion());

export default store;

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
