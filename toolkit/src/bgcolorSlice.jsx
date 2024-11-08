import {createSlice} from "@reduxjs/toolkit";
const bgcolorSlice=createSlice({
    name:"mycolor",
    initialState:{
        bgclr:"green"
    },
    reducers:{
        changeColor:(state,actions)=>{
            state.bgclr=actions.payload;
        }
    }
})
export const {changeColor}=bgcolorSlice.actions;
export default bgcolorSlice.reducer;