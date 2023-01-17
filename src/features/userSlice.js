import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  inmessage: null,
  upmessage: null,
  signin: false,
  signup: false,
  token: null,
  login: null,
  avatar: null,

};

export const removetok = createAction("removetok");

export const getuser = createAsyncThunk(
  "get/user",
  async ({ id }, thunkApi) => {
    try {
      const res = await fetch("http://localhost:4000/users/" + id);
      const user = await res.json(res);
      if (user.error) {
        return thunkApi.rejectWithValue(user.error);
      }
      return thunkApi.fulfillWithValue(user);
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const authUsers = createAsyncThunk(
  "user/auth",
  async ({ login, password }, thunkApi) => {
    try {
      const res = await fetch("http://localhost:4000/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ login, password }),
      });
      const token = await res.json();
      if (token === "Неверный логин или пароль")
        return thunkApi.rejectWithValue(token);
      if (!token) {
        return thunkApi.rejectWithValue(token.error);
      }

      localStorage.setItem("token", token.token);

      return token;
    } catch (error) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);
export const createUsers = createAsyncThunk(
  "user/post",
  async ({ login, password }, thunkApi) => {
    try {
      const res = await fetch("http://localhost:4000/users/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ login, password }),
      });
      const json = await res.json(res);

      if (json.error) {
        return thunkApi.rejectWithValue(json.error);
      }
      return json;
    } catch (error) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);
const applicationSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (buider) => {
    buider
      .addCase(createUsers.rejected, (state, action) => {
        state.upmessage = action.payload;
        state.signup = false;
      })
      .addCase(createUsers.pending, (state) => {
        state.signup = true;
        state.upmessage = null;
      })
      .addCase(createUsers.fulfilled, (state, action) => {
        state.upmessage = action.payload;
        state.signup = false;
      })
      .addCase(authUsers.rejected, (state, action) => {
        state.inmessage = action.payload;
        state.signin = false;
      })
      .addCase(authUsers.pending, (state) => {
        state.signin = true;
        state.inmessage = null;
      })
      .addCase(authUsers.fulfilled, (state, action) => {
        state.inmessage = null;
        state.signin = false;
        state.token = action.payload.token;
        console.log(action.payload);
      })
      .addCase(removetok, (state) => {
        state.token = null;
      }).addCase(getuser.fulfilled, ((state, action) => {
        state.login = action.payload.login
        state.avatar = action.payload.avatar
      }))
  },
});

export default applicationSlice.reducer;
