import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface User {
  id: string;
  username: string;
  email: string;
  password?: string;
}

interface UserState {
    currentUser: User | null,
}

const initialState: UserState = {
      currentUser: null,};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
     loaduser: (state, action:PayloadAction<{user:User}>)=>{
        state.currentUser = action.payload.user;
    },
    removeuser: (state)=>{
      state.currentUser =  null;
    }
  }
});

export const {
  loaduser,
  removeuser,
  
} = userSlice.actions;

export default userSlice.reducer;
