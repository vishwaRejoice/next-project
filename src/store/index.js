import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage/session";
import authSlice from "./ApiSlice/authSlice";
import cartSlice from "./ApiSlice/cartSlice";

const reducers = combineReducers({
  auth: authSlice,
  cart:cartSlice
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth","cart"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  // devTools: false,
});

export const persistor = persistStore(store);
export default store;
