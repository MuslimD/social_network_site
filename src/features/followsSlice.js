import {  createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  follows: []
};

// export const getmessages = createAsyncThunk(
//   "get/message",
//   async ( {chatsId}, thunkApi) => {
//     try {
//       const res = await fetch(`http://localhost:4000/messages/${chatsId}`);
//       const messages = await res.json(res);
//       if (messages.error) {
//         return thunkApi.rejectWithValue(messages);
//       }
//       return thunkApi.fulfillWithValue(messages);
//     } catch (error) {
//       return thunkApi.rejectWithValue(error.message);
//     }
//   }
// );




const followsSlice = createSlice({
  name: "follows",
  initialState,
  reducers: {},
  extraReducers: (buider) => {
    buider

      .addCase()
  
  },
});

export default followsSlice.reducer;
