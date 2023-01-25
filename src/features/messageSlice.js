import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  chats: [],
  messages: [],
  messageload: false,
  messageerrr: null,
};

export const getmessages = createAsyncThunk(
  "get/message",
  async ( {chatsId}, thunkApi) => {
    try {
      const res = await fetch("http://localhost:4000/messages/" + chatsId);
      const messages = await res.json(res);
      if (messages.error) {
        return thunkApi.rejectWithValue(messages);
      }
      return thunkApi.fulfillWithValue(messages);
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const getchats = createAsyncThunk(
  "get/chats",
  async ({ userid }, thunkApi) => {
    try {
      const res = await fetch("http://localhost:4000/chats/" + userid);
      const chats = await res.json(res);
      if (chats.error) {
        return thunkApi.rejectWithValue(chats.error);
      }
      return thunkApi.fulfillWithValue(chats);
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

// export const getcommentspostsid = createAsyncThunk(
//     "get/comments/postsid",
//     async ({ postsid }, thunkApi) => {
//       try {
//         const res = await fetch("http://localhost:4000/comments/" + postsid);
//         const comments = await res.json(res);
//         if (comments.error) {
//           return thunkApi.rejectWithValue(comments.error);
//         }
//         return thunkApi.fulfillWithValue(comments);
//       } catch (error) {
//         return thunkApi.rejectWithValue(error.message);
//       }
//     }
//   );


// export const createComment = createAsyncThunk(
//   "post/comment",
//   async ({ idCommentaries, userid , commentText}, thunkApi) => {
//     try {
//       const res = await fetch("http://localhost:4000/comments/" + idCommentaries, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ userid, commentText }),
//       });
//       const comment = await res.json(res)
//       return thunkApi.fulfillWithValue(comment);
     

//     } catch (error) {
//       thunkApi.rejectWithValue(error.message);
//     }
//   }
// );



const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {},
  extraReducers: (buider) => {
    buider

      .addCase(getmessages.pending, (state) => {
        state.messageload = true;
        state.messageerrr = null;
      })
      .addCase(getmessages.rejected, (state, action) => {
        state.messageerrr = action.payload;
        state.messageload = false
      })
      .addCase(getmessages.fulfilled, (state, action) => {
        state.messageload = false;
        state.messageerrr = null;
        state.messages = action.payload;
       
      }) .addCase(getchats.pending, (state) => {
        state.messageload = true;
        state.messageerrr = null;
      })
      .addCase(getchats.rejected, (state, action) => {
        state.messageerrr = action.payload;
        state.messageload = false;
      })
      .addCase(getchats.fulfilled, (state, action) => {
        state.messageload = false;
        state.messageerrr = null;
        state.chats = action.payload;
      })
  },
});

export default messageSlice.reducer;
