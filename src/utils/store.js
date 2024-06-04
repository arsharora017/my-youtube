import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import seachSlice from "./searchSlice";
import chatSlice from "./chatSlice";

const store = configureStore({
  reducer: {
    app: appSlice,
    search: seachSlice,
    chat: chatSlice,
  },
});

export default store;
