import { createSlice, createAsyncThunk  } from '@reduxjs/toolkit'

const initialState = {
    TabScreen: "",
}

const selectedTab = createSlice({
  name: 'SelectedTab',
  initialState,
  reducers: {
    GetSelectedTab(state, action) {
        state.TabScreen= action.payload
    },
  },
});



export const { GetSelectedTab } = selectedTab.actions
export default selectedTab.reducer