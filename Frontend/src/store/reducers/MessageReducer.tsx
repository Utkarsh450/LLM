import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface MessageItem {
  messageId: string;
  chatId: string;
  role: "user" | "assistant";
  content: string;
  createdAt?: number;
}

interface MessageState {
  messages: MessageItem[];
  loading: boolean;
  error: string | null;
}

const initialState: MessageState = {
  messages: [],
  loading: false,
  error: null,
};

const messageSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    // ✅ store messages when chat is loaded
    addManyMessages: (state, action: PayloadAction<MessageItem[]>) => {
      state.messages = action.payload;
    },

    // ✅ push new message (user or assistant)
    addMessage: (state, action: PayloadAction<MessageItem>) => {
      state.messages.push(action.payload);
    },

    // ✅ logout / reset app
    clearAllMessages: (state) => {
      state.messages = [];
      state.loading = false;
      state.error = null;
    },

    setMessageLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },

    setMessageError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const {
  addManyMessages,
  addMessage,
  clearAllMessages,
  setMessageLoading,
  setMessageError,
} = messageSlice.actions;

export default messageSlice.reducer;
