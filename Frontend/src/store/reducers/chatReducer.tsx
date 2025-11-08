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
    addChat: (state, action: PayloadAction<ChatItem>) => {
      state.chats.unshift(action.payload);
    },
    setChats: (state, action: PayloadAction<ChatItem[]>)=>{
      state.chats = (action.payload)
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
  addChat,
  setChats,
  removeChatById,
  setActiveChatId,
  setChatLoading,
  setChatError,
  clearAllChats,
} = chatListSlice.actions;

export default chatListSlice.reducer;
