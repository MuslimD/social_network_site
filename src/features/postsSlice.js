import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  comments: [],
  postsload: false,
  postserrr: null,
};

export const getpostsuserid = createAsyncThunk(
  "get/posts/uaserid",
  async ({ userid }, thunkApi) => {
    try {
      const res = await fetch("http://localhost:4000/posts/" + userid);
      const posts = await res.json(res);
      if (posts.error) {
        return thunkApi.rejectWithValue(posts.error);
      }
      return thunkApi.fulfillWithValue(posts);
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const getcommentspostsid = createAsyncThunk(
    "get/comments/postsid",
    async ({ postsid }, thunkApi) => {
      try {
        const res = await fetch("http://localhost:4000/comments/" + postsid);
        const comments = await res.json(res);
        if (comments.error) {
          return thunkApi.rejectWithValue(comments.error);
        }
        return thunkApi.fulfillWithValue(comments);
      } catch (error) {
        return thunkApi.rejectWithValue(error.message);
      }
    }
  );


export const createComment = createAsyncThunk(
  "post/comment",
  async ({ idCommentaries, userid , commentText}, thunkApi) => {
    try {
      const res = await fetch("http://localhost:4000/comments/" + idCommentaries, {
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



const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (buider) => {
    buider

      .addCase(getpostsuserid.pending, (state) => {
        state.postsload = true;
        state.postserrr = null;
      })
      .addCase(getpostsuserid.rejected, (state, action) => {
        state.postserrr = action.payload;
        state.postsload = false;
      })
      .addCase(getpostsuserid.fulfilled, (state, action) => {
        state.postsload = false;
        state.postserrr = null;
        state.posts = action.payload;
      }) .addCase(getcommentspostsid.pending, (state) => {
        state.postsload = true;
        state.postserrr = null;
      })
      .addCase(getcommentspostsid.rejected, (state, action) => {
        state.postserrr = action.payload;
        state.postsload = false;
      })
      .addCase(getcommentspostsid.fulfilled, (state, action) => {
        state.postsload = false;
        state.postserrr = null;
        state.comments = action.payload;
      }) .addCase(createComment.pending, (state) => {
        state.postsload = true;
        state.postserrr = null;
      })
      .addCase(createComment.rejected, (state, action) => {
        state.postserrr = action.payload;
        state.postsload = false;
      })
      .addCase(createComment.fulfilled, (state, action) => {
        state.postsload = false;
        state.postserrr = null;
        state.comments = [...state.comments, action.payload] ;
      });
  },
});

export default postsSlice.reducer;
