import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: "",
};

const UserDetails = createSlice({
  name: "Users",
  initialState,
  reducers: {
    GetUserDetails(state, action) {
      state.Details = action.payload;
    },
  },
});

export const { GetUserDetails } = UserDetails.actions;
export default UserDetails.reducer;
