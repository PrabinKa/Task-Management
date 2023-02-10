import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Details: "",
};

const ProjectDetails = createSlice({
  name: "Projects",
  initialState,
  reducers: {
    GetProjectDetails(state, action) {
      state.Details = action.payload;
    },
  },
});

export const { GetProjectDetails } = ProjectDetails.actions;
export default ProjectDetails.reducer;
