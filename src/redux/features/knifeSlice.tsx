import { createSlice } from "@reduxjs/toolkit";

type KnifeType = {
    knife: string;
};

const initialState: KnifeType = { knife: '' };

const knifeSlice = createSlice({
    name: 'knife',
    initialState,
    reducers: {
        knifeIncrement: (state) => {
            state.knife = state.knife + '🔪'
        },
        knifeDecrement: (state) => {
            state.knife = state.knife.slice(0, -2)
        }
       
    }

})

export const { knifeIncrement, knifeDecrement } = knifeSlice.actions;

export default knifeSlice.reducer;