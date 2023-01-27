import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  chatsUserId: null,
  chatsId: "",
  chats: [],
  messages: [],
  messageload: false,
  messageerrr: null,
};

export const writeUser = createAction("writeuser")

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


export const createChat = createAsyncThunk(
  "post/chat",
  async ({ sender, userid}, thunkApi) => {
    console.log({ sender, userid});
    try {
      const res = await fetch("http://localhost:4000/chats/" + sender, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({recipient: userid }),
      });
      
      const chat = await res.json(res)
      return thunkApi.fulfillWithValue(chat);
     

    } catch (error) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);



export const createMessage = createAsyncThunk(
  "post/message",
  async ({ idCommentaries, userid , commentText}, thunkApi) => {
    try {
      const res = await fetch("http://localhost:4000/" , {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userid, commentText }),
      });
      const comment = await res.json(res)
      return thunkApi.fulfillWithValue(comment);
     

    } catch (error) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);



const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: 
{}
  ,
  extraReducers: (buider) => {
    buider.addCase(writeUser, (state, action) =>{
      state.chatsUserId = action.payload
    }).addCase(createChat.fulfilled, (state, action) => {
state.chatsId = action.payload._id
console.log(action.payload);
    })
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
