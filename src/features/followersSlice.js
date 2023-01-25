import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    followers: [],
    followersErr: null,
    followersLoad: false,
};

export const followersget = createAsyncThunk(
    "get/followers",
    async ({ userid }, thunkApi) => {
        try {
            const res = await fetch(`http://localhost:4000/followers/${userid}`);
            const followers = await res.json(res);
            if (followers.error) {
                return thunkApi.rejectWithValue(followers);
            }
            return thunkApi.fulfillWithValue(followers);
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
);




const followersSlice = createSlice({
    name: "followers",
    initialState,
    reducers: {},
    extraReducers: (buider) => {
        buider

            .addCase(followersget.rejected, (state, action) => {
                state.followersErr = action.payload
                state.followersLoad = false
                console.log(action.payload);
            }).addCase(followersget.pending, (state) => {
                state.followersErr = null
                state.followersLoad = true
            }).addCase(followersget.fulfilled, (state, action) => {
                state.followers = action.payload.followers
                state.followersErr = null
                state.followersLoad = false
                console.log(action.payload.followers);
            })

    },
});

export default followersSlice.reducer;
