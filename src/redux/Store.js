import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { ProjectApi } from "./GetProject/ProjectApi";
import SelectedTabReducer from "./SelectTab/SelectedTab";
import ProjectDetailsReducer from "./ProjectDetails/ProjectDetails";
import UserDetailsReducer from "./GetUserDetails/UserDetails";
import IssuesDiscussionReducer from "./IssuesDiscussion/IssuesDiscussion";

export const store = configureStore({
  reducer: {
    discussion: IssuesDiscussionReducer,
    drawerScreen: SelectedTabReducer,
    projects: ProjectDetailsReducer,
    users: UserDetailsReducer,
    [ProjectApi.reducerPath]: ProjectApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }).concat(ProjectApi.middleware),
});

setupListeners(store.dispatch);
