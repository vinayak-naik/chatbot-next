import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AdminState {
  data: { accessToken: string; refreshToken: string };
}

const initialState: AdminState = {
  data: { accessToken: "", refreshToken: "" },
};

export const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    updateAdminToken: (state, action: PayloadAction<any>) => {
      state.data = action.payload.data;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateAdminToken } = adminSlice.actions;

export default adminSlice.reducer;
