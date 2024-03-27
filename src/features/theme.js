import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = ""

export const themeSlice = createSlice({
    name: "theme",
    initialState: {value: initialStateValue},

    reducers: {
        changeColors: (state, action) => {
            state.value = action.payload
        }
    },

})
// export const {login} = userSlice.actions;
export const { changeColors } = themeSlice.actions

export default themeSlice.reducer;