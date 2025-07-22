import { createSlice } from "@reduxjs/toolkit";

const feedSlice = createSlice({
  initialState: null,
  name: "feed",
  reducers: {
    addFeed: (state, action) => action.payload,
    removeFeed: (state, action) => null,
  },
});

export const { addFeed, removeFeed } = feedSlice.actions;
export default feedSlice.reducer;
