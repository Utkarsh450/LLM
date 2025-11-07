// chatListSlice.ts
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
export interface ChatItem {
  chatId: string;
  title: string;
  updatedAt?: number;
}

interface ChatListState {
  chats: ChatItem[];
  activeChatId: string | null;
  loading: boolean;
  error: string | null;
}

const initialState: ChatListState = {
  chats: [],
  activeChatId: null,
  loading: false,
  error: null,
};

const chatListSlice = createSlice({
  name: "chatList",
  initialState,
  reducers: {
    setChats: (state, action: PayloadAction<ChatItem[]>) => {
      state.chats = action.payload;
    },
    addChat: (state, action: PayloadAction<ChatItem>) => {
      state.chats.unshift(action.payload);
    },
    updateChat: (state, action: PayloadAction<{ chatId: string; changes: Partial<ChatItem> }>) => {
      const i = state.chats.findIndex(c => c.chatId === action.payload.chatId);
      if (i >= 0) state.chats[i] = { ...state.chats[i], ...action.payload.changes };
    },
    removeChatById: (state, action: PayloadAction<string>) => {
      state.chats = state.chats.filter(c => c.chatId !== action.payload);
      if (state.activeChatId === action.payload) state.activeChatId = null;
    },
    setActiveChatId: (state, action: PayloadAction<string | null>) => {
      state.activeChatId = action.payload;
    },
    setChatLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setChatError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    clearAllChats: (state) => {
      state.chats = [];
      state.activeChatId = null;
      state.loading = false;
      state.error = null;
    },
  },
});

export const {
  setChats,
  addChat,
  updateChat,
  removeChatById,
  setActiveChatId,
  setChatLoading,
  setChatError,
  clearAllChats,
} = chatListSlice.actions;

export default chatListSlice.reducer;
