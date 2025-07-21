import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Example async thunk to fetch feed data
export const fetchFeed = createAsyncThunk("feed/fetchFeed", async (_, thunkAPI) => {
  // Replace with your API call
  const response = await fetch("/api/feed");
  if (!response.ok) throw new Error("Failed to fetch feed");
  return await response.json();
});

const feedSlice = createSlice({
  name: "feed",
  initialState: {
    items: [],
    status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {
    clearFeed(state) {
      state.items = [];
      state.status = "idle";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFeed.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchFeed.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchFeed.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { clearFeed } = feedSlice.actions;
export default feedSlice.reducer;
