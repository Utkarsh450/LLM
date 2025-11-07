import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducer";
import chatReducer from "./reducers/chatReducer";
import messageReducer from "./reducers/MessageReducer";

export const store = configureStore({
  reducer: {
    user: userReducer,
    chat: chatReducer,
    messages: messageReducer,
  },
});

// ✅ Export RootState and AppDispatch for typed hooks
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
