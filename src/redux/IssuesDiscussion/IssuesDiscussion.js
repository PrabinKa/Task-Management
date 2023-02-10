import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "",
  comment: ""
};

const IssuesDiscussion = createSlice({
  name: "Issues",
  initialState,
  reducers: {
    GetDiscussion(state, action) {
      state.title = action.payload.title;
      state.comment = action.payload.comment;
    },
  },
});

export const { GetDiscussion } = IssuesDiscussion.actions;
export default IssuesDiscussion.reducer;
