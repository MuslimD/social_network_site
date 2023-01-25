import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  follows: [],
  followsErr: null,
  followsLoad: false,
};

export const followsget = createAsyncThunk(
  "get/follows",
  async ({ userid }, thunkApi) => {
    try {
      const res = await fetch(`http://localhost:4000/follows/${userid}`);
      const follows = await res.json(res);
      if (follows.error) {
        return thunkApi.rejectWithValue(follows.error);
      }
      return thunkApi.fulfillWithValue(follows);
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);




const followsSlice = createSlice({
  name: "follows",
  initialState,
  reducers: {},
  extraReducers: (buider) => {
    buider

      .addCase(followsget.rejected, (state, action) => {
        state.followsErr = action.payload
        state.followsLoad = false
      }).addCase(followsget.pending, (state) => {
        state.followsLoad = true
        state.followsErr = null
      }).addCase(followsget.fulfilled, (state, action) => {
        state.follows = action.payload.follows
        state.followsErr = null
        state.followsLoad = false
      })

  },
});

export default followsSlice.reducer;
