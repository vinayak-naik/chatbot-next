import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  data: { accessToken: string; refreshToken: string };
}

const initialState: UserState = {
  data: { accessToken: "", refreshToken: "" },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUserToken: (state, action: PayloadAction<any>) => {
      state.data = action.payload.data;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateUserToken } = userSlice.actions;

export default userSlice.reducer;
