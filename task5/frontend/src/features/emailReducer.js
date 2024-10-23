import { createSlice } from "@reduxjs/toolkit";

const initialState = {currentEmail: 'm'};

const emailSlice = createSlice({
    name: "email",
    initialState,
    reducers: {
        setEmail: (state, action) => {
        state.currentEmail = action.payload;
       
        },
    },
    });

export const { setEmail } = emailSlice.actions;
export default emailSlice.reducer;