import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  token:
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYzgyNDZhMmM2MTNiZDM0YTBkYTliZiIsImlhdCI6MTY3NDIzNjcwNSwiZXhwIjoxNjc0MjQzOTA1fQ.VpZid23iLhNv_-3Wi0aAV-eaCSx-bgBZhUIZHq9xMJg",
  login: null,
  avatar: null,
  aboutme: null,
  inmessage: null,
  upmessage: null,
  signin: false,
  signup: false,
  userload: false,
  usererror: null,
  ischangeuser: false,
  changesusererr: null,
};

export const removetok = createAction("removetok");

export const getuser = createAsyncThunk(
  "get/user",
  async ({ userid }, thunkApi) => {
    try {
      const res = await fetch("http://localhost:4000/users/" + userid);
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

export const useravatar = createAsyncThunk(
  "upload/avatar",
  async (formData, thunkApi) => {
    try {
      const res = await fetch("http://localhost:4000/users/upload/avatar", {
        method: "POST",
        body: formData,
      });
     
      thunkApi.fulfillWithValue(res.json(res))
    } catch (error) {
      thunkApi.rejectWithValue(error.message);
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

export const patchuser = createAsyncThunk(
  "user/patch/login",
  async ({ userid, userName }, thunkApi) => {
    try {
      const res = await fetch("http://localhost:4000/users/" + userid, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ login: userName }),
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

export const patchaboutme = createAsyncThunk(
  "user/patch/aboutme",
  async ({ userid, aboutMe }, thunkApi) => {
    try {
      const res = await fetch("http://localhost:4000/users/" + userid, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ aboutme: aboutMe }),
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
      })
      .addCase(removetok, (state) => {
        state.token = null;
      })
      .addCase(getuser.fulfilled, (state, action) => {
        state.login = action.payload.login;
        {
          action.payload.avatar
            ? (state.avatar = action.payload.avatar)
            : (state.avatar = null);
        }
        {
          action.payload.aboutme
            ? (state.aboutme = action.payload.aboutme)
            : (state.aboutme = null);
        }
        state.userload = false;
        state.usererror = null;
      })
      .addCase(getuser.pending, (state) => {
        state.userload = true;
        state.usererror = null;
      })
      .addCase(getuser.rejected, (state, action) => {
        state.userload = false;
        state.usererror = action.payload;
      })
      .addCase(patchaboutme.pending, (state) => {
        state.ischangeuser = true;
        state.changesusererr = null;
      })
      .addCase(patchaboutme.rejected, (state, action) => {
        state.changesusererr = action.payload;
        state.ischangeuser = false;
      })
      .addCase(patchaboutme.fulfilled, (state, action) => {
        state.changesusererr = null;
        state.ischangeuser = false;
        state.aboutme = action.payload.aboutme;
      })
      .addCase(patchuser.pending, (state) => {
        state.ischangeuser = true;
        state.changesusererr = null;
      })
      .addCase(patchuser.rejected, (state, action) => {
        state.changesusererr = action.payload;
        state.ischangeuser = false;
      })
      .addCase(patchuser.fulfilled, (state, action) => {
        state.changesusererr = null;
        state.ischangeuser = false;
        state.login = action.payload.login;
      });
  },
});

export default applicationSlice.reducer;
